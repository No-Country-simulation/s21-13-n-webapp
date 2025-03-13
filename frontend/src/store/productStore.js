import { create } from "zustand";
import { persist } from "zustand/middleware";
// import Cookies from "js-cookie";

const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      isLoading: false,
      error: null,

      fetchProducts: async () => {
        set({ isLoading: true, error: null });
        
        try {
          // Aquí realizarías la llamada a la API para obtener los productos
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
          if (!response.ok) throw new Error("Error fetching products");

          const data = await response.json();
          set({ products: data, error: null });
        } catch (error) {
          set({ error: error.message });
        } finally {
          set({ isLoading: false });
        }
      },

      findProduct: (searchTerm) => {
        const { products } = get();
        if (!products.length) return [];

        const lowerSearchTerm = searchTerm.toLowerCase();
        return products.filter((product) => {
          return product.name.toLowerCase().includes(lowerSearchTerm);
        });
      },

      compareProducts: (newProduct) => {
        const { products } = get();
        const existingProduct = products.find(
          (product) => product.name.toLowerCase() === newProduct.name.toLowerCase()
        );
        return existingProduct;
      },

    }),
    {
      name: "product-storage", // Esta es la clave en el localStorage para persistir el estado
    }
  )
);

export default useProductStore;
