export const shuffle = <T>(array: T[]): T[] => {
  array?.sort(() => Math.random() - 0.5);
  return array;
};

export const getRandomElementFromList = (list: any[], count: number): any => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const choosedIndex = Math.floor(Math.random() * list.length);
    const selectedElement = list.splice(choosedIndex, 1)[0];
    selectedElement && result.push(selectedElement);
  }

  return result;
};

export const isEmptyArray = (value: any) => {
  return Array.isArray(value) && value.length
}