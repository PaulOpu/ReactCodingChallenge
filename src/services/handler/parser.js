import moment from 'moment';


export function SetDateFormat(date, inputFormat, outputFormat) {
    const newDate = moment(date,inputFormat).format(outputFormat);
    return newDate;
  }