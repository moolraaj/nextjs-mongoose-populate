 

 

import { dbConnect } from "@/databse/database";
 
import schoolModel from "@/models/schoolMode";
 
import { NextResponse } from "next/server";

dbConnect()




// export async function PUT(req,{params}){
//     let {id}=params
//     let payload=await req.json()
//     let {classid}=payload
//     let resp=await  schoolModel.findByIdAndUpdate( { _id:id },
//         { $push: { all_classes: classid } })
//         console.log(resp)
  
//     return NextResponse.json({success:true,message:'product saved'})
// }



export async function POST(req,{params}){
    let {id}=params
    let payload=await req.json()
    let {classid}=payload
    let data=await schoolModel.findOne({_id:id})
    if(!data){
        return NextResponse.json({success:true,message:'no id found'})
    }
    data.all_classes.push(classid)
    await data.save() 
    return NextResponse.json({success:true,message:'product saved',data})
}