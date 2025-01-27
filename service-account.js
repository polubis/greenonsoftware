const fs = require('fs');
const path = require('path');

const inputFilePath = path.resolve(__dirname, 'service-account.json');

const convertJsonToEnvFormat = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');

    const parsedJson = JSON.parse(jsonData);
    const envFormat = JSON.stringify(parsedJson)
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/"/g, '\\"');

    console.log(`FIREBASE_SERVICE_ACCOUNT="${envFormat}"`);
  } catch (error) {
    console.error('Error reading or processing the file:', error.message);
  }
};

convertJsonToEnvFormat(inputFilePath);
