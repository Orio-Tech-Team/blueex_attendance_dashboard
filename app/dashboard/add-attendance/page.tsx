'use client';

import { Button, TextField } from '@mui/material';
import MyDatePicker from '@ui/MyDatePicker';
import MyTimePicker from '@ui/MyTimePicker';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Axios from 'shared/network/network';
import {
  dateToString,
  stringTimeToDate,
  timeToString,
} from 'shared/utils/date_time';
import MySnackbar from '@ui/MySnackbar';

const Page = () => {
  const [message, setMessage] = useState('Add');
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [empNo, setEmpNo] = useState('');
  const [date, setDate] = useState(new Date());
  const [inTime, setInTime] = useState(new Date());
  const [outTime, setOutTime] = useState(new Date());

  const searchParams = useSearchParams();
  const update = searchParams.get('update');

  useEffect(() => {
    if (update) {
      setMessage('Update');

      const localData: any = JSON.parse(localStorage.getItem('data')!);
      setEmpNo(localData.emp_id);
      setDate(new Date(Date.parse(localData.attendance_date)));
      setInTime(stringTimeToDate(localData.in_time));
      setOutTime(stringTimeToDate(localData.out_time));
    } else {
      setMessage('Add');

      setEmpNo('');
      setDate(new Date());
      setInTime(new Date());
      setOutTime(new Date());
    }
  }, [update]);

  const updateAttendance = async () => {
    const res = await Axios.fetch({
      method: 'POST',
      url: 'attendance-app/attendance/manual',
      data: {
        emp_id: empNo,
        date: dateToString(date),
        in_time: timeToString(new Date(inTime)),
        out_time: timeToString(new Date(outTime)),
      },
    });
    res.status == 200 || res.status == 201
      ? setSnackbarMessage(
          `Attendance ${message == 'Add' ? 'added' : 'updated'} successfully`,
        )
      : setSnackbarMessage('Something went wrong');

    setSnackbar(true);
  };

  return (
    <div className="flex flex-col gap-4 p-8 max-w-[35rem]">
      <h2>{message} Attendance</h2>
      <TextField
        label="Employee ID"
        variant="outlined"
        value={empNo}
        onChange={(e) => setEmpNo(e.target.value)}
        disabled={message == 'Update'}
      />
      <MyDatePicker
        value={date}
        setValue={setDate}
        name="Date"
        disabled={message == 'Update'}
      />
      <MyTimePicker value={inTime} setValue={setInTime} name="In Time" />
      <MyTimePicker value={outTime} setValue={setOutTime} name="Out Time" />
      <Button
        variant="contained"
        type="submit"
        className="h-[3.2rem] bg-blue-500"
        onClick={updateAttendance}
      >
        {message} Attendance
      </Button>
      <MySnackbar
        open={snackbar}
        setOpen={setSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Page;
