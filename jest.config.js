export default {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {},
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-results',
      outputName: 'junit.xml',
      usePathForSuiteName: true,
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      ancestorSeparator: ' › ',
      suiteNameTemplate: '{filepath}',
      addFileAttribute: true
    }],
    ['jest-html-reporters', {
      publicPath: './test-report',
      filename: 'report.html',
      expand: true,
      pageTitle: 'Test Report',
      logoImgPath: undefined,
      hideIcon: false,
      customInfos: [
        {
          title: 'Environment',
          value: 'CI/CD Pipeline'
        },
        {
          title: 'Platform',
          value: 'CircleCI'
        }
      ]
    }]
  ],
  verbose: true,
  testTimeout: 10000
};