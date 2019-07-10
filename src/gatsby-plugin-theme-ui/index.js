import { base } from "@theme-ui/presets";
import merge from "lodash.merge";
import typography from "./typography";
import styles from "./styles";

export default merge(typography, {
  ...base,
  colors: {
    text: "rgb(0,0,0,0.75)",
    background: "#fff"
  },
  fonts: {
    heading: "Work Sans, serif",
    body: "Quattrocento Sans, sans-serif"
  },
  styles
});
