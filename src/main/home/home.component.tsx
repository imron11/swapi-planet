import React from "react";
import {
  StyleSheet
} from "react-native";
import { scaledVertical } from "../../service/helper/scale.helper";
import PageLayout from "../../shared/component/layout/page.layout";
import Text from "../../shared/component/text/text";

const HomeComponent = () => {
  return(
    <PageLayout style={styles.container}>
      <Text
        variant={"title"}
        color={"blue"}
        value={" List of Planet(s) "}
        style={styles.titleText}
      />
      <Text
        variant={"caption"}
        value={"Click icon planet at timeline to see the detail of planet."}
        style={styles.noteText}
      />
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: scaledVertical(30)
  },
  titleText: {
    textAlign: "left",
    textDecorationLine: "underline",
  },
  noteText: {
    textAlign: "left",
    fontStyle: "italic",
  }
});

export default HomeComponent;