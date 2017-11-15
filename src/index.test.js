const incoming = require('./').incoming;

test('it has an incoming array', () => {
  expect(incoming).toHaveLength(15);
  expect(incoming[0][0]).toBe(1510704000);
});
