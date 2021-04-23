import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
    },
  },
});
