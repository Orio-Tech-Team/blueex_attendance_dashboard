const padTo2Digits = (num: any) => {
  return num.toString().padStart(2, '0');
};

const secondsToTime = (secs: any) => {
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
};

const dateToString = (date: Date): string =>
  `${date.getFullYear()}-${padTo2Digits(date.getMonth() + 1)}-${padTo2Digits(
    date.getDate(),
  )}`;

const timeToString = (time: Date): string =>
  `${padTo2Digits(time.getHours())}:${padTo2Digits(
    time.getMinutes(),
  )}:${padTo2Digits(time.getMinutes())}`;

const stringTimeToDate = (time: string): Date =>
  new Date(Date.parse(`2000-01-01T${time}.000Z`));

export {
  padTo2Digits,
  secondsToTime,
  dateToString,
  timeToString,
  stringTimeToDate,
};
