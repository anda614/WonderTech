import createUser from './api/create-user';
import { useState } from 'react';
//import config from '../config';
//const CosmosClient = require('@azure/cosmos').CosmosClient;

// const getUsers = async function () {
//   const { endpoint, key, database, container } = config;

//   const client = new CosmosClient({ endpoint, key });

//   const databaseID = client.database(database);
//   const containerID = databaseID.container(container);

//   if (endpoint) {
//     const querySpec = {
//       query: 'SELECT * FROM c',
//     };

//     const { resources: items } = await containerID.items.query(querySpec).fetchAll();
//     return { resources: items };
//   }
// };

function Register() {
  const [username, setUsername] = useState('');
  const [mail, setEmail] = useState('');
  const [adrs, setAddress] = useState('');
  const [pass, setPassword] = useState('');
  const [confpass, setConfirmPassword] = useState('');

  // const checkIfUserAlreadyExists = async function () {
  //   try {
  //     const items = await getUsers();
  //     items.resources.map(({ email, accName }) => {
  //       if (mail === email) {
  //         alert('User with similar e-mail already exists. Please insert another e-mail.');
  //         return true;
  //       }
  //       if (accName === username) {
  //         alert('User with similar account name already exists. Please insert another name.');
  //         return true;
  //       }
  //       return false;
  //     });
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (checkIfUserAlreadyExists) {
    //   return null;
    // }

    if (pass === confpass) {
      createUser([
        {
          accName: username,
          address: adrs,
          email: mail,
          password: pass,
        },
      ]);
    } else alert("Passwords don't match");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={mail} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={adrs} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={pass} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirm password:</label>
        <input type="password" id="confirmpassword" value={confpass} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

// export default function Register() {
//   return (
//     <div>
//       <div>
//         <div>
//           <label for="firstName">Account Name </label>
//           <input type="text" id="firstName" placeholder="Account Name" />
//         </div>
//         <div>
//           <label for="email">Email </label>
//           <input type="email" id="email" placeholder="Email" />
//         </div>
//         <div>
//           <label for="address">Address </label>
//           <input type="text" id="address" placeholder="Address" />
//         </div>
//         <div>
//           <label for="password">Password </label>
//           <input type="password" id="password" placeholder="Password" />
//         </div>
//         <div>
//           <label for="confirmPassword">Confirm Password </label>
//           <input type="password" id="confirmPassword" placeholder="Confirm Password" />
//         </div>
//       </div>
//       <div>
//         <button
//           onClick={() => {
//             if (document.getElementById('password').value === document.getElementById('confirmPassword').value) {
//               if (
//                 createUser([
//                   {
//                     accName: document.getElementById('firstName').value,
//                     address: document.getElementById('address').value,
//                     email: document.getElementById('email').value,
//                     password: document.getElementById('password').value,
//                   },
//                 ])
//               )
//                 alert('User created.');
//             } else alert("Passwords don't match.");
//           }}
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }
