import moment from 'moment';

/**
 * Transformation of a date from the inputFormat to the outputFormat.
 *
 * @param {date} date 
 * @param {inputFormat} string 
 * @param {outputFormat} string 
 * @public
 */
export function SetDateFormat(date, inputFormat, outputFormat) {
    const newDate = moment(date,inputFormat).format(outputFormat);
    return newDate;
  }