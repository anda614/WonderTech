const CosmosClient = require('@azure/cosmos').CosmosClient;
//const CosmosContainer = require('@azure/cosmos').Container;
import config from '../../config';

//const cont = new CosmosContainer();

const queryDatabase = async function () {
  const { endpoint, key, database, container } = config;

  const client = new CosmosClient({ endpoint, key });

  const databaseID = client.database(database);
  const containerID = databaseID.container(container);

  if (endpoint) {
    console.log(`Querying container:\\n${containerID}`);
    const querySpec = {
      query: 'select c.accName,' + ' c.address,' + ' c.email,' + ' f.title,' + ' s.timestamp,' + ' d.val,' + ' d.placeholder' + ' from c join f in c.forms join s in f.submissions join d in s.data',
    };

    const { resources: items } = await containerID.items.query(querySpec).fetchAll();
    return { CosmosData: items };
  }
};

export default queryDatabase;
