type Product = {
  id: number;
  name: string;
  image: string | null;
  price: number;
};

type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: PizzaSize;
  quantity: number;
};

type PizzaSize = 'S' | 'M' | 'L' | 'XL';

type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered';

type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;

  order_items?: OrderItem[];
};

type OrderItem = {
  id: number;
  product_id: number;
  products: Product;
  order_id: number;
  size: PizzaSize;
  quantity: number;
};

type Profile = {
  id: string;
  group: string;
};
