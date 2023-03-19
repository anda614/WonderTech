import createUser from './api/create-user';
import { useState } from 'react';
import register from '../styles/register.module.css';
import registerLogo from '../images/register-logo.png';
import registerPageImage from '../images/register-page-image.png';
import Image from 'next/image';
import Layout from '../components/Navbar';

import config from '../config';
const CosmosClient = require('@azure/cosmos').CosmosClient;

const { endpoint, key, database, container } = config;

const client = new CosmosClient({ endpoint, key });

const databaseID = client.database(database);
const containerID = databaseID.container(container);

const uppercaseRegex = /[A-Z]/;
const digitRegex = /\d/;

function Register() {
  const [username, setUsername] = useState('');
  const [mail, setEmail] = useState('');
  const [adrs, setAddress] = useState('');
  const [pass, setPassword] = useState('');
  const [confpass, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const querySpec = {
      query: "SELECT c.id FROM c WHERE c.accName = '" + username + "' OR c.email = '" + mail + "'",
    };
    const { resources } = await containerID.items.query(querySpec).fetchAll();
    if (resources.length > 0) alert('Email or account name already existent.');
    else if (pass.length < 8 || pass.length > 14 || !uppercaseRegex.test(pass) || !digitRegex.test(pass))
      alert('Password invalid (must be between 8-14 characters long, at least one uppercase letter, at least one digit).');
    else if (pass === confpass) {
      createUser([
        {
          accName: username,
          address: adrs,
          email: mail,
          password: pass,
        },
      ]);
      alert('User created.');
    } else alert("Passwords don't match");
  };

  return (
    <div className={register.main}>
      <Layout></Layout>
      <div className={register.content}>
        <form className={register.form} onSubmit={handleSubmit}>
          <Image className={register.registerLogo} src={registerLogo} alt="Register Logo" width="80" height="73"></Image>
          <p className={register.title}>Intelligent forms</p>
          <p className={register.registerMessage}>Register your account and start creating!</p>
          <div className={register.userInfo}>
            <label className={register.labels} htmlFor="username">
              Account Name:
            </label>
            <input className={register.textField} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br></br>
            <label className={register.labels} htmlFor="email">
              Email:
            </label>
            <input className={register.textField} type="email" id="email" value={mail} onChange={(e) => setEmail(e.target.value)} required />
            <br></br>
            <label className={register.labels} htmlFor="address">
              Address:
            </label>
            <input className={register.textField} type="text" id="address" value={adrs} onChange={(e) => setAddress(e.target.value)} required />
            <br></br>
            <label className={register.labels} htmlFor="password">
              Password:
            </label>
            <input className={register.textField} type="password" id="password" value={pass} onChange={(e) => setPassword(e.target.value)} required />
            <br></br>
            <label className={register.labels} htmlFor="confirmpassword">
              Confirm password:
            </label>
            <input className={register.textField} type="password" id="confirmpassword" value={confpass} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <br></br>
            <input type="checkbox" required />
            <label className={register.termsConditionsText}>I agree to Intelligent Forms terms and conditions.</label>
          </div>
          <button className={register.submitButton} type="submit">
            Create my account
          </button>
        </form>
        <div className={register.registerPageDecor}>
          <Image className={register.registerPageImage} src={registerPageImage} alt="Register Page Image - Documents" width="100" height=""></Image>
          <p className={register.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className={register.paragraph}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
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
