"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const priceRaw = formData.get("price") as string;
  const category = formData.get("category") as string;
  const file = formData.get("image") as File | null;

  if (!name || !priceRaw || !category) {
    throw new Error("Missing required product fields");
  }


  const price = parseFloat(priceRaw);
  let imageUrl = "/placeholder.png";

  if (file && file.size > 0 && typeof file !== "string") {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    imageUrl = `/uploads/${fileName}`;
  }

  await prisma.product.create({
    data: {
      name,
      price,
      category,
      image: imageUrl,
    },
  });

  revalidatePath("/admin/products");
  revalidatePath("/admin");
  revalidatePath("/shop");
  revalidatePath("/");
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("Product ID is required for deletion");
  }

  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin/products");
  revalidatePath("/admin");
  revalidatePath("/shop");
  revalidatePath("/");
}

export async function updateProduct(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const priceRaw = formData.get("price") as string;
  const category = formData.get("category") as string;
  const file = formData.get("image") as File | null;

  if (!id || !name || !priceRaw || !category) {
    throw new Error("Missing required fields for update");
  }

  const price = parseFloat(priceRaw);
  const dataToUpdate: any = {
    name,
    price,
    category,
  };

  if (file && file.size > 0 && typeof file !== "string") {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    dataToUpdate.image = `/uploads/${fileName}`;
  }

  await prisma.product.update({
    where: { id },
    data: dataToUpdate,
  });

  revalidatePath("/admin/products");
  revalidatePath("/admin");
  revalidatePath("/shop");
  revalidatePath("/");

  redirect("/admin/products");
}