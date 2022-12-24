import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    reducerPath: "adminApi",
    tagTypes: ["Report", "Requests"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `reports/report/${id}`,
            providesTags: ["Report"]
        }),
        getRequests: build.query({
            query: () => "requests",
            providesTags: ["Requests"],
        }),
        getReports: build.query({
            query: (id) => `reports/dashboard`,
            providesTags: ["Reports"]
        }),
    })
})

export const {
    useGetRequestsQuery,
    useGetReportsQuery
} = api
