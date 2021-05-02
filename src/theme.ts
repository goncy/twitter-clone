import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        color: mode(undefined, "whiteAlpha.900")(props),
        height: "100%",
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  textStyles: {
    translucid: {
      ".chakra-ui-light &": {
        color: ["blackAlpha.100", "blackAlpha.500"],
      },
      ".chakra-ui-dark &": {
        color: ["whiteAlpha.100", "whiteAlpha.500"],
      },
    },
  },
  fontSizes: {
    sm: "0.95rem",
    xs: "0.9rem",
  },
  sizes: {
    container: {
      xl: "1265px",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, "white")(props),
          fontWeight: "bold",
          _hover: {
            backgroundColor: `${props.colorScheme}.600`,
          },
        }),
        outline: (props) => ({
          borderColor: `${props.colorScheme}.500`,
          color: mode(undefined, `${props.colorScheme}.500`)(props),
          _hover: {
            borderColor: `${props.colorScheme}.600`,
          },
        }),
      },
    },
  },
});
