 

 

import { dbConnect } from "@/databse/database";

import schoolModel from "@/models/schoolMode";
 
import { NextResponse } from "next/server";

dbConnect()

export async function POST(req){
    let payload=await req.json()
    console.log(payload)
     
    console.log(payload)
    let resp=new schoolModel(payload)
    await resp.save()
    console.log(resp)
    return NextResponse.json({success:true,resp})
}