import { dbConnect } from "@/databse/database";
import schoolModel from "@/models/schoolMode";
import { NextResponse } from "next/server";

dbConnect();

export async function GET(req, { params }) {
    let { slug } = params;
    let param = new URLSearchParams(req.url);
    let page = Number(param.get('page')) || 1;  
    let perPage = Number(param.get('limit')) || 6; 
     

    let skipPage = perPage * (page - 1);

    console.log(`skipPage`)
    console.log(skipPage)

     
 
    try {
        const specificSchool = await schoolModel.findOne({ slug })
                                                 .populate({
                                                     path: 'all_classes',
                                                     options: { limit:perPage, skip:skipPage }
                                                 })
                                                 .exec();

        if (specificSchool) {
            const classes = specificSchool.all_classes.map(cls => ({
                _id: cls._id,
                name: cls.name,
                // Add more fields as needed
            }));

            const detailedResponse = {
                _id: specificSchool._id,
                name: specificSchool.name,
                slug: specificSchool.slug,
                all_classes: {
                    data: classes,
                    limit: perPage,
                    page: page,
                },
            };

            return NextResponse.json({ success: true, data: detailedResponse });
        } else {
            return NextResponse.json({ success: false, error: 'School not found' });
        }
    } catch (error) {
        console.error('Error fetching school and classes:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch school and classes' });
    }
}



