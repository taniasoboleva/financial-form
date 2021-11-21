export const calculateSumm = (periods, summ, percentage) => {
  let listOfSummBody = [];
  let listOfPercentageBody = [];
  let bodyPaymentPerMonth = summ / periods.length;
  let percentAmountPerMonth = 0;
  for (let i = 0; i < periods.length; i++) {
    percentAmountPerMonth = summ * percentage * 12 * (30 / 365);
    summ = summ - bodyPaymentPerMonth;
    listOfSummBody.push(bodyPaymentPerMonth);
    listOfPercentageBody.push(percentAmountPerMonth);
  }
  return { listOfSummBody, listOfPercentageBody };
};

export const sumArrays = (...arrays) => {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const result = Array.from({ length: n });
  return result.map((_, i) =>
    arrays.map((xs) => xs[i] || 0).reduce((sum, x) => sum + x, 0)
  );
};

export const calculateTotalSumm = (totalListBody, totalListPercentage) => {
  const totalSumListBody = sumArrays.apply(this, totalListBody);
  const totalSumListPercentage = sumArrays.apply(this, totalListPercentage);
  return { totalSumListBody, totalSumListPercentage };
};
