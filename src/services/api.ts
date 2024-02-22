// Libraries
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PurchasedProduct = {
  id: number;
  price: number;
};

type AddressData = {
  description: string;
  city: string;
  zipCode: string;
  number: number;
  complement?: string;
};

type DeliveryData = {
  receiver: string;
  address: AddressData;
};

type ExpirationData = {
  month: number;
  year: number;
};

type CardData = {
  name: string;
  number: string;
  code: number;
  expires: ExpirationData;
};

type PurchasePayload = {
  products: PurchasedProduct[];
  delivery: DeliveryData;
  payment: {
    card: CardData;
  };
};

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant, void>({
      query: () => 'restaurantes',
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation,
} = api;
export default api;
