function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let start = 0;
    return str.slice(start, start + maxlength - 1) + '…';
  }

  return str;
}
