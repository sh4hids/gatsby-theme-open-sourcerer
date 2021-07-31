function toTitleCase(string = '') {
  return string
    ? string
        .toLowerCase()
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(' ')
    : '';
}

module.exports = toTitleCase;
