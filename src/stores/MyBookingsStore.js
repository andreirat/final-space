import create from 'zustand';
import * as bookingsAPI from 'api/bookings';
import { log } from 'utils/store';
import { immer } from 'utils/store';
import { timeService } from 'services';

export const getLocalInUTC = date =>
  timeService.utc(date.format('YYYY-MM-DDTHH:mm:ss'));

const filterBookings = bookings => {
  const now = getLocalInUTC(timeService());

  let futureBookings = bookings.filter(booking => {
    return (
      timeService.utc(booking.start_date).isAfter(now) &&
      booking.status !== 'canceled'
    );
  });

  let pastBookings = bookings.filter(booking => {
    return (
      timeService.utc(booking.start_date).isSameOrBefore(now) ||
      booking.status === 'canceled'
    );
  });

  let canceledBookings = bookings.filter(
    booking => booking.status === 'canceled',
  );

  // sort bookings
  futureBookings = futureBookings.sort((a, b) => {
    return (
      timeService.utc(a.start_date).toDate() -
      timeService.utc(b.start_date).toDate()
    );
  });

  pastBookings = pastBookings.sort((a, b) => {
    return (
      timeService.utc(b.start_date).toDate() -
      timeService.utc(a.start_date).toDate()
    );
  });

  return { futureBookings, pastBookings, canceledBookings };
};

export const myBookingsStore = create(
  log(
    immer(set => ({
      futureBookings: [],
      pastBookings: [],
      canceledBookings: [],
      loading: false,
      fetching: false,
      fetch: async () => {
        set({ loading: true });
        bookingsAPI.getMyBookings().then(response => {
          const { futureBookings, pastBookings, canceledBookings } =
            filterBookings(response.data);
          set({
            futureBookings,
            pastBookings,
            canceledBookings,
            loading: false,
          });
        });
      },
      refresh: async () => {
        set({ fetching: true });
        bookingsAPI.getMyBookings().then(response => {
          const { futureBookings, pastBookings, canceledBookings } =
            filterBookings(response.data);
          set({
            futureBookings,
            pastBookings,
            canceledBookings,
            fetching: false,
          });
        });
      },
    })),
  ),
);
