import React from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  View
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { scaledHorizontal, scaledVertical } from "../../../service/helper/scale.helper";
import colors from "../../theme/colors";

interface Props extends ModalProps {
  children: React.ReactNode;
  backdropPress?: () => void;
}

const ModalLayout: React.FC<Props> = (props: Props) => {
  return (
    <Modal
      {...props}
      animationType={"fade"}
      transparent
      statusBarTranslucent
    >
      {props.visible &&
        <>
          <View style={styles.backdropContainer} onTouchStart={() => { props.backdropPress?.() }} />
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              {props.children}
            </View>
          </View>
        </>
      }
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdropContainer: {
    position: "absolute",
    flex: 1,
    backgroundColor: "black",
    opacity: 0.6,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: scaledVertical(50)
  },
  cardContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: scaledVertical(50)
  }
});

export default ModalLayout;