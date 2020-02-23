module.exports = {
  testMatch: ['<rootDir>/test/**.test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
  collectCoverageFrom: ['<rootDir>/test/**/*.{ts,js}'],
  coveragePathIgnorePatterns: ['<rootDir>/src.*/index.ts'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
