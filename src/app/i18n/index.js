import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    'days': 'Mon,Tue,Wed,Thu,Fri,Sat,Sun',
    'months': 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
  },
  'cn': {
    'days': '一,二,三,四,五,六,日',
    'months': '一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月',
  }
}

export default new VueI18n({
  locale: 'cn',
  messages,
})

