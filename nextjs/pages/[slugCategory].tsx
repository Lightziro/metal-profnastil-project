import {GetStaticPaths, GetStaticProps} from "next";
import {Category, Product} from "../src/types/item";
import {getCategories, getProductByCategorySlug} from "../src/server/server-api";
import ProductsCategoryPage from "../src/pages/ProductsCategory/ProductsCategoryPage";
import React from "react";
interface ProductCategory {
    products: Product[];
}
const ProductsCategory: React.FC<ProductCategory> = ({ products }) => {
    return <ProductsCategoryPage products={products}/>;
}
export default ProductsCategory;

export const getStaticPaths: GetStaticPaths = async () => {
    const categories: Category[] = await getCategories();
    const paths = categories.map((category) => ({
        params: { slugCategory: category.url_slug },
    }));

    return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
    const {slugCategory}: any = params;
    const products: Product[] = await getProductByCategorySlug(slugCategory);
    if (!products.length) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            products,
        },
        revalidate: 20,
    };
};
