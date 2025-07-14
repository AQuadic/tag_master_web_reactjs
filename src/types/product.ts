export type ProductImageTypes = {
  id: number;
  uuid: string;
  size: number;
  url: string;
  responsive_urls: string[];
  total_pages: number;
};

export type ProductOptionTypes = {
  color: string;
  value: string;
  in_stock: boolean;
};

export type ProductTypeOption = {
  value: string;
  in_stock: boolean;
};

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
  image: {
    url: string;
    file_name: string;
    uuid: string;
    mime_type: string;
    responsive_urls: string[];
  };
  options: ProductOptionTypes[];
  types: ProductTypeOption[];
  category_id: number;
  brand_id: number | null;
  is_active: number;
  is_favorite?: boolean;
  created_at: string;
  updated_at: string;
  order_column: number;
  images: ProductImageTypes[];
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
  total_pages: number | undefined;
  current_page: number;
  to: number;
  last_page?: number;
  total?: number;
  data: ProductTypes[];
}
