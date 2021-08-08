import React from "react";
import {
  Alert,
  Image,
  ModalProps,
  Platform,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View
} from "react-native";
import { scaledVertical } from "../../../service/helper/scale.helper";
import ModalLayout from "../layout/modal.layout";
import Logo from "../logo/logo";
import Text from "../text/text";
import Spacer from "../spacer/spacer";
import RowList from "../list/row.list";
import icons from "../../../asset/icons";
import colors from "../../theme/colors";
import { Planet } from "../../../entity/planet.entity";
import { formatDate } from "../../../service/helper/date.helper";
import { usePlanetStore } from "../../../main/root.provider";
import { addPlanet, deletePlanet } from "../../../database/planet.database";

interface Props extends ModalProps {
  data: Planet;
  onClose: () => void;
}

const PlanetDetailSection: React.FC<Props> = (props: Props) => {
  const _planetStore = usePlanetStore();

  const onCloseModal = () => {
    props.onClose();
  }

  const onAction = async (planet) => {
    const isContained = _planetStore.dataSavedPlanets.filter(e => e.url === props.data.url).length > 0;

    if (isContained) {
      await deletePlanet(planet.url);
    } else {
      await addPlanet(planet.url, planet.name, planet.population, planet.climate);
    }

    if (Platform.OS === "android") {
      ToastAndroid.show(`Planet ${isContained ? "Remove" : "Added"} to Wishlist`, ToastAndroid.SHORT);
    } else {
      Alert.alert("Hei!", `Planet ${isContained ? "Remove" : "Added"} to Wishlist`);
    }

    _planetStore.getSavedPlanets();
    onCloseModal();
  }

  return (
    <ModalLayout
      {...props}
      onRequestClose={onCloseModal}
      backdropPress={() => onCloseModal()}
    >
      {props.data &&
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => onAction(props.data)}
            style={styles.btnIconContainer}>
            <Image
              source={
                _planetStore.dataSavedPlanets.filter(e => e.url === props.data.url).length > 0 ?
                  icons.icon_trash
                  :
                  icons.icon_heart
              }
              resizeMode={"stretch"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Logo width={scaledVertical(350)} height={scaledVertical(350)} />
          <Text
            variant={"subtitle"}
            color={"blue"}
            value={props.data.name}
            style={styles.titleText}
          />
          <Spacer h={scaledVertical(50)} />
          <RowList
            label={"Rotation Period"}
            value={props.data.rotation_period}
          />
          <RowList
            label={"Orbital Period"}
            value={props.data.orbital_period}
          />
          <RowList
            label={"Diameter"}
            value={props.data.diameter}
          />
          <RowList
            label={"Climate"}
            value={props.data.climate}
          />
          <RowList
            label={"Gravity"}
            value={props.data.gravity}
          />
          <RowList
            label={"Terrain"}
            value={props.data.terrain}
          />
          <RowList
            label={"Surface Water"}
            value={props.data.surface_water}
          />
          <RowList
            label={"Population"}
            value={props.data.population}
          />
          <Spacer h={scaledVertical(50)} />
          <Text
            variant={"caption-bold"}
            value={"Created at"}
          />
          <Text
            variant={"body-bold"}
            color={"pink"}
            value={`${formatDate(props.data.created)}`}
          />
          <Spacer h={scaledVertical(20)} />
        </View>
      }
    </ModalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    textDecorationLine: "underline",
    textTransform: "uppercase"
  },
  btnIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    width: scaledVertical(70),
    height: scaledVertical(70),
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.secondary
  },
  icon: {
    tintColor: colors.secondary,
    width: scaledVertical(40),
    height: scaledVertical(40),
  }
});

export default PlanetDetailSection;