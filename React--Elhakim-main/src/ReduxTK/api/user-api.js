import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_Base_Url,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["InfoUser"],
  endpoints: (builder) => ({
    getInfoAboutUser: builder.query({
      query: (id) => ({
        url: `api/v1/users/${id}`,
      }),
      providesTags: ["InfoUser"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/v1/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["InfoUser"],
    }),
  }),
});
export const { useGetInfoAboutUserQuery, useUpdateUserMutation } = userApiSlice;
export default userApiSlice;
