export const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  export const getRandomElementFromList = (list, count) => {
    let result = [];
    for (let i = 0; i < count; i++) {
      const choosedIndex = Math.floor(Math.random() * list.length);
      const selectedElement = list.splice(choosedIndex, 1)[0];
      selectedElement && result.push(selectedElement);
    }
  
    return result;
  };