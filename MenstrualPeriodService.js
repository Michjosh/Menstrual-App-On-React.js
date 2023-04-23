import { format, parse } from 'date-fns';

export default class MenstrualPeriodService {
  static calculateNextPeriodDate(lastPeriodDate, cycleLength, periodLength) {
    const date = parse(lastPeriodDate, 'yyyy-MM-dd', new Date());
    const nextPeriodDate = format(date.setDate(date.getDate() + cycleLength - periodLength), 'yyyy-MM-dd');
    return nextPeriodDate;
  }

  static getEstimatedPeriodDates(nextPeriodDate, cycleLength, periodLength) {
    const date = parse(nextPeriodDate, 'yyyy-MM-dd', new Date());

    const estimatedPeriodDates = [];
    for (let i = 0; i < 6; i++) {
      date.setDate(date.getDate() + cycleLength);
      estimatedPeriodDates.push(format(date, 'yyyy-MM-dd'));
    }

    return estimatedPeriodDates;
  }
}
