// <template>
import template from './date-time-picker-popover.html!text'
// </template>

export default {
  template,
  name: 'DateTimePickerPopover',
  data () {
    return {
      top: undefined, // 'year', 'year-month'
      center: undefined, // 'year', 'month', 'date', 'hour', 'minute', 'second'
      bottom: undefined, // 'time'
      days: this.$i18n.t('days', this.lang).split(','),
      months: this.$i18n.t('months', this.lang).split(','),
      temp: this.value,
    }
  },
  props: {
    mode: {
      type: String,
      default: 'datetime', // 'year', 'year-month', 'date', 'datetime', 'time'
    },
    value: {
      type: Date,
      default: function () { return new Date() },
    }
  },
  computed: {
    lang () {
      return 'en'
    },
    weeks () {
      if (this.value.getMonth() !== 1) {
        return 5
      }
      const feb29 = new Date(this.value.getFullYear(), 1, 29)
      return (feb29.getDate() === 29 || feb29.getDay() !== 0) ? 5 : 4
    },
  },
  methods: {
    selectYear: function () {
      if (this.center !== 'year') {
        this.center = 'year'
      } else {
        this.reset()
      }
    },
    selectedYear: function (event) {
      const newDate = new Date(this.value)
      newDate.setFullYear(Number(event.target.innerText))
      this.input(newDate)
    },
    selectMonth: function () {
      if (this.center !== 'month') {
        this.center = 'month'
      } else {
        this.reset()
      }
    },
    selectedMonth: function () {
      const newDate = new Date(this.value)
      newDate.setMonth(this.months.indexOf(event.target.innerText))
      this.input(newDate)
    },
    selectedDate: function () {
      console.log('selectedDate')
      this.reset()
    },
    selectHour: function () {
      if (this.center !== 'hour') {
        this.top = undefined
        this.center = 'hour'
      } else {
        this.reset()
      }
    },
    selectedHour: function () {
      const newDate = new Date(this.value)
      newDate.setHours(Number(event.target.innerText))
      this.input(newDate)
    },
    selectMinute: function () {
      if (this.center !== 'minute') {
        this.top = undefined
        this.center = 'minute'
      } else {
        this.reset()
      }
    },
    selectedMinute: function () {
      const newDate = new Date(this.value)
      newDate.setMinutes(Number(event.target.innerText))
      this.input(newDate)
    },
    selectSecond: function () {
      if (this.center !== 'second') {
        this.top = undefined
        this.center = 'second'
      } else {
        this.reset()
      }
    },
    selectedSecond: function () {
      const newDate = new Date(this.value)
      newDate.setSeconds(Number(event.target.innerText))
      this.input(newDate)
    },
    input: function (newDate) {
      this.$emit('input', newDate)
      this.reset()
    },
    reset: function () {
      if (this.mode === 'year') {
        this.top = 'year'
      } else if (this.mode === 'time') {
        this.top = undefined
      } else {
        this.top = 'year-month'
      }

      if (this.mode === 'date' || this.mode === 'datetime') {
        this.center = 'date'
      } else {
        this.center = undefined
      }

      if (this.mode === 'datetime' || this.mode === 'time') {
        this.bottom = 'time'
      } else {
        this.bottom = undefined
      }
    }
  },
  mounted: function () {
    this.reset()
  }
}

// <style>
import './date-time-picker-popover.css!css'
// </style>

