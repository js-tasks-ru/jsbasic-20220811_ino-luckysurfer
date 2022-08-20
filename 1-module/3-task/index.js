function ucFirst(str) {
  str = str.trim();
  
  if (str.length === 0) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}
