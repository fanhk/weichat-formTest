//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    department:["通信工程学院","电子工程学院","计算机科学与技术学院","机电工程学院","物理与光电工程学院"],
    major:["通信工程","信息工程","电子信息工程","智能科学与技术","计算机科学与技术","软件工程"],
    class:["1603011","1603012","1603013","1603014"],
    name:'',
    number:'',
    index:0,
    index2:0, 
    index3:2,
    switchSta:true,
    satisify:0,
    hidden1:true,
    hidden3:true,
    hidden2:true
  },
  indexChange:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  index2Change:function(e){
    this.setData({
      index2:e.detail.value 
    })
  },
  index3Change:function(e){
    this.setData({
      index3:e.detail.value 
    })
  },
  switch1Change:function(e){
    this.setData({
      switchSta:e.detail.value
    })
    console.log(this.data.switchSta)
  },
  slider3change:function(e){
    console.log(e.detail.value)
    this.setData({
      satisify:e.detail.value
    })
  },
  formSubmit:function(){
    var that = this;
    that.setData({
      hidden1:false
    })
    wx.request({
      url: 'http://localhost:2100/',      //后端提供的接口
      method:'POST',
      data: {
        name:that.data.name,
        number:that.data.number,
        index:that.data.index,
        index2:that.data.index2, 
        index3:that.data.index3,
        switchSta:that.data.switchSta,
        satisify:that.data.satisify
      },
      header: {
        'content-type': 'application/json'    //定义数据的类型是json格式的
      },
      success (res) {     
        that.setData({
          hidden2:false,
          hidden1:true
        })
        setTimeout(function(){
          that.setData({
            hidden2:true
          })
        },2500)
        console.log(res.data)                 //成功之后的回调函数
      },
      fail(err){
        that.setData({
          hidden3:false,
          hidden1:true
        })
        setTimeout(function(){
          that.setData({
            hidden3:true
          })
        },2500)
      }
    })
  }
})
