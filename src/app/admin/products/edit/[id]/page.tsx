import { updateProduct } from "@/lib/actions/product_actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 text-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Edit Product</h1>
          <p className="text-sm text-gray-500">Update product information</p>
        </div>
        <Link
          href="/admin/products"
          className="text-sm text-gray-600 hover:text-black font-medium" >
          ← Back to Products
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <form action={updateProduct} className="space-y-4">
          <input type="hidden" name="id" value={product.id} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (PKR)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-sm">
                  Rs.
                </span>
                <input
                  type="number"
                  name="price"
                  min="1"
                  step="1"
                  defaultValue={product.price}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>













            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                defaultValue={product.category}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black">
                <option value="Dresses">Dresses</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Co-ords">Co-ords</option>
                <option value="Tops">Tops</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button  type="submit"
              className="flex-1 bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition" > Save Changes
            </button>
            <Link href="/admin/products"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-center hover:bg-gray-50 transition">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}