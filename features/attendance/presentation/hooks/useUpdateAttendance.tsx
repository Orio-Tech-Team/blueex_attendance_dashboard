import UpdateAttendanceParams from 'features/attendance/data/params/update_attendance_params';
import AttendanceRepository from 'features/attendance/domain/repository/attendance_repository';
import { useState } from 'react';

const useUpdateAttendance = () => {
  const attendanceRepository = new AttendanceRepository();
  const [isLoading, setIsLoading] = useState(false);

  const updateAttendance = async (params: UpdateAttendanceParams) => {
    setIsLoading(true);
    const res: boolean = await attendanceRepository.updateAttendance(params);
    setIsLoading(false);
    return res;
  };

  return { updateAttendance, isLoading };
};

export default useUpdateAttendance;
