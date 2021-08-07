import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewProps
} from "react-native";
import colors from "../../theme/colors";

interface Props extends ViewProps {
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      {/* top SafeAreaView */}
      <SafeAreaView style={styles.safeAreaEdgeContainer} />
      <SafeAreaView style={styles.safeAreaMainContainer}>
        <StatusBar backgroundColor={colors.primary} barStyle={"dark-content"} />
        <View {...props} style={[styles.mainContainer, props.style]}>
          {props.children}
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.safeAreaEdgeContainer} />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaEdgeContainer: {
    flex: 0,
    backgroundColor: colors.primary
  },
  safeAreaMainContainer: {
    flex: 1,
    backgroundColor: colors.primary
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary
  }
});

export default PageLayout;