// <template>
import template from './vue-good-table-demo.html!text'
// </template>

// <script>
import * as utils from '../../utils/utils'

export default {
  template,
  name: 'VueGoodTableDemo',
  data () {
    return {
      isFlat: false,
      table: []
    }
  },
  computed: {
    result: function () {
      if (!this.table) {
        return []
      }
      return this.table
    },
    columns: function () {
      const cols = []
      const stack = []
      this.result.forEach(row => {
        Object.keys(row).forEach(col => {
          stack.push({ label: col, field: col, child: row[col] })
        })
      })
      while (stack.length > 0) {
        const col = stack.shift()
        if (col.child === null || col.child === undefined) {
          // skip
        } else if (Array.isArray(col.child) || typeof col.child === 'object') {
          Object.keys(col.child).filter(k => isNaN(k)).forEach(k => {
            stack.unshift({
              label: col.label + '.' + k,
              field: col.field + '.' + k,
              child: col.child[k],
            })
          })
        } else {
          if (cols.findIndex(x => x.field === col.field) === -1) {
            cols.push({
              ...col,
              thClass: 'table-header',
              tdClass: 'table-cell',
              sortFn,
            })
          }
        }
      }
      return cols
    },
    flatResult: function () {
      return this.result.map(r => flatObject(r))
    },
    flatColumns: function () {
      const cols = []
      this.flatResult.forEach(r => {
        Object.keys(r).forEach(c => {
          if (cols.findIndex(col => col.field === c) === -1) {
            const col = {
              label: c.replace(/_{4}/g, '.'),
              field: c,
              thClass: 'table-header',
              tdClass: 'table-cell',
              sortFn,
            }
            cols.push(col)
          }
        })
      })
      return cols
    },
  },
  methods: {
    loadData: function () {
      utils.apiGet(utils.localUrl('/mock/vgt.json'))
        .then(table => {
          this.table = table
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}

function flatObject (obj) {
  const newObj = {}
  const stack = Object.keys(obj).map(k => {
    return { path: k, child: obj[k] }
  })
  while (stack.length > 0) {
    const r = stack.shift()
    if (r.child === null || r.child === undefined) {

    } else if (Array.isArray(r.child) || typeof r.child === 'object') {
      Object.keys(r.child).filter(k => isNaN(k)).forEach(k => stack.unshift({ path: r.path + '____' + k, child: r.child[k] }))
    } else {
      newObj[r.path] = r.child
    }
  }
  return newObj
}

function sortFn (x, y, col, rowX, rowY) {
  return (x < y ? -1 : (x > y ? 1 : 0))
}

// </script>

// <style>
import './vue-good-table-demo.css!css'
// </style>
