import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import colors from "../../theme/colors";
import {
  scaledFontSize,
  scaledVertical
} from "../../../service/helper/scale.helper";

interface Props extends TouchableOpacityProps {
  icon?: () => React.ReactElement | null,
  backgroundColor?: string;
  buttonText?: string;
}

const BlockButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor ? props.backgroundColor : colors.pink
        },
        props.style
      ]}
    >
      {props.icon && props.icon()}

      {props.buttonText &&
        <Text style={styles.buttonText}>
          {props.buttonText}
        </Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: scaledVertical(24),
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  buttonText: {
    fontWeight: "700",
    fontSize: scaledFontSize(28),
    color: colors.white
  }
});

export default BlockButton;