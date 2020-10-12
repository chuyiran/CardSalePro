const express = require('express')
const dotenv = require('dotenv')

dotenv.config({
    path: "./config/config.env"
})
const app = new express();

const prot = process.env.PORT || 5001;
app.listen(prot, () => {
    console.log(`Server is running  in ${process.env.NODE_ENV} node on prot ${prot}`);
})