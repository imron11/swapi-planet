import React from "react";
import {
  View,
  ViewProps,
  StyleSheet
} from "react-native";
import {
  scaledHorizontal,
  scaledVertical
} from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";
import Text from "../text/text";

interface Props extends ViewProps {
  title?: string;
  description?: string;
}

const NotFoundSection: React.FC<Props> = (props: Props) => {
  return (
    <View {...props} style={styles.container}>
      <Text
        variant={"body-bold"}
        color={"darkGray"}
        value={props.title ? props.title : "Oooopss....\ndata not found"}
        style={{ textAlign: "center" }}
      />

      <Text
        variant={"caption"}
        value={props.title ? props.title : "SOMETHING WRONG, we cannot find some data that saved in your database, please add some data and try again. Thanks"}
        style={{ 
          marginTop: scaledVertical(30), 
          textAlign: "center", 
          fontStyle: "italic" 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: scaledVertical(120),
    paddingHorizontal: scaledHorizontal(75)
  },
  image: {
    width: scaledHorizontal(300),
    height: scaledVertical(360),
    tintColor: colors.secondary,
    marginBottom: scaledVertical(16)
  },
})

export default NotFoundSection;