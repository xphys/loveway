export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    brand?: string;
    category: string;
    front_show?: boolean;
    is_suggest?: boolean;
}