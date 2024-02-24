import makesData from '../constants/makes.json';
export const MAKES_SELECT = makesData.map(item => ({
  value: item,
  label: item,
}));

export const PRICE_SELECT = [];

for (let i = 30; i <= 300; i += 10) {
  PRICE_SELECT.push({ value: i, label: i });
}
