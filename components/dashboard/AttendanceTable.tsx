'use client';

import { useEffect, useState } from 'react';
import Axios from 'shared/network/network';
import ModeIcon from '@mui/icons-material/Mode';

import { secondsToTime } from 'shared/utils/date_time';
import { useRouter } from 'next/navigation';
import MyTable from '@ui/MyTable';

const columns = [
  'Employee #',
  'Employee Name',
  'Attendance Date',
  'In Time',
  'Out Time',
  'Working Hours',
  'Attendance Type',
  'Shift',
  'Action',
];

interface Props {
  date: string;
}

const AttendanceTable = ({ date }: Props) => {
  const [data, setData] = useState<any[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const updateLocal = (item: any) => {
      localStorage.setItem(
        'data',
        JSON.stringify({
          emp_id: item.employee_number,
          in_time: item.intime,
          out_time: item.outtime,
          attendance_date: item.attendance_date,
        }),
      );
      router.push('/dashboard/add-attendance?update=true');
    };

    const fetchAttendance = async () => {
      console.log('from fetch attendance');
      setIsLoading(true);
      setData([]);
      const res = await Axios.fetch({
        method: 'POST',
        url: 'attendance-app/attendance/getattendancedata',
        data: {
          from_date: date,
          to_date: date,
        },
      });

      if (res.status == 200 || res.status == 201) {
        let newData: any[] = [];
        console.log(res);
        res.data.forEach((item: any) => {
          const mhworktime = secondsToTime(item.working_hours);
          return newData.push([
            item.employee_number,
            item.employee_name,
            item.attendance_date.split('T')[0],
            item.intime,
            item.outtime,
            mhworktime,
            item.type,
            item.shift,
            <ModeIcon
              key={item.employee_number}
              className="cursor-pointer"
              onClick={() => updateLocal(item)}
            />,
          ]);
        });

        setData(newData);
      }
      setIsLoading(false);
    };

    fetchAttendance();
  }, [date]);

  return (
    <>
      <MyTable isLoading={isLoading} data={data} columns={columns} />
    </>
  );
};

export default AttendanceTable;
