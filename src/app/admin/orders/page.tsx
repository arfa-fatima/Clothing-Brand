import { prisma } from "@/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6 text-gray-900">
      <div>
        <h1 className="text-2xl font-bold">Customer Orders</h1>
        <p className="text-sm text-gray-500">
          View and manage incoming customer purchases.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">All Orders ({orders.length})</h2>
        </div>

        {orders.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No orders placed yet. </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Shipping Info</th>
                  <th className="py-3 px-4">Items</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 align-top">
                    <td className="py-3 px-4 font-mono text-xs text-gray-500">
                      #{order.id.slice(-6).toUpperCase()}
                    </td>
                    <td className="py-3 px-4">
                      <p className="font-semibold text-gray-900">{order.fullName}</p>
                      <p className="text-xs text-gray-500">{order.phone}</p>
                      {order.email && (
                        <p className="text-xs text-gray-400">{order.email}</p>
                      )}
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-600 max-w-xs">
                      <p>{order.address}</p>
                      <p className="font-medium text-gray-800">{order.city}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        {order.items.map((item) => (
                          <div key={item.id} className="text-xs text-gray-700">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-gray-500 ml-1">
                              ({item.size}) * {item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">
                      Rs. {order.totalAmount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-xs font-medium text-gray-700">{order.paymentMethod}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                          order.status === "DELIVERED"? "bg-green-100 text-green-700" : order.status === "CANCELLED"? "bg-red-100 text-red-700"  : "bg-amber-100 text-amber-700"}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-500 whitespace-nowrap">
                      {new Date(order.createdAt).toLocaleDateString("en-PK", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}