import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import { Actions } from "react-native-router-flux";
import { scaledHorizontal, scaledVertical } from "../../service/helper/scale.helper";
import BlockButton from "../../shared/component/button/block.button";
import PageLayout from "../../shared/component/layout/page.layout";
import Spacer from "../../shared/component/spacer/spacer";
import Text from "../../shared/component/text/text";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninComponent = () => {

  const onGetStarted = async () => {
    await AsyncStorage.setItem('@user', 'public');
    Actions.reset("PlanetPage");
  }

  return (
    <PageLayout style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text
          variant={"subtitle"}
          color={"darkGray"}
          value={"WELCOME\nTO"}
          style={styles.greetingText}
        />
        <Text
          variant={"title"}
          color={"blue"}
          value={"SWAPI PLANET"}
          style={styles.greetingText}
        />
        <Spacer h={scaledVertical(100)} />
        <Text
          variant={"caption"}
          color={"darkGray"}
          value={`"swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe! We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!`}
          style={styles.descriptionText}
        />
      </View>

      <BlockButton
        onPress={onGetStarted}
        buttonText={"GET STARTED"}
      />
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: scaledVertical(30)
  },
  greetingContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: scaledHorizontal(20)
  },
  greetingText: {
    textAlign: "right",
    textDecorationLine: "underline"
  },
  descriptionText: {
    textAlign: "left",
    fontStyle: "italic"
  }
});

export default SigninComponent;