import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",        // tells Vite your app is inside the "client" folder
  build: {
    outDir: "../dist",   // tells it to save the final version in a "dist" folder for Vercel
    emptyOutDir: true,
  },
});
