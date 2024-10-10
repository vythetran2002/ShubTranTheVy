import { parse, isWithinInterval } from "date-fns";
import { RevenueDetail } from "../interface/Record.interface";

function isTimeInRange(time: string, start: string, end: string) {
  const timeToCheck = parse(time, "HH:mm:ss", new Date());
  const startTime = parse(start, "HH:mm:ss", new Date());
  const endTime = parse(end, "HH:mm:ss", new Date());

  return isWithinInterval(timeToCheck, { start: startTime, end: endTime });
}

export function filterRecordByTimeDuration(
  data: RevenueDetail[],
  start: string,
  end: string
) {
  let newData: RevenueDetail[] = [];

  data.forEach((record: RevenueDetail) => {
    const timeCheck = record.__EMPTY_1;
    if (isTimeInRange(timeCheck, start, end)) newData.push(record);
  });
  return newData;
}
