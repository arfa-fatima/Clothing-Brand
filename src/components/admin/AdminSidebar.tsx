import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="text-xl font-bold tracking-tight text-gray-900 mb-8">Admin Panel</div>
        <nav className="flex flex-col space-y-2 text-sm font-medium">
          <Link href="/admin" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black transition"> Dashboard</Link>
          <Link href="/admin/products"className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black transition">  Products</Link>
          <Link href="/admin/orders" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black transition">  Orders</Link>
        </nav>
      </div>

      <div>


        <Link href="/" className="text-xs text-gray-500 hover:text-gray-800 transition">  ← Back to Store</Link>
      </div>
    </div>
  );
}