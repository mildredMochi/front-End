import { createContext } from 'react';

export interface Translation {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  soldOut?: boolean; // NUEVO
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

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const translations: { [key: string]: Translation } = {
  es: {
    home: 'Inicio',
    motorcycleAccessories: 'Accesorios para motocicletas',
    bicycleAccessories: 'Accesorios para bicicletas',
    cyclingGear: 'Indumentaria de ciclismo',
    equipment: 'Equipo de ciclismo',
    parts: 'Piezas de bicicletas',
    offers: 'Ofertas',
    outlet: 'Outlet',
    contact: 'Contacto',
    search: 'Buscar...',
    worldLeader: 'EL LÍDER MUNDIAL',
    inEquipment: 'EN EQUIPAMIENTO',
    andAccessories: 'Y ACCESORIOS.',
    nowInUruguay: 'AHORA EN URUGUAY.',
    featured: 'Destacados',
    buy: 'Comprar',
    consult: 'Consultar',
    seeMore: 'Ver más',
    glasses: 'LENTES',
    gloves: 'GUANTES',
    helmets: 'CASCOS',
    accessories: 'Rockbros - accesorios e indumentaria para tu bicicleta',
    newsletter: 'Boletín por email',
    yourEmail: 'Tu email',
    subscribe: 'Registrarme',
    phone: 'Teléfono',
    address: 'Dirección',
    schedules: 'Horarios',
    ourStore: 'Nuestra tienda',
    aboutUs: 'Nosotros',
    shipping: 'Envíos',
    categories: 'Categorías',
    brands: 'Marcas',
    news: 'Novedades',
    myAccount: 'Mi cuenta',
    orders: 'Pedidos',
    tickets: 'Tickets',
    help: 'Ayuda',
    conditions: 'Condiciones',
    complaints: 'Denuncias',
    solutions: 'Soluciones',
    name: 'Nombre',
    lastName: 'Apellido',
    email: 'E-mail',
    telephone: 'Teléfono',
    company: 'Empresa',
    subject: 'Asunto',
    message: 'Mensaje',
    send: 'Enviar',
    receiveNewsletter: 'Recibir newsletter',
    contactForm: 'Formulario de contacto',
    contactUs: 'Contacta con nuestro equipo. En muy breve te daremos respuesta. Gracias por tu tiempo.',
    dataConfidential: 'Los datos suministrados son confidenciales y serán tratados como privados. Gracias por el interés.',
    submittedData: 'Datos Enviados',
    backToContact: 'Volver al Contacto',
    priceLabel: 'Precio menor',
    sortFeatured: 'Destacados',
    sortPriceLow: 'Precio menor',
    sortPriceHigh: 'Precio mayor',
    products: 'productos'
  },
  en: {
    home: 'Home',
    motorcycleAccessories: 'Motorcycle Accessories',
    bicycleAccessories: 'Bicycle Accessories',
    cyclingGear: 'Cycling Apparel',
    equipment: 'Cycling Equipment',
    parts: 'Bicycle Parts',
    offers: 'Offers',
    outlet: 'Outlet',
    contact: 'Contact',
    search: 'Search...',
    worldLeader: 'THE WORLD LEADER',
    inEquipment: 'IN EQUIPMENT',
    andAccessories: 'AND ACCESSORIES.',
    nowInUruguay: 'NOW IN URUGUAY.',
    featured: 'Featured',
    buy: 'Buy',
    consult: 'Consult',
    seeMore: 'See more',
    glasses: 'GLASSES',
    gloves: 'GLOVES',
    helmets: 'HELMETS',
    accessories: 'Rockbros - accessories and apparel for your bicycle',
    newsletter: 'Email newsletter',
    yourEmail: 'Your email',
    subscribe: 'Subscribe',
    phone: 'Phone',
    address: 'Address',
    schedules: 'Schedules',
    ourStore: 'Our Store',
    aboutUs: 'About Us',
    shipping: 'Shipping',
    categories: 'Categories',
    brands: 'Brands',
    news: 'News',
    myAccount: 'My Account',
    orders: 'Orders',
    tickets: 'Tickets',
    help: 'Help',
    conditions: 'Conditions',
    complaints: 'Complaints',
    solutions: 'Solutions',
    name: 'Name',
    lastName: 'Last Name',
    email: 'Email',
    telephone: 'Telephone',
    company: 'Company',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    receiveNewsletter: 'Receive newsletter',
    contactForm: 'Contact Form',
    contactUs: 'Contact our team. We will respond very soon. Thank you for your time.',
    dataConfidential: 'The data provided is confidential and will be treated as private. Thank you for your interest.',
    submittedData: 'Submitted Data',
    backToContact: 'Back to Contact',
    priceLabel: 'Lowest price',
    sortFeatured: 'Featured',
    sortPriceLow: 'Lowest price',
    sortPriceHigh: 'Highest price',
    products: 'products'
  }
};

// DATOS DE PRODUCTOS
export const productsData: Product[] = [
  { id: 1, name: 'Bolso Monopatín Rockbros Impermeable Grande 3 Litros', price: 797, image: '/imagenes/menu1.jpg', featured: true },
  { id: 2, name: 'Máscara Térmica de Ciclismo Bicolor con Filtro para Invierno', price: 581, image: '/imagenes/menu2.jpg', soldOut: true, featured: true },
  { id: 3, name: 'GUANTES CON FORRO TÉRMICO POLAR', price: 944, image: '/imagenes/menu3.jpg', featured: true },
  { id: 4, name: 'Soporte Ajustable Rockbros De Celular Bicicletas Motos', price: 824, image: '/imagenes/menu4.jpg', featured: true },
  { id: 5, name: 'LENTES DE CICLISMO FOTOCROMATICOS FILTRO UV400', price: 1300, image: '/imagenes/menu5.jpg' },
  { id: 6, name: 'Porta Caramañola Ultraligero Para Bicicletas', price: 160, image: '/imagenes/menu6.jpg' },
  { id: 7, name: 'Puño Mango Grip Caucho Aluminio Bicicletas', price: 177, image: '/imagenes/menu7.jpg' },

];