'use client';

import MyDatePicker from '@ui/MyDatePicker';
import { useState } from 'react';
import AttendanceTable from '@dashboard/AttendanceTable';
import useDateString from 'hooks/dashboard/useDateString';

const Page = () => {
  const [date, setDate] = useState(new Date());
  const dateString = useDateString(date);

  return (
    <div className="p-8">
      <div className="max-w-[39rem] flex gap-8">
        <MyDatePicker value={date} setValue={setDate} name="Date" />
      </div>
      <AttendanceTable date={dateString} />
    </div>
  );
};

export default Page;
