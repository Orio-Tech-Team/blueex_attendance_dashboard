'use client';

import MyDatePicker from '@ui/MyDatePicker';
import { useState } from 'react';
import AttendanceTable from 'features/attendance/presentation/components/AttendanceTable';
import { dateToString } from 'shared/utils/date_time';

const Page = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-8">
      <div className="max-w-[39rem] flex gap-8">
        <MyDatePicker value={date} setValue={setDate} name="Date" />
      </div>
      <AttendanceTable date={dateToString(new Date(date))} />
    </div>
  );
};

export default Page;
