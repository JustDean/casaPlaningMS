import { Schema } from "express-validator"

const IndexSchema: Schema = {
    name:  {
        in: ['body'],
        errorMessage: 'Wrong name',
        isString: true,
      },
}

export {IndexSchema}
