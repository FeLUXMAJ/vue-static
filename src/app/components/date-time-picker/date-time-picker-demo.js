// <template>
import template from './date-time-picker-demo.html!text'
// </template>

// <script>
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
// </script>

// <style>
import './date-time-picker-demo.css!css'
// </style>

