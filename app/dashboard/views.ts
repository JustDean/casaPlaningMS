import { Request, Response } from 'express';

import {Blog} from "./models"


async function create(req: Request, res: Response) {
    const newBlogName: string = req.body.name
    const newBlog = new Blog({name: newBlogName})
    await newBlog.save()

    res.json({"message": `You create blog with the name ${newBlogName}`})
}


export {create}