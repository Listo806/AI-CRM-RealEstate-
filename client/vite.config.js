import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "client",        // tells Vite where your code is
  build: {
    outDir: "../dist",   // where to put the final build for Vercel
    emptyOutDir: true
  }
});
