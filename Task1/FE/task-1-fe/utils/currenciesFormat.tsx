export const formatCurrency = (amount: number) => {
  if (amount)
    return amount.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};
