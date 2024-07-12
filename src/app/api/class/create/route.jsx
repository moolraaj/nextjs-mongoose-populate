 

 
import { dbConnect } from "@/databse/database";
import classModel from "@/models/classModel";
import { NextResponse } from "next/server";

dbConnect()

export async function POST(req){
    
    let payload=await req.json()
    let resp=new classModel(payload)
    await resp.save()
    console.log(resp)
    return NextResponse.json({success:true,resp})
}