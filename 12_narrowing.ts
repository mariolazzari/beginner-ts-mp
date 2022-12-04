// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
type Amount = number | { amount: number };

const coerceAmount = (amount: Amount): number => {
  if (typeof amount === "object") {
    return amount.amount;
  }
  return amount;
};

coerceAmount(20);
coerceAmount({ amount: 20 });
