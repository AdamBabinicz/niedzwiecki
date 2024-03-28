import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ogPlugin from "vite-plugin-open-graph";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ogPlugin({
      url: "https://marek-niedzwiecki.netlify.app",
      title: "Marek Niedźwiecki - Strona główna",
      description:
        "Oficjalna strona Marka Niedźwieckiego - Muzyk, Kompozytor, Autor tekstów",
      image: "https://marek-niedzwiecki.netlify.app/images/19.webp",
      site_name: "Marek Niedźwiecki",
      locale: "pl_PL",
    }),
  ],
});
