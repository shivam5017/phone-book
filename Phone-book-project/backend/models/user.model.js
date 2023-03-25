const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
require("dotenv").config()


const userSchema=mongoose.Schema({
   username:{
    type:String,
    required:true
   },
   email:{
    type:String,
    immutable:true,
    required:true,
    lowercase:true
   },
   password:{
    type:String,
    default:''
   },
   token:{
    type:String
   }
     

})


userSchema.methods.getAuthorizationToken=async function (){
    const token=jwt.sign({user:this._id,email:this.email},process.env.KEY);
    this.token=token;
    await this.save()
    return token;
}

const UserModel=mongoose.model('user',userSchema)

module.exports={UserModel}