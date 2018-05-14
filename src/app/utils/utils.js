import moment from 'moment'
import axios from 'axios'

export function formatDate(value, format) {
  if (!(value instanceof Date) || JSON.stringify(value) === 'null') {
    return 'Invalid Date'
  }
  return moment(value).format(format)
}

export function localUrl(uri) {
  return window.location.origin + window.location.pathname + uri
}

export function apiGet(url) {
  return new Promise((resolve, reject) => {
    const r = {
      method: 'get',
      url,
    }
    axios.request(r).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

