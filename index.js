const express=require("express");
const PORT=8000;
const users=require('./MOCK_DATA.json');
const app=express();
app.get('/api/users',(req,res)=>{
  return res.json(users);
})
app.get('/users',(req,res)=>{
  const html=
  `
  <ul>
    ${users.map(user=>
      `
      <li>${user.first_name}</li>
      `
    ).join("")}
  </ul>
  `
  res.send(html);
})
app.route('/api/usres/:id').get()((req,res)=>{
  const id=Number(req.params.id);
  const user=users.find(user=>user.id===id);
  return res.json(user);
}).patch((req,res)=>{
  return res.json({status:"Pending"})
}).delete((req,res)=>{
  return res.json({status:"Pending"})
})


app.post('/api/users',(req,res)=>{
  res.json({status:'Pending'});
})

app.listen(PORT,()=>{
  console.log("The Server is running")
})