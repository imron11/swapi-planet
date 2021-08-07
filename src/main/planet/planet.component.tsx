import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import { scaledVertical } from "../../service/helper/scale.helper";
import PageLayout from "../../shared/component/layout/page.layout";
import PlanetList from "../../shared/component/list/planet.list";
import Spacer from "../../shared/component/spacer/spacer";
import PlanetHeaderSection from "./section/planet-header.section";
import PlanetDetailSection from "./section/planet-detail.section";
import { observer } from "mobx-react";
import { usePlanetStore } from "../root.provider";

const PlanetComponent = observer(() => {
  const [showDetail, setShowDetail] = useState(false);
  const _planetStore = usePlanetStore();

  useEffect(() => {
    _planetStore.getListPlanets();
  }, [_planetStore]);

  const renderItem = ({ item }) => (
    <PlanetList 
    onPress={() => { setShowDetail(true) }} 
    name={item.name} 
    population={item.population} 
    climate={item.climate} />
  );

  return (
    <>
      <PageLayout style={styles.container}>
        <PlanetHeaderSection />
        <Spacer h={scaledVertical(32)} />
        {_planetStore.dataPlanets &&
          <FlatList
            data={_planetStore.dataPlanets.results}
            keyExtractor={(item) => item.url}
            renderItem={renderItem}
          />
        }
      </PageLayout>

      <PlanetDetailSection
        visible={showDetail}
        onClose={() => { setShowDetail(false) }}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: scaledVertical(30)
  }
});

export default PlanetComponent;