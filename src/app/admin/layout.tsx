import AdminSidebar from "@/components/admin/AdminSidebar";
import Link from "next/link";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      <div className="w-64 flex-shrink-0 h-full border-r border-gray-200 bg-white">
      <AdminSidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between flex-shrink-0">
          <span className="text-sm font-medium text-gray-500">Faah Store
          </span>
          <Link href="/admin/products" className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm"><span>+</span> Create Product
          </Link>
        </header>
      <main className="flex-1 h-full overflow-y-auto p-8">{children}</main>
    </div>
</div>
    
  );
}