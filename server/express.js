const express = require('express');
const port = 4000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//Middleware
app.use(cors());
app.use(bodyParser.json())

app.get('/details',(req,res)=>{
   res.json({message:'Fetched Successfully'});
});
app.post('/contacts',(req,res)=>{
    const { name, phoneno, email } = req.body;
   console.log(req.body)
   res.json({ name,phoneno,email});
});
app.listen(port ,()=>{
 console.log('Server is running at' + port);
});