// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('is #c4fdff a valid Hex color', () => {
  expect(functions.isHexColor('#c4fdff')).toBe(true);
});

test('is #g9hdg7 a valid Hex color', () => {
    expect(functions.isHexColor('#g9hdg7')).toBe(false);
  });

test('is Apple a strong password', () => {
    expect(functions.isStrongPassword('Apple')).toBe(true);
  });

test('is isthisavalidpassword a strong password', () => {
    expect(functions.isStrongPassword('isthisavalidpassword')).toBe(false);
  });