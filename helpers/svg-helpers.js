import Flower from "../components/svg/templates/flower";
import Lolipop from "../components/svg/templates/lolipop";
import Logousek from "../components/svg/templates/logousek";
import Bear from "../components/svg/templates/bear";
import Cloud from "../components/svg/templates/cloud";
import Sun from "../components/svg/templates/sun";
import Ladybug from "../components/svg/templates/ladybug";
import Car from "../components/svg/templates/car";
import Lego from "../components/svg/templates/lego";

const svgList = [
  {
    name: "flower",
    component: Flower,
    hideSettings: [
      "hideFirstLeaf",
      "hideSecondLeaf",
      "hideThirdLeaf",
      "hideFourthLeaf",
      "hideFithLeaf",
      "hideSixthLeaf",
      "hideSeventhLeaf",
      "hideEightLeaf",
    ],
    hideDetailsSettings: ["scaleFlower"],
  },
  {
    name: "lolipop",
    component: Lolipop,
    hideSettings: ["hideProtrusion"],
    hideDetailsSettings: [],
  },
  {
    name: "logousek",
    component: Logousek,
    hideSettings: [],
    hideDetailsSettings: [],
  },
  {
    name: "bear",
    component: Bear,
    hideSettings: ["hideLeftFoot", "hideRightFoot"],
    hideDetailsSettings: ["hideRightEarFilling", "hideLeftEarFilling"],
  },
  {
    name: "cloud",
    component: Cloud,
    hideSettings: ["changeColor", "twoColorPicture"],
    hideDetailsSettings: [],
  },
  {
    name: "sun",
    component: Sun,
    hideSettings: [
      "hideFirstFlash",
      "hideSecondFlash",
      "hideThirdFlash",
      "hideFourthFlash",
      "hideFithFlash",
      "hideSixthFlash",
      "hideSeventhFlash",
      "hideEightFlash",
    ],
    hideDetailsSettings: [],
  },
  {
    name: "ladybug",
    component: Ladybug,
    hideSettings: [
      "hideFirstDot",
      "hideSecondDot",
      "hideThirdDot",
      "hideFourthDot",
      "hideFifthDot",
      "hideSixthDot",
      "hideSeventhDot",
      "hideEighthDot",
    ],
    hideDetailsSettings: ["hideLeftFeeler", "hideRightFeeler"],
  },
  {
    name: "car",
    component: Car,
    hideSettings: ["hideDoor", "changeDoorColor"],
    hideDetailsSettings: ["hideFirstHandle", "hideSecondHandle"],
  },
  {
    name: "lego",
    component: Lego,
    hideSettings: [],
  },
];

// export const getSvgHideSettingsFromName = (name, useDetailConfig) => {
//   return [...((useDetailConfig ? hideDetailsSettings : hideSettings)[name.toLowerCase()] || [])];
// };

export const getRandomSvgs = (count, usedPictures) => {
  let usedSvgList = [
    ...(usedPictures ? getUsedPicturesConf(usedPictures) : svgList),
  ];
  return getRandomElementFromList(usedSvgList, count).map(
    (elementConf) => elementConf.component
  );
};

export const getRandomSvgsWithChangeConfig = (count, usedPictures) => {
  let usedSvgList = [
    ...(usedPictures ? getUsedPicturesConf(usedPictures) : svgList),
  ];
  return getRandomElementFromList(usedSvgList, count);
};

const getUsedPicturesConf = (usedPictures) => {
  return svgList.filter((svg) => usedPictures.includes(svg.name));
};

const getRandomElementFromList = (list, count) => {
  let result = [];
  console.log("list", list)
  for (let i = 0; i < count; i++) {
    const choosedIndex = Math.floor(Math.random() * list.length);
    const selectedElement = list.splice(choosedIndex, 1)[0];
    selectedElement && result.push(selectedElement);
  }

  console.log("list", result)
  return result;
};

export const getHideConfig = (elementsToHideList = []) => {
  let elementsToHideObject = elementsToHideList.reduce((result, element) => {
    result[element] = false;
    return result;
  }, {});
  console.log("test122", elementsToHideObject)
  elementsToHideObject[getRandomElementFromList(elementsToHideList, 1)] = true;
  console.log("test122", elementsToHideObject, elementsToHideList)
  return elementsToHideObject;
};
