import { Promise } from 'bluebird'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { parse } from 'ini'
import AWS from 'aws-sdk'

const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CONFIG = resolve(HOME, '.aws/config')
const { AWS_PROFILE } = process.env

export default serverless => new Promise((resolve, reject) => {
  const role = serverless.service.custom['serverless-offline'].role
  serverless.cli.log(`Assuming role: ${role}`)

  const awsConfig = parse(readFileSync(CONFIG, 'utf-8'))
  const arn = awsConfig[`profile ${role}`].role_arn
  const profile = AWS_PROFILE || 'default'

  AWS.config.credentials = new AWS.TemporaryCredentials({
    RoleArn: arn
  }, new AWS.SharedIniFileCredentials({ profile }))

  serverless.cli.log(`Successfully assumed role: ${role}`)
  return resolve()
})
