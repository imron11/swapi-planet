import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { scaledVertical } from "../../service/helper/scale.helper";
import PageLayout from "../../shared/component/layout/page.layout";
import PlanetList from "../../shared/component/list/planet.list";
import Spacer from "../../shared/component/spacer/spacer";
import Text from "../../shared/component/text/text";
import PlanetHeaderSection from "./section/planet-header.section";
import PlanetDetailSection from "../../shared/component/section/planet-detail.section";
import { observer } from "mobx-react";
import { usePlanetStore } from "../root.provider";

const PlanetComponent = observer(() => {
  const [showDetail, setShowDetail] = useState(false);
  const _planetStore = usePlanetStore();

  useEffect(() => {
    _planetStore.getListPlanets();
    _planetStore.getSavedPlanets();
    return () => {
      _planetStore.resetPlanets();
    }
  }, [_planetStore]);

  const onRefresh = () => {
    _planetStore.resetPlanets();
    _planetStore.getListPlanets();
  }

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

  const renderFooter = () => (
    <>
      {_planetStore.pageNumber > 6 &&
        <Text
          variant={"caption-bold"}
          color={"darkGray"}
          value={"All Data Planet Loaded."}
          style={styles.footerText}
        />
      }
    </>
  );

  return (
    <>
      <PageLayout style={styles.container}>
        <PlanetHeaderSection 
          notifCount={!_planetStore.dataSavedPlanets ? 0 : _planetStore.dataSavedPlanets.length}
        />
        <Spacer h={scaledVertical(32)} />
        {_planetStore.dataPlanets &&
          <FlatList
            data={_planetStore.dataPlanets}
            keyExtractor={(item) => item.url}
            renderItem={renderItem}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              _planetStore.getMorePlanets();
            }}
            refreshControl={
              <RefreshControl
                refreshing={_planetStore.isLoadData}
                onRefresh={onRefresh}
              />
            }
          />
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
  },
  footerText: {
    textAlign: "center",
    marginVertical: scaledVertical(20),
    fontStyle: "italic"
  }
});

export default PlanetComponent;