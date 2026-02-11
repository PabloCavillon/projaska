import api from "@/lib/axios";

export const getProducts = async () => {
    //try {
        const response = await api.get('/products');
        return response.data;
    /*}
    catch (error) {
        throw new Error("Failed to fetch products");
    }*/
}