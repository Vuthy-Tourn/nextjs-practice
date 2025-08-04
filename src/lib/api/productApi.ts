import { ProductType } from "@/types/ProductType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   category: Category;
//   creationAt: string;
//   updatedAt: string;
// }

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductsQueryParams {
  categoryId?: number | null;
  price_min?: number;
  price_max?: number;
  limit?: number;
  offset?: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),

  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], ProductsQueryParams>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();

        if (params.categoryId) {
          searchParams.append("categoryId", params.categoryId.toString());
        }
        if (params.price_min !== undefined) {
          searchParams.append("price_min", params.price_min.toString());
        }
        if (params.price_max !== undefined) {
          searchParams.append("price_max", params.price_max.toString());
        }
        if (params.limit) {
          searchParams.append("limit", params.limit.toString());
        }
        if (params.offset) {
          searchParams.append("offset", params.offset.toString());
        }

        return `products?${searchParams.toString()}`;
      },
      providesTags: ["Product"],
    }),
    getProduct: builder.query<ProductType, number>({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    getAllProducts: builder.query<{ products: ProductType[] }, void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
      providesTags: ["Category"],
    }),
    getCategory: builder.query<Category, number>({
      query: (id) => `categories/${id}`,
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),
    searchProducts: builder.query<ProductType[], string>({
      query: (title) => `products/?title=${encodeURIComponent(title)}`,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useSearchProductsQuery,
  useGetAllProductsQuery,
} = productsApi;
