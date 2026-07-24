const round = (value: number, decimals: number = 0): number => {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

const toFixedNumber = (value: number, digits: number = 2): number => {
  return parseFloat(value.toFixed(digits));
};

const getPercentageOf = (value: number, total: number): number => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};

const calculateTax = (price: number, taxPercent: number): number => {
  return (price * taxPercent) / 100;
};

const calculateGrandTotal = (price: number, taxPercent: number): number => {
  return price + calculateTax(price, taxPercent);
};

const isOdd = (value: number): boolean => {
  return value % 2 !== 0;
};

const isEven = (value: number): boolean => {
  return value % 2 === 0;
};

export {
  round,
  clamp,
  isInRange,
  toFixedNumber,
  getPercentageOf,
  calculateDiscount,
  calculateTax,
  calculateGrandTotal,
  isOdd,
  isEven,
};
