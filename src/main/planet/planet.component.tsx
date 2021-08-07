import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { scaledVertical } from "../../service/helper/scale.helper";
import PageLayout from "../../shared/component/layout/page.layout";
import PlanetList from "../../shared/component/list/planet.list";
import Spacer from "../../shared/component/spacer/spacer";
import PlanetHeaderSection from "./section/planet-header.section";
import PlanetDetailSection from "./section/planet-detail.section";

const PlanetComponent = () => {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <PageLayout style={styles.container}>
        <PlanetHeaderSection />
        <Spacer h={scaledVertical(32)} />
        <PlanetList onPress={() => { setShowDetail(true) }} name={"TATOOINE"} population={200000} climate={"temperature"} />
        <PlanetList onPress={() => { setShowDetail(true) }} name={"ALDERAAN"} population={200000} climate={"temperature"} />
        <PlanetList onPress={() => { setShowDetail(true) }} name={"YAVINE IV"} population={200000} climate={"temperature"} />
      </PageLayout>

      <PlanetDetailSection
        visible={showDetail}
        onClose={() => { setShowDetail(false) }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: scaledVertical(30)
  }
});

export default PlanetComponent;