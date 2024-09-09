export interface Category {
    id: number,
    name: string,
    slug: string,
    products_count: number,
    url_slug: string,
}
export interface Product {
    id: number,
    name: string,
    category_id: number,
    slug: string,
}
