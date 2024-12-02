const express= require('express');
const myroute = express.Router();
const connection=require('../db/connection');


//to get all tasks
myroute.get('/todos',(req,res) => {
connection.query('select * from todolist',(err,data)=>{
    if(!err) {
        res.status(200).json(data);
    } else {
        res.status(500).json(err);
    }
})
})
//add a new Task
myroute.post('/todos',(req,res) =>{
    console.log(req.body);
    connection.query('INSERT INTO todolist VALUES (?,?,?,?)',[req.body.id,req.body.title,req.body.description,req.body.status],(err,data)=>{
        console.log(data)
        if(!err) {
            res.status(201).send(data);
        } else {
            res.status(500).json("Insert Failed");
        }
    })
})

//updating todolist
myroute.put('/todos/:id',(req,res)=>{
    const id=req.params.id;
    const{title,description,status}=req.body;
    connection.query('update todolist set title = ?, description = ?, status =? where id=?',[title,description,status,id],(err,data)=>{
        if(!err) {
            res.status(200).json(data);
        } else {
            res.status(500).json({message:"Error updating todolist"});
        }
    })
})
//for delete todolist using ID
myroute.delete('/todos/:id',(req,res)=>{
    const id=req.params.id;
    connection.query('delete from todolist where id=?',[id],(err,data)=>{
        if(!err) {
            res.status(200).json(data);
        } else {
            res.status(500).json({message:"Error deleting todolist"});
        }
    })
})

module.exports = myroute;