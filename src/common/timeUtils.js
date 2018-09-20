export const diffTimeInSeconds = timeUtc => {
  return parseInt((new Date(timeUtc).getTime() - Date.now()) / 1000);
};

export const displayTimeDiff = timeDiffInSeconds => {
  let minutes = 0,
    seconds;
  const _secondsABS = Math.abs(timeDiffInSeconds);
  if (_secondsABS >= 60) {
    minutes = parseInt(_secondsABS / 60);
    seconds = _secondsABS % 60;
  } else {
    seconds = _secondsABS;
  }
  return `${timeDiffInSeconds < 0 ? "-" : ""}${minutes ? minutes + "m" : ""} ${
    seconds ? seconds + "s" : ""
  }`;
};
