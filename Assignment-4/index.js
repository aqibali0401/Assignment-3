const express = require('express');
const app = express();
// const fs = require('fs');
const fs =require("fs/promises");
const axios = require('axios');
// fs.writeFileSync()
const {parse, stringify} = require('flatted');
app.use(express.json());
// const data2 = require("./data2.json")


app.get('/', (req, res) => {
    res.send('hello buddy!!');
})


app.get("/create-json",async(req,res)=>{
    try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        const datafile = stringify(data)
        console.log(datafile.json)
        const datafile2 = datafile.toString();
        fs.writeFile("data.json",datafile2,"utf8")
        console.log("file created ....")
        res.status(200).send(datafile2)
    }
    catch(error){
        console.log(error)
    }
});


// app.get("/get_alldata",(req,res)=>{
//     res.send(data2)
// })













app.listen(4000, () => {
    console.log("server started at port 4000!")
})