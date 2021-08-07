import React from "react";
import {
  StyleSheet,
  View,
  ViewProps
} from "react-native";
import { scaledHorizontal, scaledVertical } from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";
import Text from "../text/text";

interface Props extends ViewProps {
  label: string;
  value: string
}

const RowList: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text
        variant={"caption-bold"}
        value={props.label}
      />

      <Text
        variant={"caption-bold"}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scaledVertical(16),
    paddingHorizontal: scaledHorizontal(8),
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary
  }
});

export default RowList;