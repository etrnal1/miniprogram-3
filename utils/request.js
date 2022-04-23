function request(params,isHeader=false){
    return  new Promise((resolve,reject)=>{     
      wx.request({
          ...params,
          url:params.url,
          success:(res)=>{
             console.log(res) 
          }
      })
    } )
}  