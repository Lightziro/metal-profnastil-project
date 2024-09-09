
export const getCategories = async () => {
    const requestData = await fetch(
        `${process.env.API_URL_DOCKER}/api/dictionary/categories`
    );
    const response = await requestData.json();
    return response.data;
};

export const getProductByCategorySlug = async (slug: string) => {
    const response = await fetch(
        `${process.env.API_URL_DOCKER}/api/dictionary/category/${slug}/products`
    );
    return await response.json();
}
