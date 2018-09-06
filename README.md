# serverless-offline-assume-role

[![CircleCI (all branches)](https://img.shields.io/circleci/project/github/janders223/serverless-offline-assume-role.svg?style=for-the-badge)](https://circleci.com/gh/janders223/serverless-offline-assume-role/tree/master)
[![npm](https://img.shields.io/npm/v/serverless-offline-assume-role.svg?style=for-the-badge)](https://www.npmjs.com/package/serverless-offline-assume-role)
[![GitHub](https://img.shields.io/github/license/janders223/serverless-offline-assume-role.svg?style=for-the-badge)](https://github.com/janders223/serverless-offline-assume-role/blob/master/LICENSE)

This [Serverless](https://github.com/serverless/serverless) plugin allows you to develop offline by specifying which role from `~/.aws/config` that you would like to run under when your organization uses [AWS Multiple Account Billing Strategy](https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/). This plugin is made to work with the [serverless-offline plugin](https://github.com/dherault/serverless-offline).

##### _NOTE:_
This plugin is not to be confused with setting the `AWS_PROFILE` environment variable. That environment variable reads from `~/.aws/credentials` and is used when you have multiple access and secret access keys for multiple accounts.

## Documentation

- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Installation

First install the plugins.

```bash
npm install serverless-offline serverless-offline-assume-role --save-dev
```

Then inside of your project's `serverless.yml` file add the following to the plugins section. Note it is important that `serverless-offline-ssm` is loaded before `serverless-offline`. This is important to ensure that we are setting the variables properly for `serverless-offline` before it needs them.

```yaml
plugins:
    - serverless-offline-assume-role
    - serverless-offline
```

Then, given an `~/.aws/config` file that looks similar to the following:

```ini
[default]
region=us-west-2
output=json

[profile dev]
role_arn = arn:aws:iam::123456789012:role/dev
source_profile = default

[profile qa]
role_arn = arn:aws:iam::123456789012:role/qa
source_profile = default

[profile prod]
role_arn = arn:aws:iam::123456789012:role/prod
source_profile = default
```

Lastly, add your preferred under the `serverless-offline` object under `custom` in `serverless.yml`

```yaml
custom:
  serverless-offline:
    role: "dev"
```

## Contributing

Pull requests are always welcome. Please see the [contributing](https://github.com/janders223/serverless-offline-assume-role/blob/master/CONTRIBUTING.md) guidelines.

## License

[MIT](https://github.com/janders223/serverless-offline-assume-role/blob/master/LICENSE)
