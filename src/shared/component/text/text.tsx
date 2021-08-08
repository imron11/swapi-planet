import React from "react";
import { StyleSheet, Text as Text_, TextProps } from "react-native";
import { scaledFontSize } from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: scaledFontSize(64),
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: scaledFontSize(48),
  },
  body: {
    fontWeight: "normal",
    fontSize: scaledFontSize(32),
  },
  bodyBold: {
    fontWeight: "bold",
    fontSize: scaledFontSize(32),
  },
  caption: {
    fontWeight: "normal",
    fontSize: scaledFontSize(20),
  },
  captionBold: {
    fontWeight: "bold",
    fontSize: scaledFontSize(20),
  },
  notification: {
    fontWeight: "bold",
    fontSize: scaledFontSize(10)
  }
});

type Variant =
  | "title"
  | "subtitle"
  | "body"
  | "body-bold"
  | "caption"
  | "caption-bold"
  | "notification";

type Color =
  | "primary"
  | "secondary"
  | "white"
  | "blue"
  | "pink"
  | "darkGray";

interface Props extends TextProps {
  variant?: Variant;
  color?: Color;
  value: string;
}

const Text: React.FC<Props> = ({
  variant = "regular",
  value,
  color = "grey-dark",
  ...props
}) => {
  const createVariantStyle = () => {
    switch (variant) {
      case "title":
        return styles.title;
      case "subtitle":
        return styles.subtitle;
      case "body":
        return styles.body;
      case "body-bold":
        return styles.bodyBold;
      case "caption":
        return styles.caption;
      case "caption-bold":
        return styles.captionBold;
      case "notification":
        return styles.notification
      default:
        return styles.body
    }
  };

  const createColorStyle = () => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.secondary;
      case "white":
        return colors.white;
      case "blue":
        return colors.blue;
      case "pink":
        return colors.pink;
      case "darkGray":
        return colors.darkGray;
      default:
        return colors.secondary;
    }
  };

  return (
    <Text_
      {...props}
      style={[createVariantStyle(), { color: createColorStyle() }, props.style]}>
      {value}
    </Text_>
  );
};

export default Text;