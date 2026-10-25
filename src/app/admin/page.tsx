import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";




export default async function AdminDashboard() {


  const [productCount, orderCount, revenueAgg] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.order.aggregate({_sum: {totalAmount: true,},
    }),
  ]);

  const totalRevenue = revenueAgg._sum.totalAmount || 0;

  return (
    <div className="space-y-6 text-gray-900">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        



        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total Products</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{productCount}</p>
        </div>

     
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{orderCount}</p>
        </div>

      
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            Rs. {totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}