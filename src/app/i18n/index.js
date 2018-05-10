import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    'days': 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
    'months': 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
    'logout': 'Log out',
  },
  'cn': {
    'days': '日,一,二,三,四,五,六',
    'months': '一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月',
    'logout': '退出',
  }
}

export default new VueI18n({
  locale: 'cn',
  messages,
})

