export type ProductStatus = 'in_stock' | 'out_of_stock';

export interface Product {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
}