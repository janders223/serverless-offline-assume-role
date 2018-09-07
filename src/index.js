import assume from './assume'

export default class {
  constructor (serverless) {
    this.serverless = serverless

    this.hooks = {
      'before:offline:start': assume.bind(null, serverless),
      'before:offline:start:init': assume.bind(null, serverless)
    }
  }
}
