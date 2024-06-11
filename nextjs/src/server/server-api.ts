export const getCategories = async () => {
    const response = await fetch(
        `${process.env.API_URL_DOCKER}/api/dictionary/categories`
    );
    return await response.json();
};
