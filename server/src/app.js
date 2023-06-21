const express = require("express")
const app = express()
const cors=require("cors");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Veots:Veots345$@veots-cluster0.urbh6.mongodb.net/typecoupontestapi?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db=mongoose.connection;

db.on("error",(error)=> console.log(error));
db.once("open",()=>console.log("connected to database"));


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const couponRoutes = require("./couponRoutes")

const couponModel = require("./couponModel");


app.use("/coupons",couponRoutes)


app.use("/*",(req,res)=>{
    res.send("Page not found")
})

app.listen(3006,()=>{
    console.log(`Listening on port 3006`)
})