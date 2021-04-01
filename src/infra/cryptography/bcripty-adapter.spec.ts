import bcrypt from 'bcrypt'
import { BCryptAdapter } from './bcripty-adapter'

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BCryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
