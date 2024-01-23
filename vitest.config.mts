import nextEnv from '@next/env';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

nextEnv.loadEnvConfig(process.cwd());

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    root: 'src',
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.mts'],
    testTransformMode: {
      ssr: ['**/*'],
    },
    reporters: ['default', 'hanging-process'],
  },
});
