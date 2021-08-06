import React from "react";
import {
  View,
  ViewProps,
  Text,
  StyleSheet
} from "react-native";
import {
  scaledFontSize,
  scaledHorizontal,
  scaledVertical
} from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";

interface Props extends ViewProps {
  title?: string;
  description?: string;
}

const NotFoundSection: React.FC<Props> = (props: Props) => {
  return (
    <View {...props} style={styles.container}>
      <Text
        style={
          styles.title
        }>
        {props.title}
      </Text>

      <Text
        style={
          styles.description
        }>
        {props.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: scaledVertical(75)
  },
  image: {
    width: scaledHorizontal(300),
    height: scaledVertical(360),
    tintColor: colors.secondary,
    marginBottom: scaledVertical(16)
  },
  title: {
    fontSize: scaledFontSize(32),
    fontWeight: "700",
    color: colors.secondary,
    textAlign: "center",
    marginBottom: scaledVertical(8),
  },
  description: {
    fontSize: scaledFontSize(24),
    color: colors.secondary,
    fontStyle: "italic",
    textAlign: "center"
  }
})

export default NotFoundSection;