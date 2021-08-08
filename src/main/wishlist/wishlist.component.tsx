import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import { scaledVertical } from "../../service/helper/scale.helper";
import PageLayout from "../../shared/component/layout/page.layout";
import PlanetList from "../../shared/component/list/planet.list";
import Spacer from "../../shared/component/spacer/spacer";
import WishlistHeaderSectiosn from "./section/wishlist-header.section";
import { observer } from "mobx-react";
import NotFoundSection from "../../shared/component/section/not-found.section";
import { usePlanetStore } from "../root.provider";
import PlanetDetailSection from "../../shared/component/section/planet-detail.section";

const PlanetComponent = observer(() => {
  const [showDetail, setShowDetail] = useState(false);
  const _planetStore = usePlanetStore();

  const onGetDetailPlanet = (url) => {
    _planetStore.getDetailPlanet(url);
    setShowDetail(true)
  }

  const renderItem = ({ item, index }) => (
    <PlanetList
      key={index}
      onPress={() => { onGetDetailPlanet(item.url) }}
      name={item.name}
      population={item.population}
      climate={item.climate} />
  );

  return (
    <>
      <PageLayout style={styles.container}>
        <WishlistHeaderSectiosn />
        <Spacer h={scaledVertical(32)} />
        {_planetStore.dataSavedPlanets.length > 0 ?
          <FlatList
            data={_planetStore.dataSavedPlanets}
            keyExtractor={(item) => item.url}
            renderItem={renderItem}
          />
          :
          <NotFoundSection />
        }
      </PageLayout>

      <PlanetDetailSection
        data={_planetStore.dataDetailPlanet}
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