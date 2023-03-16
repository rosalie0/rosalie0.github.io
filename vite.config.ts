import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import gltf from "vite-plugin-gltf"; // (b) Vite

import { draco } from "@gltf-transform/functions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    gltf({
      transforms: [draco()],
    }),
  ],
});
