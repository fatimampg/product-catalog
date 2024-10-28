export interface User {
  id: string;
  email: string;
  createdAt: string;
  password: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  addedAt?: Date;
}
