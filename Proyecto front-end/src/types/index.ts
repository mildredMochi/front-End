// src/types/index.ts
export interface Translation {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  soldOut?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  t: Translation;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
}