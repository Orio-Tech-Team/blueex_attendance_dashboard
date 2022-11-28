import { AxiosResponse } from 'axios';
import Axios from 'shared/network/network';

class UserDataSource {
  login = async (date: String): Promise<AxiosResponse> => {
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
}

export default UserDataSource;
