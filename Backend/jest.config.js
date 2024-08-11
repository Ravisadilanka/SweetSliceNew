module.exports = {
  testEnvironment: 'node', // For testing Node.js applications
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest', // If you are using Babel
  },
  testMatch: ['**/tests/**/*.test.js'], // Path to test files
};
