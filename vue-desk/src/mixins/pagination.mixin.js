import _ from 'lodash'

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 5,
      pageCount: 0,
      serverItems: [],
      pageItems: []
    }
  },
  methods: {
    setupPagination(serverItems) {
      this.serverItems = _.chunk(serverItems, this.pageSize)
      this.pageCount = _.size(this.serverItems)
      this.items = this.serverItems[this.page - 1] 
    },
    nextPageHandler(page) {
      this.items = this.serverItems[page - 1] 
    }
  }
}
