// @flow
const moment = require('moment-timezone');
type Entry = [number, string];
type EntryArray = Array<Entry>;

const randomTimezone = moment.tz.names()[
  Math.floor(Math.random() * moment.tz.names().length)
];

exports.randomTimezone = randomTimezone;

const incoming: EntryArray = [
  [1510704000, 'Value 1'],
  [1510704900, 'Value 2'],
  [1510705800, 'Value 3'],
  [1510706700, 'Value 4'],
  [1510707600, 'Value 5'],
  [1510708500, 'Value 6'],
  [1510709400, 'Value 7'],
  [1510710300, 'Value 8'],
  [1510711200, 'Value 9'],
  [1510712100, 'Value 10'],
  [1510713000, 'Value 11'],
  [1510713900, 'Value 12'],
  [1510714800, 'Value 13'],
  [1510715700, 'Value 14'],
  [1510716600, 'Value 15'],
];
exports.incoming = incoming;

exports.convertArray = (inc: EntryArray): EntryArray => {
  // ...do stuff
};

(() => {
  console.log(`Converting array to ${randomTimezone}!`);

  // ...do stuff
})();