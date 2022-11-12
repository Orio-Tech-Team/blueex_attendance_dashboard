import { secondsToTime } from 'shared/utils/date_time';

class AttendanceModel {
  employeeNumber: string;
  employeeName: string;
  attendanceDate: string;
  inTime: string;
  outTime: string;
  workingHour: string;
  type: string;
  shift: string;

  constructor(json: any) {
    this.employeeNumber = json.employee_number;
    this.employeeName = json.employee_name;
    this.attendanceDate = json.attendance_date;
    this.inTime = json.intime;
    this.outTime = json.outtime;
    this.workingHour = secondsToTime(json.working_hours);
    this.type = json.type;
    this.shift = json.shift;
  }
}

export default AttendanceModel;
