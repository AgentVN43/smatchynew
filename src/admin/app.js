import favicon from "./extensions/favicon.png";

const config = {
  locales: ["en", "fr"],
  head: {
    favicon: favicon,
  },
  theme: {
    light: {
      colors: {
        // Neutral scale (bắt buộc để loading/skeleton đổi màu)
        neutral0: "#FFFFFF",
        neutral100: "#FAFAFA",
        neutral200: "#F5F5F5",
        neutral300: "#E0E0E0",
        neutral400: "#BDBDBD",
        neutral500: "#9E9E9E",
        neutral600: "#757575",
        neutral700: "#616161",
        neutral800: "#424242",
        neutral900: "#212121",
        neutral1000: "#000000",

        // Primary (Smatchy brand: #FCA13B)
        primary100: "#FFF8F0",
        primary200: "#FFEFD7",
        primary300: "#FFDFA3",
        primary400: "#FFCF70",
        primary500: "#FDB83D",
        buttonPrimary500: "#FCA13B",
        primary600: "#FCA13B",
        buttonPrimary600: "#FCA13B",
        primary700: "#E18A2A",
        primary800: "#B96B1F",

        interactiveMain: "#FCA13B",
        buttonPrimaryText: "#FFFFFF",
        interactiveActive: "#FCA13B",
        interactiveHover: "#FFCF70",
      },
    },
    dark: {
      colors: {
        neutral0: "#000000",
        neutral100: "#121212",
        neutral200: "#1E1E1E",
        neutral300: "#2D2D2D",
        neutral400: "#424242",
        neutral500: "#616161",
        neutral600: "#757575",
        neutral700: "#9E9E9E",
        neutral800: "#BDBDBD",
        neutral900: "#E0E0E0",
        neutral1000: "#FFFFFF",

        primary100: "#2A231A",
        primary200: "#403525",
        primary300: "#5A4A32",
        primary400: "#765F3F",
        primary500: "#FDB83D",
        primary600: "#FCA13B",
        primary700: "#E18A2A",
        primary800: "#B96B1F",

        buttonPrimaryBg: "#FCA13B",
        buttonPrimaryText: "#000000",
        interactiveActive: "#FCA13B",
        interactiveHover: "#FFDFA3",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
