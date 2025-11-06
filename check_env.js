// check_env.js
const fs = require('fs');
console.log('cwd:', process.cwd());
try {
  console.log('.env exists:', fs.existsSync('.env'));
  console.log('.env content:');
  console.log(fs.readFileSync('.env',{encoding:'utf8'}));
} catch(e){
  console.error(e);
}
require('dotenv').config();
console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL);
