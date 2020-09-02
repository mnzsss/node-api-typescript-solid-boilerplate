import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import UsersController from '../controllers/UsersContoller'

const usersRouter = Router()

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
  UsersController.create
)

export default usersRouter
