const csvFilePath='data.csv';
const jsonOutFilePath='data.json';
const csv = require('csvtojson');
const fs = require('fs');

(async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);
  await fs.writeFileSync(jsonOutFilePath, JSON.stringify(jsonArray));
})();
