import { getSession } from 'next-auth/react';

export default async function getUserData(req, res) {
  const session = await getSession({ req });

  res.status(200).json({ user: session.user }); //session?.user
}

// const CosmosClient = require('@azure/cosmos').CosmosClient;
// import config from '../../config';

// const getUserData = async function (userEmail) {
//   const { endpoint, key, database, container } = config;

//   const client = new CosmosClient({ endpoint, key });

//   const databaseID = client.database(database);
//   const containerID = databaseID.container(container);

//   if (endpoint) {
//     const querySpec = {
//       query: "SELECT * FROM c where c.email = '" + userEmail + "'",
//     };

//     const { resources: items } = await containerID.items.query(querySpec).fetchAll();
//     return { resources: items };
//   }
// };

// export default getUserData;
