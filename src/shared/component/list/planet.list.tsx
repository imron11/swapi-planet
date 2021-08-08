import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native"
import { scaledVertical } from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";
import Logo from "../logo/logo";
import Text from "../text/text";

interface Props {
  onPress?: () => void;
  name: string;
  population: string;
  climate: string;
}

const PlanetList: React.FC<Props> = (props: Props) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.verticalLine} />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => { props.onPress?.() }} style={styles.planetContainer}>
            <Logo />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            variant={"body-bold"}
            color={"blue"}
            value={props.name}
            style={{ textDecorationLine: "underline", textTransform: "uppercase" }}
          />
          <Text
            variant={"caption"}
            value={`population for this planet is about ${props.population} people(s) and climate at ther is ${props.climate}`}
            style={{ fontStyle: "italic" }}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.verticalLine} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  leftContainer: {
    width: "30%",
    alignItems: "center"
  },
  verticalLine: {
    height: scaledVertical(50),
    borderWidth: 1,
    borderColor: colors.pink
  },
  planetContainer: {
    width: scaledVertical(150),
    height: scaledVertical(150),
    borderRadius: 75,
    borderWidth: 2,
    borderColor: colors.darkGray,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PlanetList;