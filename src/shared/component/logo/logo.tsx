import React from "react";
import {
  Image
} from "react-native";
import images from "../../../asset/images";
import { scaledVertical } from "../../../service/helper/scale.helper";

interface Props {
  width?: number,
  height?: number
}

const Logo: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Image
        source={images.image_logo}
        resizeMode={"stretch"}
        style={{
          height: props.height ? props.height : scaledVertical(150),
          width: props.width ? props.width : scaledVertical(150)
        }}
      />
    </>
  );
}

export default Logo;