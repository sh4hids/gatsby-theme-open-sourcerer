function toTitleCase(string = '') {
  return string
    ? string
        .replace(/\s\s+/g, ' ')
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(' ')
    : '';
}

module.exports = toTitleCase;
