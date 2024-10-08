module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};