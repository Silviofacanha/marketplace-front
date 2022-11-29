import api from "../api";

export default {
   async getProtucts() {
        const result = await api.get("/products")
        if  (result.data.products) {
            return result.data.products.map((e)=> {
                return {
                image: "image",
                name: e.title,
                category: e.category,
                price: e.id,
                createdAt: new Date().toLocaleString(),
                id: e.id
            };
            });
        } else  {
            return [];
        }       
    },
};