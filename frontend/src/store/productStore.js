import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      isLoading: false,
      error: null,

      fetchProducts: async () => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch("https://ecommercemanagementapi-production.up.railway.app/api/v1/products");
          if (!response.ok) throw new Error("Error fetching products");

          const data = await response.json();
          set({ products: data, error: null });
        } catch (error) {
          set({ error: error.message });
        } finally {
          set({ isLoading: false });
        }
      },

    }),
    {
      name: "product-storage",
    }
  )
);

export default useProductStore;

