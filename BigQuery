const { BigQuery } = require('@google-cloud/bigquery');

const project_id = 'seu-project-id';
const source_dataset_id = 'dataset-original';
const source_table_id = 'tabela-original';
const destination_dataset_id = 'dataset-destino';
const destination_table_id = 'tabela-destino';

async function copyTable() {
  const bigquery = new BigQuery({ projectId: project_id });

  const sourceTableRef = bigquery.dataset(source_dataset_id).table(source_table_id);
  const destinationTableRef = bigquery.dataset(destination_dataset_id).table(destination_table_id);

  const copyJobOptions = {
    createDisposition: 'CREATE_IF_NEEDED',
    writeDisposition: 'WRITE_EMPTY',
  };

  const [job] = await bigquery
    .dataset(destination_dataset_id)
    .table(destination_table_id)
    .copy(sourceTableRef, copyJobOptions);

  await job.getMetadata(); // Wait for the job to complete

  console.log('Cópia da tabela concluída com sucesso!');
}

copyTable().catch(console.error);
