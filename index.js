const express=require("express");
const app=express();
const PORT=8000;
app.listen(PORT,()=>{console.log(`The server has begun at PORT ${PORT}`)})