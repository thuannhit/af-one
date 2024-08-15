module.exports = {
  testRegex: '__tests__/.*\\.(test|spec)\\.[jt]s$',
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteNameTemplate: '{filename}',
        ancestorSeparator: ' › ',
        outputDirectory: 'output/reports/unit',
        outputName: 'junit.xml',
      },
    ],
  ],
  coverageReporters: ['text', 'cobertura']
};
