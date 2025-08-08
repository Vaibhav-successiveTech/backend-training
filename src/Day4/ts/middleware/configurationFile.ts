import zod from 'zod';
const schemaList : {[key:string]: zod.ZodObject<any>} = {
    'user': zod.object({
        firstname : zod.string().min(3).max(20),
        lastname : zod.string().min(3).max(20),
        email : zod.string().email(),
        age: zod.number().min(18)
    }),

    'product': zod.object({
        id : zod.number(),
        productName : zod.string(),
        description : zod.string().optional()
    })
} 

export {schemaList};
