import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/api/users/me'
        })
    })
});

export const { useGetUserQuery } = usersApi;