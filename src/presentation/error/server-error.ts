export class ServerError extends Error {
  constructor () {
    super('Algo inesperado aconteceu, tente novamente!')
    this.name = 'ServerError'
  }
}
