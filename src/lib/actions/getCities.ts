import { db } from "@/server/db";

export default async function  getCities(){
    const cities = await db.city.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            name: 'asc',
        }
    })
    return cities;
}