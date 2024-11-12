import { Post } from "@/model/Post";
import pool from "./db";
import { RowDataPacket } from "mysql2";



export const getPosts = async (): Promise<Post[] | null> => {
    try {
        const conn = await pool.getConnection()

        try {
            const [posts]: [RowDataPacket[], unknown] = await conn.query("SELECT * FROM posts")
            return posts as Post[]
        } catch (error) {
            console.log(error)
            return null
        } finally {
            conn.release()
        }

    } catch (error) {
        console.log(error)
        return null
    }
}

export const getPostData = async (slug: string): Promise<Post | null> => {
    try {
        const conn = await pool.getConnection()

        try {
            const [posts]: [RowDataPacket[], unknown] = await conn.query("SELECT * FROM `posts` WHERE `slug` = ?", [slug])
            return posts.length > 0 ? posts[0] as Post : null
        } catch (error) {
            console.log(error)
            return null
        } finally {
            conn.release()
        }

    } catch (error) {
        console.log(error)
        return null
    }
}