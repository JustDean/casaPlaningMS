import {Request, Response, RequestHandler, NextFunction} from "express"
import { validationResult } from "express-validator"

function validationMiddleware(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

export {validationMiddleware}