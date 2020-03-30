module.exports = {
  rules: {
    '@textlint-rule/no-unmatched-pair': true,
    // apostrophe: true,
    'common-misspellings': true,
    diacritics: true,
    'en-capitalization': {
      severity: 'warning',
      // allow lower-case words in Header
      allowHeading: true,
      // allow lower-case words in Image alt
      allowFigures: true,
      // allow lower-case words in ListItem
      allowLists: true,
      // allow lower-case words in anywhere
      allowWords: [],
    },
    'stop-words': {
      severity: 'warning',
    },
    terminology: {
      severity: 'warning',
      // Load default terms (see terms.json in the repository)
      defaultTerms: true,
      // Syntax elements to skip. Overrides the default
      skip: ['Blockquote'],
      // List of terms
      terms: `${__dirname}/.textlint.terms.json`,
    },
    'write-good': {
      severity: 'warning',
    },
    'no-dead-link': {
      severity: 'warning',
      checkRelative: false,
      baseURI: null,
      ignore: [],
      preferGET: [],
      ignoreRedirects: false,
      retry: 3,
    },
  },
  filters: {
    comments: true,
  },
};
