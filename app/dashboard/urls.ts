import { Router } from 'express'
import { create } from './views'
import { checkSchema } from 'express-validator'

import {IndexSchema} from './schemas'
import { validationMiddleware } from '../web/midllewares'


const router: Router = Router()

router.post("/blog/create", checkSchema(IndexSchema), validationMiddleware, create)


export default router