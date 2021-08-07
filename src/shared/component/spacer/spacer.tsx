import React from "react";
import { View } from "react-native";

interface Props {
  w?: number;
  h?: number;
}

const Spacer: React.FC<Props> = (props: Props) => {
  return (
    <View 
    style={{ 
      width: props.w, 
      height: props.h 
    }} 
    />
  );
};

export default Spacer;