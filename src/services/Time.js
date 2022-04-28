import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

const locales = {
  de: () => import('dayjs/locale/de'),
  en: () => import('dayjs/locale/en'),
  ro: () => import('dayjs/locale/ro'),
  es: () => import('dayjs/locale/es'),
  hu: () => import('dayjs/locale/hu'),
  fr: () => import('dayjs/locale/fr'),
};

export function loadLocale(language) {
  locales[language]().then(() => dayjs.locale(language));
}

dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(isToday);
dayjs.extend(calendar);
dayjs.extend(updateLocale);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(utc);

dayjs.updateLocale('ro', {
  calendar: {
    lastDay: '[Ieri, ora] h:mm',
    sameDay: '[Astazi, ora ] h:mm ',
    nextDay: '[Maine la] h:mm',
    lastWeek: 'dddd [trecuta, ] [ora] h:mm',
    nextWeek: 'dddd, [ora] h:mm',
    sameElse: 'MMM D, YYYY [,ora] h:mm',
  },
});

export default dayjs;
