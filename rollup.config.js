export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['bluebird',
    'fs',
    'path',
    'ini',
    'aws-sdk',
  ]
}
