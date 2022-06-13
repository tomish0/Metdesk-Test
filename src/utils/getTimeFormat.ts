import moment from 'moment';

// use the moment library to update the time into a more human readable format
// add the Z to tell the user that it is UTC 

export function getTimeFormat(time: string) {
  return moment(time).format('D-M-YYYY HH:mm') + 'Z';
}
