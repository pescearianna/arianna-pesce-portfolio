import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  // i18n: {
  //   locales: ["es", "en", "it"],
  //   defaultLocale: "es",
  // },
  integrations: [
    icon({
      iconSets: {
        "line-md": true,
        "skill-icons": true,
        "ic":true,
      }
    })
    
  ]
});
