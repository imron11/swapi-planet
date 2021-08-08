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

interface Props {
  notifCount?: number
}

const PlanetHeaderSection: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          variant={"title"}
          color={"blue"}
          value={"List of\nPlanet(s)"}
          style={styles.titleText}
        />
        <Text
          variant={"caption"}
          color={"darkGray"}
          value={"Click icon planet or name of planet to see the detail of planet."}
          style={styles.noteText}
        />
      </View>
      <TouchableOpacity onPress={() => { Actions.push("WishlistPage") }} style={styles.heartContainer}>
        <Image
          source={icons.icon_heart}
          resizeMode={"stretch"}
          style={styles.heartIcon}
        />
        {props.notifCount > 0 &&
          <View style={styles.notificationContainer}>
            <Text
              variant={"notification"}
              color={"white"}
              value={`${props.notifCount}`}
            />
          </View>
        }
      </TouchableOpacity>
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
  heartContainer: {
    paddingBottom: scaledVertical(12),
    marginHorizontal: scaledHorizontal(20),
    borderBottomWidth: 1.5,
    borderBottomColor: colors.secondary
  },
  heartIcon: {
    tintColor: colors.secondary,
    width: scaledVertical(40),
    height: scaledVertical(40),
  },
  notificationContainer: {
    position: "absolute",
    top: scaledVertical(-8),
    right: scaledHorizontal(-8),
    alignItems: "center",
    justifyContent: "center",
    width: scaledVertical(24),
    height: scaledVertical(24),
    borderRadius: 12,
    backgroundColor: colors.pink
  }
});

export default PlanetHeaderSection;