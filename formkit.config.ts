import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from "~/formkit.theme";
import { en } from "@formkit/i18n";

export default defineFormKitConfig({
  locales: { en },
  locale: "en",
  config: {
    rootClasses
  },
  messages: {
    en: {
      ui: {
        incomplete: ""
      },
      validation: {
        required: `Can´t be blank`
      }
    }
  }
});
