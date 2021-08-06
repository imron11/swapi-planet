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
          backgroundColor: props.backgroundColor ? props.backgroundColor : colors.secondary
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
    padding: scaledVertical(10),
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: scaledFontSize(16),
    color: colors.white
  }
});

export default BlockButton;