module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^axios$': '<rootDir>/__mocks__/axios.ts',
    },
};
  