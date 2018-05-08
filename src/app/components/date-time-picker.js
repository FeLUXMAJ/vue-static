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
      value: new Date(),
    }
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  methods: {
    popover: function () {
      this.value = new Date()
    },
    update: function (value) {
      this.value = value
    }
  },
  computed: {
    text () {
      return utils.formatDate(this.value, this.format)
    }
  }
}

// <style>
import './date-time-picker.css!css'
// </style>

