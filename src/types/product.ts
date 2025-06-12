export interface ProductTypes {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  price: string;
  discount: string;
  options: Array<{
    color: string;
    value: string;
    in_stock: boolean;
  }>;
  category_id: number;
  brand_id: number | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  order_column: number;
  images: Array<{
    id: number;
    uuid: string;
    size: number;
    url: string;
    responsive_urls: string[];
  }>;
  category: {
    id: number;
    name: {
      ar: string;
      en: string;
    };
    parent_id: number | null;
    is_active: number;
    created_at: string;
    updated_at: string;
    order_column: number;
    type: string | null;
    image: {
      id: number;
      uuid: string;
      size: number;
      url: string;
      responsive_urls: string[];
    };
  };
}

export interface ProductsResponseTypes {
  current_page: number;
  to: number;
  data: ProductTypes[];
}
