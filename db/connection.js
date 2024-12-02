const mysql=require ('mysql');

// create a connection to the database
const mysqlConnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'shubham',
    database:'advjava',
    port:3306
})
mysqlConnection.connect((err)=>{
if (err){
    console.log('Error connecting to database',err);
}else{
    console.log('Connected to the database');
}

});
module.exports=mysqlConnection;