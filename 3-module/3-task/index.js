function camelize(str) {
  str = str.split('-');
  str.forEach((item, index) => {
    if (index) {
      str[index] = str[index].at(0).toUpperCase() + str[index].slice(1);
    }
  });
  
  return str.join('');
}
