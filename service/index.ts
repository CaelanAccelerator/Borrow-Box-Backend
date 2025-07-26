// src/services/items.ts
import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma";
import { CreateItemInput, UpdateItemInput, ListItemsParams } from "./types";

export async function createItem(data: CreateItemInput) {
  return prisma.items.create({
    data: {
      customer_id: data.customerId,
      name: data.name,
      description: data.description,
      image_url: data.imageUrl,
      price: data.price,
      start_date: data.startDate,
      end_time: data.endTime,
      category: data.category,
      status: data.status ?? true,
    },
  });
}


export async function getItem(id: number) {
  return prisma.items.findUnique({ where: { id } });
}

export async function listItems(
  {
  limit = 20,
  offset = 0,
  orderFactor = "start_date",
  order = "desc",
  priceRange = [0,1000],
  category,
}: ListItemsParams
) {
  const where: Prisma.itemsWhereInput = {};
  if (priceRange) {
    const [min, max] = priceRange;
    where.price = {
      gte: min,
      lte: max
    }
  }

  if (category) {
    where.category = category;
  }

  const orderBy: Prisma.itemsOrderByWithRelationInput = {
    [orderFactor]: order,
  };
  const [data, total] = await Promise.all([
    prisma.items.findMany({
      where,
      orderBy, 
      skip: offset,
      take: limit,
    }),
    prisma.items.count(),
  ]);
  return { data, total, limit, offset };
}

export async function updateItem(id: number, patch: UpdateItemInput) {
  return prisma.items.update({
    where: { id },
    data: {
      customer_id: patch.customerId,
      name: patch.name,
      description: patch.description,
      image_url: patch.imageUrl,
      price: patch.price !== undefined ? patch.price : undefined,
      start_date: patch.startDate,
      end_time: patch.endTime,
      category: patch.category,
      status: patch.status,
    },
  });
}

export async function deleteItem(id: number) {
  await prisma.items.delete({ where: { id } });
  return true;
}