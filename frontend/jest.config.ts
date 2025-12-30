import type { Config } from 'jest';

const config: Config = {
  // среда выполнения — браузерная
  testEnvironment: 'jsdom',

  // используем ts-jest для трансформации TS
  preset: 'ts-jest',

  // автоматически выполнять этот файл перед тестами
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // чтобы Jest понимал импорты CSS и алиасы
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    // если используешь алиасы — можно добавить:
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // ищем файлы с расширениями .test.ts / .test.tsx
  testMatch: ['**/*.test.(ts|tsx)'],
};

export default config;