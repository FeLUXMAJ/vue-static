// <template>
import template from './date-time-picker-demo.html!text'
// </template>

import DateTimePicker from './date-time-picker'
export default {
  template,
  name: 'DateTimePickerDemo',
  components: {
    DateTimePicker
  },
  data () {
    return {
      d: new Date()
    }
  },
  methods: {
    updateDate: function (value) {
      this.d = value
    }
  }
}

// <style>
import './date-time-picker-demo.css!css'
// </style>

