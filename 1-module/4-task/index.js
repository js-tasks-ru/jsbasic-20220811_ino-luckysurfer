function checkSpam(str) {
  str = str.toLowerCase();
  
  let pattern1Xbet = '1xbet';
  let patternXXX = 'xxx';

  return str.includes(pattern1Xbet) || str.includes(patternXXX);
}