import { NextResponse } from "next/server"
import {prisma} from "@/lib/prisma"

export async function POST (request:Request){
    try{
        const orderData = await request.json();
        const {customer,items, totalAmount} = orderData;

        if (!customer?.fullName || !customer?.phone || !customer?.address){
            return NextResponse.json(
                {error:"Can't you see? Missing Required Customer Deatils "},
                {status: 400}
            );
        }

        if (!items || items.length===0){
            return NextResponse.json(
            {error : "cart is Empty. "},
            {status :404}
            );
        }
    // console.log("=== NEW ORDER RECEIVED ===");
    // console.log("Customer:", customer);
    // console.log("Items:", items);
    // console.log("Total Amount:", totalAmount);

    const savedOrder = await prisma.order.create({
      data: {
        fullName: customer.fullName,
        phone: customer.phone,
        email: customer.email || null,
        address: customer.address,
        city: customer.city || "Lahore",
        paymentMethod: customer.paymentMethod || "COD",
        totalAmount: Number(totalAmount),
        status: "PENDING",
        items: {
          create: items.map((item: any) => ({
            productId: String(item.productId || item.id),
            name: item.name,
            price: Number(item.price),
            quantity: Number(item.quantity),
            size: item.size || "Standard",
          })),
        },
      },
      include: {
        items: true,
      },
    });

    console.log("=== ORDER SAVED TO DB ===", savedOrder.id);
    return NextResponse.json(
        {
            success:true,
            msg:"Ordered Placed",
        },
        {status:201 }
    );






    
}       catch (err){
        console.log("order process:",err);
        return NextResponse.json(
            {error: "failed "},
            {status:500}
        );
    }
    }
