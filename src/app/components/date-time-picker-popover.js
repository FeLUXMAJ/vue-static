// <template>
import template from './date-time-picker-popover.html!text'
// </template>

export default {
  template,
  name: 'DateTimePickerPopover',
  data () {
    return {
      top: undefined, // 'year', 'year-month', 'year-month-only'
      center: undefined, // 'year', 'month', 'date', 'hour', 'minute', 'second'
      bottom: undefined, // 'time'
      year: this.value.getFullYear(),
      month: this.value.getMonth(),
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
    lang: function () {
      return 'cn'
    },
    days: function () {
      return this.$i18n ? this.$i18n.t('days', this.lang).split(',') : Array.from({ length: 7 }).map((_, i) => i + 1)
    },
    months: function () {
      return this.$i18n ? this.$i18n.t('months', this.lang).split(',') : Array.from({ length: 12 }).map((_, i) => i + 1)
    },
    weeks: function () {
      if (this.month !== 1) {
        return 5
      }
      const feb29 = new Date(this.year, 1, 29)
      return (feb29.getDate() === 29 || feb29.getDay() !== 0) ? 5 : 4
    },
    dates: function () {
      const ds = []
      const d1 = new Date(this.year, this.month, 0)
      const d2 = new Date(this.year, this.month + 1, 0)
      Array.from({ length: (d1.getDay() + 1) % 7 }).forEach((_, i) => {
        ds.unshift({ date: d1.getDate() - i, index: -i })
      })
      Array.from({ length: d2.getDate() }).forEach((_, i) => {
        ds.push({ date: i + 1, index: i + 1, currentMonth: true })
      })
      Array.from({ length: 6 - d2.getDay() }).forEach((_, i) => {
        ds.push({ date: i + 1, index: d2.getDate() + i + 1 })
      })
      return ds
    }
  },
  methods: {
    updateDecade: function (value) {
      this.year += Number(value)
    },
    selectYear: function () {
      if (this.center !== 'year') {
        this.year = this.value.getFullYear()
        this.top = 'decade'
        this.center = 'year'
        this.bottom = undefined
      } else {
        this.year = this.value.getFullYear()
        this.reset()
      }
    },
    selectedYear: function (event) {
      this.year = Number(event.target.innerText)
      if (this.mode === 'year') {
        const newDate = new Date(this.value)
        newDate.setFullYear(this.year)
        this.input(newDate)
      } else {
        this.reset()
      }
    },
    selectMonth: function () {
      if (this.center !== 'month') {
        this.center = 'month'
        this.bottom = undefined
      } else {
        this.reset()
      }
    },
    selectedMonth: function () {
      const newDate = new Date(this.value)
      this.month = this.months.indexOf(event.target.innerText)
      if (this.mode === 'year-month') {
        newDate.setMonth(this.month)
        this.input(newDate)
      } else {
        this.reset()
      }
    },
    updateMonth: function (value) {
      this.month += Number(value)
      while (this.month > 11) {
        this.year += 1
        this.month -= 12
      }
      while (this.month < 0) {
        this.year -= 1
        this.month += 12
      }
      if (this.mode === 'year-month') {
        const newDate = new Date(this.value)
        newDate.setMonth(this.month)
        this.input(newDate)
      }
    },
    selectedDate: function (event) {
      const value = Number(event.target.getAttribute('index'))
      const newDate = new Date(this.year, this.month, value, this.value.getHours(), this.value.getMinutes(), this.value.getSeconds())
      this.input(newDate)
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
      } else if (this.mode === 'year-month') {
        this.top = 'year-month-only'
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

