import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';
import BookingCard from 'components/Cards/BookingCard';
import EmptyBookingList from 'components/EmptyStates/EmptyBookingList';

const BookingsList = ({
  headerComponent,
  onScroll,
  data,
  onItemPress,
  refreshing,
  onRefresh,
  navigation,
}) => (
  <FlatList
    data={data}
    onScroll={onScroll}
    style={styles.list}
    refreshing={refreshing}
    onRefresh={onRefresh}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.container}
    renderItem={({ item }) => (
      <BookingCard
        booking={item}
        key={item.id}
        onPress={() => onItemPress(item)}
      />
    )}
    ListHeaderComponent={headerComponent}
    ListEmptyComponent={<EmptyBookingList navigation={navigation} />}
  />
);

export default BookingsList;
