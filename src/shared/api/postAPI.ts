import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IPost {
    id: string,
    title: string,
    body: string
}

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (build) => ({
        fetchPosts: build.query<IPost[], number>({
            query: () => ({
                url: '',
            })
        }),
        fetchPostById: build.query<IPost, string>({
            query: (id) => ({
                url: `${id}`
            })
        })
    })
})

export const { useFetchPostsQuery, useFetchPostByIdQuery } = postAPI
