import { defineConfig } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
  test: {
    // Ava uses `*.test.*` so we use a different pattern
    include: ['src/**/*.test.{ts,tsx}'],
    includeSource: ['src/**/*.{ts,tsx}'],
    setupFiles: ['./vitest.setup.mts'],
  },
});
