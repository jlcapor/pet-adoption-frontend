import { db } from "@/server/db";

export default async function  getDepatments(){
    const departments = await db.department.findMany({
        select:{
            id: true,
            name:true,
        },
            orderBy: {
            name: 'asc', 
        },
    })
    return departments;
}