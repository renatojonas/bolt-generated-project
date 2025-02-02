import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    const repoName = process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
      : '';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: repoName,
      optimizeDeps: {
        exclude: ['lucide-react'],
      },
    });
