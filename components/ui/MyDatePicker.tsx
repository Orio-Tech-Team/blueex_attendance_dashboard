import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
  value: any;
  setValue: any;
  name: string;
  disabled?: boolean;
}

export default function MyDatePicker({
  value,
  setValue,
  name,
  disabled = false,
}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={name}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
