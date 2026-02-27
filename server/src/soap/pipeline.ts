import type {Request, Response} from "express";

export const pipeline = (req: Request, res: Response) => {
    const xml = req.body;
    console.log(xml);
    


    res.json({message:"fkhsfksjd"})

}