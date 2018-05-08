import moment from 'moment'

export function formatDate(value, format) {
  if (!(value instanceof Date) || JSON.stringify(value) === 'null') {
    return 'Invalid Date'
  }
  return moment(value).format(format)
}
