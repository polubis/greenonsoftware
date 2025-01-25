const fs = require('fs');
const path = require('path');

function encodeServiceAccount(filePath) {
  try {
    // Read the service account JSON file
    const serviceAccountJson = fs.readFileSync(filePath, 'utf8');

    // Encode to Base64
    const base64Encoded = Buffer.from(serviceAccountJson).toString('base64');

    // Write to .env file
    const envContent = `FIREBASE_SERVICE_ACCOUNT=${base64Encoded}`;
    fs.writeFileSync(path.join(__dirname, '.env'), envContent);

    console.log('Service account encoded and saved to .env');
    return base64Encoded;
  } catch (error) {
    console.error('Error encoding service account:', error);
  }
}

const serviceAccountPath = path.join(__dirname, 'sa.json');
encodeServiceAccount(serviceAccountPath);
