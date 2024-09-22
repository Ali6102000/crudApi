import express from 'express'
import {config} from 'dotenv'

import {createStudentDocument,removeStudentDocument,getAllStudents,getSingleStudent} from './src/db.js'

config();


const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hii")
});

app.post('/student',async (req,res)=>{
    await createStudentDocument(req.body);
    // console.log(req.body);
    // res.send(req.body)
    res.send('ok');
})
app.delete('/student',async(req,res)=>{
    await removeStudentDocument(req.body._id);
    res.send("done");
})

app.get('/student',async(req,res)=>{
    let data=await getAllStudents({});
    res.send(data);
})

app.get('/getSingleStudent',async(req,res)=>{
    let data=await getSingleStudent(req.body._id);
    res.send(data);
})

app.listen(process.env.PORT);
// console.log(process.env.PORT);

