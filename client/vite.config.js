import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-property-marketplace-app.vercel.app",
        secure: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
