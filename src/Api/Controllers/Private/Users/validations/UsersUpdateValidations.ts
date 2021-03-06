import { IsObjectId } from '@/Api/ValidationDecorators'
import { IsNotEmpty, ValidateIf } from 'class-validator'

import UsersValidations from './UsersValidations'

export default class UsersUpdateValidations extends UsersValidations {
  @IsNotEmpty()
  @IsObjectId()
  public id: string

  @ValidateIf(v => !!v.password)
  public password: string
}
