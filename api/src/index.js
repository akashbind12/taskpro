
const express=require("express")
const cors=require("cors")
const app=express()

require('dotenv').config()
app.use(express.json())

const ProductController=require("./controllers/Product.controller")

app.use(cors());



app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})

app.use("/products",ProductController)
const connect=require("./configs/db")



const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});