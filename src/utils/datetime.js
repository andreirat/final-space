import { timeService } from 'services';
import { translate } from './index';

const getBookingTime = datetime => {
  return timeService.utc(timeService(datetime)).isToday()
    ? `${translate('datetime.today', true)} ${translate(
        'datetime.at',
      )} ${timeService.utc(timeService(datetime)).format('HH:mm')}`
    : `${timeService
        .utc(timeService(datetime))
        .format('MMM D, YYYY')} ${getBookingHour(datetime)}`;
};

const getBookingHour = datetime => {
  return `${translate('datetime.at')} ${timeService
    .utc(timeService(datetime))
    .format('H:mm')}`;
};

const isDateToday = date => {
  return timeService.utc(timeService(date)).isToday();
};

export { getBookingTime, getBookingHour, isDateToday };
