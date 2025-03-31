module.exports = {
  rootDir: './',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/spec/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/spec/jest.setup.js'],
  transform: {},
  moduleFileExtensions: ['js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/spec/e2e/'],
};
