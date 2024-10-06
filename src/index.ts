import express from "express";
import z from 'zod';

export const app = express();
app.use(express.json());

const sunInput = z.object({
    a: z.number(),
    b:z.number()
})

//@ts-ignore
app.post("/sum", (req,res)=>{

    const parsedResponse = sunInput.safeParse(req.body);
    if (!parsedResponse.success){
        return res.status(404).json({
            message : "Inavlid Input"
        })
    }

    const ans= parsedResponse.data.a + parsedResponse.data?.b;



    res.json({
        ans
    })

})
