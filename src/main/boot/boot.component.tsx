import React from "react";
import { 
  StyleSheet,
} from "react-native";
import PageLayout from "../../shared/component/layout/page.layout";
import Logo from "../../shared/component/logo/logo";
import { scaledVertical } from "../../service/helper/scale.helper";

const BootComponent = () => {
  return(
    <PageLayout style={styles.container}>
      <Logo 
        width={scaledVertical(600)}
        height={scaledVertical(600)}
      />
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default BootComponent;