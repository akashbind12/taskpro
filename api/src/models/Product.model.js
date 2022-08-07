
const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema({
    img:{type:String,required:true},
    Name: { type: String, required: true },
    title:{ type: String, required: false },
    price:{type:Number,required:true},
       
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("Product",ProductSchema)
