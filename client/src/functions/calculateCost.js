/* eslint-disable */
export const calculateCost = (price, tva) => {
  const totalCost = price * (1 + tva / 100);

  if (totalCost === 0) {
    return "Gratuit";
  }

  return `${totalCost.toFixed(2)} €`;
};
