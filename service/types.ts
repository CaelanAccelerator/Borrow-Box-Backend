import { Prisma } from "@prisma/client";


export type ListItemsParams = {
  limit?:number,
  offset?:number,
  orderFactor?:"start_date" | "price" | "name",
  order?: "desc" | "asc"
  priceRange?:[number,number],
  category?: string,
}

export type CreateItemInput = {
  customerId:number,
  name:string,
  price:number,
  category:string,
  imageUrl: string,
  description?:string,
  startDate:Date,
  endTime?:Date,
  status: boolean
}

export type UpdateItemInput = {
  customerId?: number,
  name?:string,
  price?:number,
  category?:string,
  imageUrl?: string,
  description?:string,
  startDate?:Date,
  endTime?:Date,
  status?: boolean
}