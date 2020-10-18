export type DataType = "Posts" | "Users" | ""
export type DataSet = DataType[]

export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    avatar: string
}

export interface UsersData {
    allUsers: User[]
}

export interface Post {
    id: string
    title: string
    body: string
    createdAt: string
    published: boolean
    author: User
}

export interface PostsData {
    allPosts: Post[]
}