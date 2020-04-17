/*
 * @Description: mixin
 * @Author: 
 * @Date: 2020-03-11 17:00:00
 * @LastEditors  : 
 * @LastEditTime : 2020-03-11 17:00:00
 */

const mixin = {
  data() {
    return {
      pageShow: false 
    }
  },
  methods: {
    showToast(text,duration = 0) {
      this.$toast.loading({
        duration: duration,
        message: text,
        forbidClick: true,
        loadingType: 'spinner'
      })
    },
    clearToast() {
      this.pageShow = true
      this.$toast.clear()
    }
  }
}

export default mixin
