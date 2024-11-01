import express from 'express'
import {config} from 'dotenv'
import cors from 'cors';
import {createStudentDocument,removeStudentDocument,getAllStudents,getSingleStudent,updateStudent} from './src/db.js'

config();

let uri=process.env.MONGO_DB_CONNECTION;
const app=express();

app.use(cors());
//hayde mahal lbody-parser
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hii")
});

app.post('/student',async (req,res)=>{
    await createStudentDocument(req.body,uri);
    // console.log(req.body);
    // res.send(req.body)
    res.send('ok');
})
app.delete('/student',async(req,res)=>{
    await removeStudentDocument(req.body._id,uri);
    res.send("done");
})

app.get('/student',async(req,res)=>{
    let data=await getAllStudents(uri);
    res.send(data);
})


app.get('/getSingleStudent', async (req, res) => {
    const studentId = req.query.id; // Get the student ID from the query parameters
    let data = await getSingleStudent(studentId,uri);
    res.send(data);
});

app.post('/updateStudent',async (req,res)=>{
    const age=req.body.newAge;
    const id=req.body.studentId;
    await updateStudent(id,age,uri);
    res.send("updated!!!")

})
app.listen(process.env.PORT,()=>{
    console.log(`app listening to port ${process.env.PORT}`);
});




//https://crudapi-v6k2.onrender.com/ api deployed on render.com and this is the link