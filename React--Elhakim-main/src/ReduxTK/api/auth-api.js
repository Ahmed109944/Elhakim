import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    signUpNewUser: builder.mutation({
      query: (data) => ({
        url: "api/v1/users/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "api/v1/users/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useSignUpNewUserMutation, useLoginMutation } = authApiSlice;
export default authApiSlice;
