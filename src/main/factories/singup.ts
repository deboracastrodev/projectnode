import { SingUpController } from '../../presentation/controllers/singup/singup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BCryptAdapter } from '../../infra/cryptography/bcripty-adapter'
import { AccountMongoRespository } from '../../infra/db/mongodb/account-repository/account'

export const makeSingUpController = (): SingUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BCryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRespository()
  const dbAddAccoount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SingUpController(emailValidatorAdapter, dbAddAccoount)
}
