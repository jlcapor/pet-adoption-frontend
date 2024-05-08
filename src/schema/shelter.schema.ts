import { z } from "zod";

export const shelterSchema = z.object({
    id: z.string(),
    name: z.string() || null,
    email: z.string() || null,
    phoneNumber: z.string() || null,
    address: z.string() || null,
    description: z.string() || null,
    image_url: z.string() || null,
    active: z.boolean(),
    userId: z.string(),
    departmentId: z.string(),
    cityId: z.string(),

})



