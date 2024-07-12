import { dbConnect } from "@/databse/database";
import classModel from "@/models/classModel";

 
import { NextResponse } from "next/server";

dbConnect()

export async function GET(req){
 
   
 

 
    let resp=await classModel.find()
    console.log(resp)
    return NextResponse.json({success:true,resp})
}