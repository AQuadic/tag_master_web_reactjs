export interface PostType {
  is_featured: boolean;
  id: number;
  title: string;
  content: string;
  published_at: string;
  is_favorite: boolean;
  image: {
    url: string;
    file_name: string;
    uuid: string;
    mime_type: string;
    responsive_urls: string[];
  };
  category: {
    id: number;
    name: {
      ar: string;
      en: string;
    };
    image: {
      url: string;
    };
  };

  description: {
    ar: string;
    en: string;
  };
  price: string;
}
