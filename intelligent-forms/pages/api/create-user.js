const CosmosClient = require('@azure/cosmos').CosmosClient;
//const CosmosContainer = require('@azure/cosmos').Container;
import config from '../../config';

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/api', createProxyMiddleware({ target: 'https://wondertech.documents.azure.com/', changeOrigin: true }));
// app.listen(3000);

const createUser = async function (user) {
  const { endpoint, key, database, container } = config;

  const client = new CosmosClient({ endpoint, key });

  const databaseID = client.database(database);
  const containerID = databaseID.container(container);

  for (const property of user) {
    await containerID.items.create(property);
    //console.log(`'${resource.name}' inserted`);
    console.log('User inserted');
  }
  //console.log(containerID, items);
};

export default createUser;
