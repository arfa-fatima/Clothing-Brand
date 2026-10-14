import {NextResponse} from "next/server";
export async function POST(request:Request){
    try{
        const body= await request.json();
        console.log(" Cart item has been recieved " , body);
        return NextResponse.json({success:true} , {status:200});

    }
    catch(err){
        return NextResponse.json({err: "Faileddd"}, {status:500});
    }
}