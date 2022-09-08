function getMinMax(str) {
  str = str.split(' ');
  
  str = str.filter(item => !isNaN(item));
  str.sort((a, b) => a - b);

  return {
    min: +str.at(0),
    max: +str.at(-1),
  }
}
