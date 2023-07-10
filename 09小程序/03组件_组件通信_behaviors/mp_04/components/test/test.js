// components/test/test.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 第一种方式：简化的方式
    // max: Number
    // 第二种方式：完整的定义方式
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件处理函数
    addCount() {
      if (this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })

      this._showCount()
    },
    _showCount() {
      wx.showToast({
        title: 'count是' + this.data.count,
        icon: 'none'
      })
    },
    showInfo() {
      console.log(this.data)
      console.log(this.properties)
      console.log(this.data === this.properties)
    }
  }
})
