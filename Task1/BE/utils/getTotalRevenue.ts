import { RevenueDetail } from "../interface/Record.interface";

export const getTotalRevenue = (data: RevenueDetail[]) => {
  let total = 0;
  data.forEach((record: RevenueDetail) => {
    total += record.__EMPTY_7;
  });
  return total;
};
