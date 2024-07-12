import { dbConnect } from "@/databse/database";
import schoolModel from "@/models/schoolMode";
 
import { NextResponse } from "next/server";

dbConnect()

export async function GET(){
    let resp=await schoolModel.find().populate('all_classes')
    console.log(resp)

    let data=resp.map((e)=>({
        _id:e._id,
        name:e.name,
        slug:e.slug,
        class_count:e.all_classes.length
    }))
    
    return NextResponse.json({success:true,data})
}