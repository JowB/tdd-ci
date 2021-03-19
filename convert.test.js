const { convertNumber } = require('./index');

it('should convert 1 to I', () => {
    expect(convertNumber(1)).toBe('I');
});
it('should convert I to 1', () => {
    expect(convertNumber('I')).toBe(1);
});

it('should convert 2 to II', () => {
    expect(convertNumber(2)).toBe('II');
});
it('should convert II to 2', () => {
    expect(convertNumber('II')).toBe(2);
});

it('should convert 3 to III', () => {
    expect(convertNumber(3)).toBe('III');
});
it('should convert III to 3', () => {
    expect(convertNumber('III')).toBe(3);
});

it('should convert 4 to IV', () => {
    expect(convertNumber(4)).toBe('IV');
});
it('should convert IV to 4', () => {
    expect(convertNumber('IV')).toBe(4);
});

it('should convert 5 to V', () => {
    expect(convertNumber(5)).toBe('V');
});
it('should convert V to 5', () => {
    expect(convertNumber('V')).toBe(5);
});

it('should convert 6 to VI', () => {
    expect(convertNumber(6)).toBe('VI');
});
it('should convert VI to 6', () => {
    expect(convertNumber('VI')).toBe(6);
});

it('should convert 7 to VII', () => {
    expect(convertNumber(7)).toBe('VII');
});
it('should convert VII to 7', () => {
    expect(convertNumber('VII')).toBe(7);
});

it('should convert 8 to VIII', () => {
    expect(convertNumber(8)).toBe('VIII');
});
it('should convert VIII to 8', () => {
    expect(convertNumber('VIII')).toBe(8);
});

it('should convert 9 to IX', () => {
    expect(convertNumber(9)).toBe('IX');
});
it('should convert IX to 9', () => {
    expect(convertNumber('IX')).toBe(9);
});

it('should convert 10 to X', () => {
    expect(convertNumber(10)).toBe('X');
});
it('should convert X to 10', () => {
    expect(convertNumber('X')).toBe(10);
});
