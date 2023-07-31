

const mongoose=require('mongoose')

const mongoURI="mongodb+srv://on-doors:zx123cvbzx@cluster0.iv7yl9o.mongodb.net/"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongodb successfully")
    })
}


module.exports=connectToMongo