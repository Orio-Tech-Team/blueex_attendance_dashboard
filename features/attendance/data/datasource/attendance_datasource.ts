import { AxiosResponse } from 'axios';
import UpdateAttendanceParams from 'features/attendance/data/params/update_attendance_params';
import Axios from 'shared/network/network';

class AttendanceDataSource {
  getAttendance = async (date: String): Promise<AxiosResponse> => {
    try {
      const res = await Axios.fetch({
        method: 'POST',
        url: 'attendance-app/attendance/getattendancedata',
        data: {
          from_date: date,
          to_date: date,
        },
      });
      return res;
    } catch (e) {
      throw e;
    }
  };

  updateAttendance = async (
    params: UpdateAttendanceParams,
  ): Promise<AxiosResponse> => {
    try {
      const res = await Axios.fetch({
        method: 'POST',
        url: 'attendance-app/attendance/manual',
        data: {
          emp_id: params.id,
          date: params.date,
          in_time: params.inTime,
          out_time: params.outTime,
        },
      });
      return res;
    } catch (e) {
      throw e;
    }
  };
}

export default AttendanceDataSource;
