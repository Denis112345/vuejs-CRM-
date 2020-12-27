import localizeFilter from '@/filters/locallize.filter'

export default {
  install(Vue) {
    Vue.prototype.$title = function(titleKey) {
      const appName = 'AuthorCite'
      
      return `${localizeFilter(titleKey)} | ${appName}`
    }
  }
}
