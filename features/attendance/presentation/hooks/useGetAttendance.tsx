import AttendanceModel from 'features/attendance/domain/models/attendance_model';
import AttendanceRepository from 'features/attendance/domain/repository/attendance_repository';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import Chip from '@mui/material/Chip';

type chipTypes =
  | 'success'
  | 'warning'
  | 'error'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | undefined;

const chipType = (type: string): chipTypes => {
  if (type == 'Present') return 'success';
  if (type == 'Late') return 'warning';
  return 'error';
};

const useGetAttendance = (date: string) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[][]>([]);

  useEffect(() => {
    const attendanceRepository = new AttendanceRepository();

    const updateLocal = (item: any) => {
      localStorage.setItem(
        'data',
        JSON.stringify({
          emp_id: item.employeeNumber,
          in_time: item.inTime,
          out_time: item.outTime,
          attendance_date: item.attendanceDate,
        }),
      );
      router.push('/dashboard/add-attendance?update=true');
    };

    const getAttendance = async () => {
      setIsLoading(true);
      const res: AttendanceModel[] = await attendanceRepository.getAttendance(
        date,
      );
      const newData = res.map((item) => {
        const chipColor = chipType(item.type);
        return [
          item.employeeNumber,
          item.employeeName,
          item.attendanceDate,
          item.inTime,
          item.outTime,
          item.workingHour,
          <Chip
            key={item.employeeNumber}
            label={item.type}
            color={chipColor}
          />,
          item.shift,
          <ModeIcon
            key={item.employeeNumber}
            className="cursor-pointer"
            onClick={() => updateLocal(item)}
          />,
        ];
      });
      setData(newData);
      setIsLoading(false);
      return res;
    };

    getAttendance();
  }, [date, router]);

  return { data, isLoading };
};

export default useGetAttendance;
