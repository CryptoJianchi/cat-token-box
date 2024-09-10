const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '..', '.env.example');
const destinationFile = path.join(__dirname, '..', '.env');

// check if the file exists at the destination
if (!fs.existsSync(destinationFile)) {
    // copy the file if it doesn't exist
    fs.copyFileSync(sourceFile, destinationFile);
    console.log(`copied .env from ${sourceFile}`);
} else {
    console.log(`.env already exists ${destinationFile}`);
}