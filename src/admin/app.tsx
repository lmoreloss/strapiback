import type { StrapiApp } from "@strapi/strapi/admin";
import Logo from "./extensions/digisols.png";
import Favicon from "./extensions/digisols.png";
import { Car, PriceTag } from "@strapi/icons";

export default {
  config: {
    // 1. UI Configuration
    auth: {
      logo: Logo, // The logo on the Login screen
    },
    menu: {
      logo: Logo, // The logo in the top-left corner of the sidebar
    },
    head: {
      favicon: Favicon,
    },
    // 2. Translation Overrides (Change text)
    locales: ["es", "fr"], // Add languages you want to support
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to My Custom Dashboard",
        "Auth.form.welcome.subtitle": "Log in to manage your content",
        "app.components.LeftMenu.navbrand.title": "My Company Name",
      },
      es: {
        "Auth.form.welcome.title": "Bienvenido al Panel",
        "Auth.form.welcome.subtitle": "Inicia sesion para editar el contenido",
        "app.components.LeftMenu.navbrand.title": "Digital Solution",
      },
    },
    // 3. Theme Customization (Colors)
    theme: {
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
      },
      dark: {
        // Define dark mode colors here if you use it
        colors: {
          alternative100: "#181826",
          alternative200: "#4a4a6a",
          alternative500: "#ac73e6",
          alternative600: "#ac73e6",
          alternative700: "#e0c1f4",
          buttonNeutral0: "#ffffff",
          buttonPrimary500: "#7b79ff",
          buttonPrimary600: "#ff4599ff",
          danger100: "#181826",
          danger200: "#4a4a6a",
          danger500: "#ee5e52",
          danger600: "#ee5e52",
          danger700: "#ee5e52",
          neutral0: "#212134",
          neutral100: "#181826",
          neutral1000: "#ffffff",
          neutral150: "#32324d",
          neutral200: "#4a4a6a",
          neutral300: "#666687",
          neutral400: "#a5a5ba",
          neutral500: "#c0c0cf",
          neutral600: "#a5a5ba",
          neutral700: "#eaeaef",
          neutral800: "#ffffff",
          neutral900: "#ffffff",
          primary100: "#181826",
          primary200: "#4a4a6a",
          primary500: "#ff4558ff",
          primary600: "#98314eff",
          primary700: "#0ed346ff",
          secondary100: "#181826",
          secondary200: "#4a4a6a",
          secondary500: "#66b7f1",
          secondary600: "#66b7f1",
          secondary700: "#b8e1ff",
          success100: "#181826",
          success200: "#4a4a6a",
          success500: "#5cb176",
          success600: "#5cb176",
          success700: "#c6f0c2",
          warning100: "#181826",
          warning200: "#4a4a6a",
          warning500: "#f29d41",
          warning600: "#f29d41",
          warning700: "#fae7b9",
        },
      },
    },
    // Hide the "Information" and tutorials link in bottom right
    tutorials: false,
    notifications: { releases: false },
  },

  bootstrap(app: StrapiApp) {
    console.log(app);
    //Para añadir items al menu, es con la siguiente sintaxis
    app.addMenuLink({
      to: "/compo",
      icon: Car,
      intlLabel: {
        id: "my-custom-plugin",
        defaultMessage: "Aqui se va a prueba1", // Text in Sidebar
      },
      //el component a reenderizar debe ser puesto como async y tenerlo en otro archivo
      Component: async () => import("./extensions/compo"),
      permissions: [],
    });
    app.addMenuLink({
      to: "/papitas",
      icon: PriceTag,
      intlLabel: {
        id: "Prueba2",
        defaultMessage: "Aqui se va a prueba2", // Text in Sidebar
      },
      Component: async () => import("./extensions/papitas"),
      permissions: [],
    });
  },
};
