module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@react-native-firebase/(.*)$':
      '<rootDir>/__mocks__/@react-native-firebase/$1.js',
  },
};
