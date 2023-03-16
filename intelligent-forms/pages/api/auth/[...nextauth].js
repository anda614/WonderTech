import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const CosmosClient = require('@azure/cosmos').CosmosClient;
import config from '../../../config';

const getUsers = async function () {
  const { endpoint, key, database, container } = config;

  const client = new CosmosClient({ endpoint, key });

  const databaseID = client.database(database);
  const containerID = databaseID.container(container);

  if (endpoint) {
    const querySpec = {
      query: 'SELECT * FROM c',
    };

    const { resources: items } = await containerID.items.query(querySpec).fetchAll();
    return { resources: items };
  }
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'E-mail', type: 'email', placeholder: 'your email...' },
        password: { label: 'Password', type: 'password', placeholder: 'your password...' },
      },
      authorize: async (credentials) => {
        let user;

        try {
          const items = await getUsers();
          items.resources.map(({ id, email, password, accName, address }) => {
            if (credentials.email === email && credentials.password === password) {
              user = { id, email, password, accName, address };
            }
          });
        } catch (error) {
          console.log('Error: ', error);
        }
        return typeof user !== 'undefined' ? user : null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        console.log('USER: ', user);
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'wondertech',
  jwt: {
    secret: 'wondertech',
    encryption: true,
  },
});
