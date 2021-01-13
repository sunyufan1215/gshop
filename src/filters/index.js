import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

Vue.filter('date-format', (value, formatStr='MMMM Do yyyy, h:mm:ss a') => {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})
