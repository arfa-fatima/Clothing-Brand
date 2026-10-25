import { createProduct } from "@/lib/actions/product_actions";
import { prisma } from "@/lib/prisma";
import {deleteProduct} from "@/lib/actions/product_actions";

export default async function AdminProductsPage() {

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8 text-gray-900">
      <div>
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <p className="text-sm text-gray-500">Add new items and manage your inventory.</p>
      </div>

     
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
<form action={createProduct} className="space-y-4">
    <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Product Name
    </label>
    <input
              type="text"
              name="name"
              required
              placeholder="e.g. Classic Oversized Hoodie"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
  <label className="block text-sm font-medium text-gray-700 mb-1"> Price (PKR) </label>
  <div className="relative">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-sm">Rs.</span>
    <input  type="number"  name="price"  min="1"  step="1"  required  placeholder="2500"
      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
  </div>
</div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select Category</option>
                <option value="Dresses">Dresses</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Co-ords">Co-ords</option>
                <option value="Top">Tops</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL
            </label>
            <input type="file" name="image" required placeholder="/images/hoodie.jpg or https://..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
          </div>

          <button type="submit" className="w-full bg-black text-white font-medium py-2.5 rounded-md hover:bg-gray-800 transition">Create Product</button>
        </form>
      </div>

    


      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Existing Products ({products.length})</h2>
        </div>

        {products.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No products found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Price</th>
                  
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                 
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md border"/>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.category}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      Rs. {item.price.toFixed(2)}
                    </td>

<td className="py-3 px-4 text-right">
  <div className="flex items-center justify-end space-x-2">
    
    <a href={`/admin/products/edit/${item.id}`} className="px-3 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition"> Edit</a>

    
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={item.id} />
      <button type="submit" className="px-3 py-1 text-xs font-medium bg-red-50 hover:bg-red-100 text-red-600 rounded transition"> Delete
      </button>
    </form>
  </div>
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