import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  config: {
    initialColorMode: "dark",
  },

  styles: {
    global: (props) => ({
      ".stat-active": {
        bg: mode("#f5f5f5", "#4c4f53")(props),
      },
      ".stat-deactive": {
        bg: mode("#ffffff", "#292d33")(props),
      },
      ".dashboard-box": {
        bg: mode("#f5f5f5", "#4c4f53")(props),
      },
      ".text-dashboard-box": {
        color: mode("gray.700", "whiteAlpha.900")(props),
      },
      ".stat-box": {
        color: mode("gray.700", "whiteAlpha.900")(props),
        // bg: mode("#ffffff", "#292d33")(props),
        padding: "1rem",
        borderRadius: "10px",
        border: "2px solid rgba(0, 0, 0, 0.05)",
        margin: "1rem",
      },
      ".stat-addnewcurrency-box": {
        color: mode("gray.700", "whiteAlpha.900")(props),
        padding: "1rem",
        borderRadius: "10px",
        border: mode(
          "2px dashed rgba(0, 0, 0, 0.08)",
          "2px dashed #292d33"
        )(props),
        margin: "1rem",
      },
      ".stat-addnewcurrency": {
        color: mode("gray.400", "whiteAlpha.600")(props),
      },
      ".news-box": {
        color: mode("gray.700", "whiteAlpha.900")(props),
        bg: mode("#ffffff", "#292d33")(props),
        borderRadius: "10px",
        border: "2px solid rgba(0, 0, 0, 0.05)",
      },
      ".news-content": {
        padding: "1rem",
      },
      ".news-image": {
        borderRadius: "10px 10px 0 0",
        padding: "0px",
        margin: "0px",
      },
      ".box-header": {
        // bg: mode("gray.300", "gray.700")(props),
        borderRadius: "3px 0 0 0 ",
      },
      ".holding-box-header": {
        // bg: mode("gray.300", "gray.700")(props),
        // cursor: "grabbing",
        borderRadius: "3px 0 0 0 ",
      },
      ".borderrndbox": {
        border: "1px",
        borderColor: mode("gray.300", "gray.700")(props),
        borderRadius: "5px",
        bg: mode("gray.200", "gray.800")(props),
        boxShadow: "md",
      },
      ".rnd-button": {
        // bg: mode("gray.300", "gray.700")(props),
        borderRadius: "5px",
      },
      /* width */
      "::-webkit-scrollbar": {
        width: "10px",
      },
      /* Track */
      "::-webkit-scrollbar-track": {
        background: mode("gray.100", "gray.700")(props),
      },
      /* Handle */
      "::-webkit-scrollbar-thumb": {
        background: "gray.300",
      },
      /* Handle on hover */
      "::-webkit-scrollbar-thumb:hover": {
        background: "gray.600",
      },
      ".arrow-down": {
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "15px solid white",
      },
      ".arrow-up": {
        mt: "-10px",
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "15px solid white",
      },
      ".non-arrow": {
        mt: "-10px",
        width: 0,
        height: 0,
        borderLeft: "10px solid white",
        borderRight: "10px solid white",
        borderBottom: "3px solid white",
      },
      ".pie-chart-label": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      ".parameter-text": {
        color: mode("gray.600", "gray.400")(props),
        marginLeft: 1,
      },
      ".big-arrow-down": {
        width: 0,
        height: 0,
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderTop: "80px solid ",
      },
      ".big-arrow-up": {
        width: 0,
        height: 0,
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "80px solid ",
      },

      ".summary-box": {
        border: "1px",
        borderColor: mode("gray.200", "gray.600")(props),
        borderRadius: "5px",
        bg: mode("gray.100", "gray.700")(props),
        margin: "5%",
      },
      ".borderdashboard": {
        border: "1px",
        borderColor: mode("gray.200", "gray.600")(props),
        borderRadius: "5px",
        bg: mode("gray.100", "gray.700")(props),
      },
      ".day-difference": {
        borderRadius: "20px",
        bg: mode("gray.200", "gray.700")(props),
      },
      ".backtest-bordertxt": {
        borderWidth: "thin",
        borderColor: mode("gray.300", "gray.600")(props),
        borderRadius: "10px",
        bg: mode("gray.100", "gray.700")(props),
        padding: "3px",
      },
      ".divider-bordercolor": {
        borderColor: mode("white", "white")(props),
      },
    }),
  },

  components: {
    Tabs: {
      variants: {
        "upside-enclosed": () => ({
          tab: {
            borderBottomRadius: "lg",
            border: "1px solid",
            borderColor: "transparent",
            mb: "-1px",
          },
          tablist: {
            mb: "-1px",
            borderTop: "1px solid",
            borderColor: "inherit",
          },
        }),
      },
    },
    Button: {
      variants: {
        "ghost-2": () => ({
          borderRadius: "0",
        }),
        "ghost-x": () => ({
          borderRadius: "0 5px 0 0",
        }),
      },
    },
  },
});
export default theme;
