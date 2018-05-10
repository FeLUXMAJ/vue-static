// <template>
import template from './date-time-picker.html!text'
// </template>

import DateTimePickerPopover from './date-time-picker-popover'
import * as utils from '../utils/utils'

export default {
  template,
  name: 'DateTimePicker',
  components: {
    DateTimePickerPopover
  },
  data () {
    return {
      show: false
    }
  },
  props: {
    mode: {
      type: String, // 'year', 'year-month', 'date', 'datetime', 'time'
      default: 'datetime'
    },
    value: {
      type: Date,
      default: undefined,
    },
    format: {
      type: String,
      default: function () {
        switch (this.mode) {
          case 'year': return 'YYYY'
          case 'year-month': return 'YYYY-MM'
          case 'date': return 'YYYY-MM-DD'
          case 'datetime': return 'YYYY-MM-DD HH:mm:ss'
          case 'time': return 'HH:mm:ss'
          default: return 'YYYY-MM-DD HH:mm:ss'
        }
      }
    }
  },
  methods: {
    popover: function () {
      this.$emit('input', this.value || new Date())
      this.show = !this.show
    },
    update: function (value) {
      this.$emit('input', value)
      this.show = false
    },
    reset: function () {
      this.$emit('input', undefined)
      this.show = false
    },
    close: function (event) {
      if (!this.$el.contains(event.target)) {
        this.show = false
      }
    }
  },
  computed: {
    text: function () {
      return this.value ? utils.formatDate(this.value, this.format) : ''
    }
  },
  mounted () {
    document.addEventListener('click', this.close, true)
    this.$el.getElementsByTagName('form')[0].addEventListener('reset', this.reset, true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.close, true)
    this.$el.getElementsByTagName('form')[0].removeEventListener('reset', this.reset, true)
  }
}

// <style>
import './date-time-picker.css!css'
// </style>

