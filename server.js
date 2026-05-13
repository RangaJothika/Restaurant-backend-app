const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app.js")//getting app express obj from index.js
//can use import too here but express still mostly use older require version
//to use import need to have export + type :module in  package.json
const connectDB = require("./config/db");


connectDB();
const PORT = process.env.PORT;//constant configuration value

app.listen(PORT, () => {//it calls http.createServer() and server.listen() internally
    console.log(`Server is started and running on port ${PORT}`);
})