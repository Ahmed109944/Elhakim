import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const appointementApiSlice = createApi({
  reducerPath: "appointementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_Base_Url,
  }),
  tagTypes: ["Appointements"],
  endpoints: (builder) => ({
    makeNewAppointement: builder.mutation({
      query: (data) => ({
        url: "api/v1/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointements"],
    }),
    getAllAppointementsPatient: builder.query({
      query: (id) => ({
        url: `api/v1/bookings/?user=${id}`,
      }),
      providesTags: ["Appointements"],
    }),
    getAllAppointementsDoctor: builder.query({
      query: (id) => ({
        url: `api/v1/bookings/?doctor=${id}`,
      }),
    }),
    getAllDoctors: builder.query({
      query: () => ({
        url: "api/v1/users/?role=doctor&&approved=true",
      }),
    }),
    updateAppointementStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/v1/bookings/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Appointements"],
    }),
  }),
});
export const {
  useMakeNewAppointementMutation,
  useGetAllDoctorsQuery,
  useGetAllAppointementsPatientQuery,
  useGetAllAppointementsDoctorQuery,
  useUpdateAppointementStatusMutation,
} = appointementApiSlice;
export default appointementApiSlice;
