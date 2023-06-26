//import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import mongoose module
const mongoose = require('mongoose');
//Connect App with DB
mongoose.connect('mongodb://127.0.0.1:27017/restoDB');
//create express application
const app = express();

// Configure Body-parser

// Send JSON responses

app.use(bodyParser.json());

// Get objects from Request

app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(

    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

  );

  res.setHeader(

    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"

  );

  next();

});
//Models importation
const Plat=require("./models/plat");
//Models importation
const User=require("./models/user");
//Models importation
const Chef=require("./models/chef");

//Plat Tab simulation
plats=[
{id:1, name:"Sushi", price:40, description:"Plat traditionnel japonais, composé d'un riz vinaigré appelé shari combiné avec un autre ingrédient appelé neta qui est habituellement du poisson cru ou des fruits de merPlat traditionnel japonais, composé d'un riz vinaigré appelé shari combiné avec un autre ingrédient appelé neta qui est habituellement du poisson cru ou des fruits de mer"},
{id:2, name:"Coscous", price:20, description:"Plat traditionnel Tunisien"},
{id:3, name:"Lasagne", price:30, description:"Les lasagnes (lasagna, en italien) sont à la fois des pâtes alimentaires en forme de feuilles rectangulaires, ainsi qu'une recette de cuisine italienne à base de couches alternées de pâtes lasagnes, parmesan, mozzarella, ou ricotta, et de sauce bolognaise ou sauce béchamel, gratiné au four"}
]
//Users Tab simulation
users=[
    {id:1, firstName:"Asma", lastName:"Akaichi", email:"asmaakaichi@gmail.com", password:"123123", confirmPassword:"123123", tel:"52521528"},
    {id:2, firstName:"Ali", lastName:"Ben Mohamed", email:"ali@gmail.com", password:"147147", confirmPassword:"147147", tel:"22514214"},
    {id:3, firstName:"Amal", lastName:"Salhi", email:"amal@gmail.com", password:"123456", confirmPassword:"123456", tel:"99845147"}

]
//Business Logic: Get All Plats
app.get("/plats", (req,res)=>{
console.log("Here into BL:get all plats");
Plat.find().then((docs)=>{
  console.log("Here docs", docs);
  res.json({platsArray:docs});
})

});
//Business Logic: Get All Chefs
app.get("/chefs", (req,res)=>{
console.log("Here into BL:get all chefs"); 
Chef.find().then((docs)=>{
  console.log("Here docs", docs);
  res.json({chefArray:docs});  
})
})
//Business Logic: Get All Users
app.get("/users", (req,res)=>{
console.log("Here into BL:get all users");
User.find().then((docs)=>{
res.json({usersArray:docs});
})
    
    });
//Business Logic: Get Plat By Id
app.get("/plats/:id", (req,res)=>{
console.log("Here into BL:get plat By Id");
let id=req.params.id;
Plat.findOne({_id:id}).then((doc)=>{
  res.json({plat:doc});
})
    })
//Business Logic: Get Chef By Id   
app.get("/chefs/:id", (req,res)=>{
console.log("Here into BL:get chef By Id");  
let id=req.params.id;
Chef.findOne({_id:id}).then((doc)=>{
  res.json({chef:doc}); 
})
})
//Business Logic: Get User By Id
app.get("/users/:id", (req,res)=>{
console.log("Here into BL:get user By Id");  
let id=req.params.id;
User.findOne({_id:id}).then((doc)=>{
  res.json({user:doc});
})

})
//Business Logic: deletePlat
app.delete("/plats/:id", (req, res) => {
console.log("Here into BL: delete plat By Id");   
let id=req.params.id;
Plat.deleteOne({_id:id}).then((response)=>{
console.log("Here response", response);
if (response.deletedCount==1) {
res.json({isDeleted: true});
}
else{
  res.json({isDeleted: false});
}
});
    });   
//Business Logic: deleteChef
app.delete("/chefs/:id", (req,res)=>{
console.log("Here into BL: delete chef By Id");   
let id=req.params.id;
Chef.deleteOne({_id:id}).then((response)=>{
  console.log("Here response", response);
  if (response.deletedCount==1) {
  res.json({isDeleted: true});
  }
  else{
    res.json({isDeleted: false});
  } 
})
})    
//Business Logic: deleteUser
app.delete("/users/:id", (req,res)=>{
console.log("Here into BL: delete user By Id");  
let id =req.params.id;
User.deleteOne({_id:id}).then((response)=>{
console.log("Here response", response);
if (response.deletedCount==1) {
res.json({isDeleted: true});
}
else{
res.json({isDeleted: false});
} 
})
res.json({isDeleted: true});
});
//Business Logic: addPlat
app.post("/plats", (req, res) => {
console.log("Here into BL: add plat");
let plat= new Plat(req.body);
plat.save();
res.json({message:"Added plat with sucess"});   
  }); 
//Business Logic: addChef
app.post("/chefs", (req,res)=>{
console.log("Here into BL: add chef"); 
let chef=new Chef(req.body);
chef.save();
res.json({message:"Added chef with sucess"});  
})    
  //Business Logic: signup
app.post("/users/signup", (req, res) => {
console.log("Here into BL: add user");
bcrypt.hash(req.body.password,8).then((cryptedPwd)=>{
console.log("Here Crypted PWD", cryptedPwd);
let user= new User({
  firstName:req.body.firstName,
  lastName:req.body.lastName,
  email:req.body.email,
  password:cryptedPwd,
  tel:req.body.tel,
  role:req.body.role,
  
});
user.save((err,doc)=>{
console.log("Here error", err);
console.log("Here doc", doc);
if (err) {
res.json({message:"Email Exists"});
} else {
res.json({message:"Added user with sucess"});
};
});
});
});    
  //Business Logic: login
  app.post("/users/login", (req,res)=>{
    console.log("Here into BL: login", req.body);
    let exist=false;
    let user
    for (let i = 0; i < users.length; i++) {
      if (users[i].email==req.body.email && users[i].password==req.body.password ) {
        exist=true;
        user=users[i];
        break;
      }    
    }
   res.json({isLoggedIn:exist})
  })
//Business Logic: editPlat
app.put("/plats", (req, res) => {
console.log("Here into BL: edit plat");
let newPlat=req.body;
Plat.updateOne({_id:newPlat._id}, newPlat).then((response)=>{
  console.log("Here response after update", response);
  if (response.nMododified==1) {
    res.json({isUpdated:true});
  } else {
  res.json({isUpdated:false});
  }
})

  });
//Business Logic: editPlat
app.put("/chefs", (req,res)=>{
console.log("Here into BL: edit chef");  
let newChef=req.body;
Chef.updateOne({_id:newChef._id}, newChef).then((response)=>{
  console.log("Here response after update", response);
  if (response.nMododified==1) {
    res.json({isUpdated:true});
  } else {
  res.json({isUpdated:false});
  } 
})
})
//Business Logic: editProfile
app.put("/users", (req,res)=>{
console.log("Here into BL: edit profile"); 
let newUser=req.body;
User.updateOne({_id:newUser._id}, newUser).then((response)=>{
  console.log("Here response after update", response);
  if (response.nMododified==1) {
    res.json({isUpdated:true});
  } else {
  res.json({isUpdated:false});
  }  
})

res.json({isUpdated:true});
})
//make app importable
module.exports = app;