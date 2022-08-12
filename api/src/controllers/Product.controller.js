
const router=require("express").Router();


const Product = require("../models/Product.model");



// CREATE PRODUCT

router.post("/", async(req,res)=>{
    const newProduct=new Product(req.body);
    try {
        const savedProduct=await newProduct.save();
        return res.status(200).json(savedProduct);
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

// // UPDATE PRODUCT
router.put("/:id", async(req,res)=>{

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
       return res.status(200).json(updatedProduct);
    } catch (err) {
       return res.status(500).json(err);
    }
   
});

// DELETE PRODUCT
router.delete("/:id", async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);

       return res.status(200).json("Product has been deleted...")
    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET PRODUCT
router.get("/:id", async(req,res)=>{
    try {
        const product= await Product.findById(req.params.id);

        return res.status(200).json(product)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET ALL PRODUCT
router.get("/",async(req,res)=>{
    const qNew=req.query;
    const order = req.query.order;
    console.log("qNew :", qNew)
    console.log("order :", order)
   
    try {

        let products;
        if (order=="asc") {
            products=await Product.find().sort({price : -1})
        }else if (order=="desc") {
            products=await Product.find().sort({price : 1})
        }
        else if(qNew){
            products=await Product.find(qNew).sort({createdAt: -1})
        }
        else{
            products=await Product.find();
        }
      
        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json(error)   
    }
});



module.exports=router;