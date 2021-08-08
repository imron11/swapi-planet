import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Text from "../../../shared/component/text/text";
import icons from "../../../asset/icons";
import { scaledHorizontal, scaledVertical } from "../../../service/helper/scale.helper";
import colors from "../../../shared/theme/colors";
import { Actions } from "react-native-router-flux";

const WishlistHeaderSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { Actions.pop() }} style={styles.backContainer}>
        <Image
          source={icons.icon_back}
          resizeMode={"stretch"}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text
          variant={"title"}
          color={"blue"}
          value={"Wishlist of Planet(s)"}
          style={styles.titleText}
        />
        <Text
          variant={"caption"}
          color={"darkGray"}
          value={"Click icon planet or name of planet to see the detail of planet."}
          style={styles.noteText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleText: {
    textAlign: "left",
  },
  noteText: {
    textAlign: "left",
    fontStyle: "italic",
  },
  backContainer: {
    paddingBottom: scaledVertical(12),
    marginHorizontal: scaledHorizontal(20),
  },
  backIcon: {
    tintColor: colors.secondary,
    width: scaledVertical(40),
    height: scaledVertical(50),
  }
});

export default WishlistHeaderSection;