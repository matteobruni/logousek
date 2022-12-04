import { useState, useEffect } from "react";
import { getRandomSvgs } from "../../../../../helpers/svg-helpers";
import { SvgWrapper } from "./styled";
import { shuffle } from "lodash-es";

const VIEWBOX_CONF = {
  4: {
    leftTop: "0 0 512 1024",
    rightTop: "512 0 512 1024",
    leftBottom: "0 512 512 1024",
    rightBottom: "512 512 512 1024",
  },
};

export const SVGS_HASH = {
  4: ["leftTop", "rightTop", "leftBottom", "rightBottom"],
};

const useGetCards = (count) => {
  const _getCards = () => {
    const [Svg] = getRandomSvgs(1);
    return shuffle(new Array(count).fill(undefined).map((card, index) => {
      const keyImage = SVGS_HASH[count][index];
      return {
      img: (
        <SvgWrapper>
          <Svg customViewBox={VIEWBOX_CONF[count][keyImage]} />
        </SvgWrapper>
      ),
      keyImage,
    }}));
  };

  const [cards, setData] = useState(_getCards());

  const resetCards = () => {
    setData(_getCards());
  };

  return [cards, setData, resetCards];
};

export default useGetCards;
