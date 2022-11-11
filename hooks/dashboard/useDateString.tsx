import { useState, useEffect } from 'react';
import { padTo2Digits } from 'shared/utils/date_time';

const useDateString = (date: Date) => {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const convertDateToString = () => {
      const currentDate = new Date(date);

      setDateString(
        `${currentDate.getFullYear()}-${padTo2Digits(
          currentDate.getMonth() + 1,
        )}-${padTo2Digits(currentDate.getDate())}`,
      );
    };

    convertDateToString();
  }, [date]);

  return dateString;
};

export default useDateString;
