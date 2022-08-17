//es6的写法
class DBPost{
    constructor(postId){
        this.storageKeyName='postList';
        // 构造参数postId
        this.postId=this.postId;
       
    }
    test(postId){
        console.log('************-----')
        console.log(postId)
        console.log('************-----')
    }
        
      /**
      * 对应第一个图标转发功能
      * @returns 
      */
       collect(){
        console.log('这是收藏功能')
        this.updatePostData('collect')
    }
    updatePostData(category){

        var itemData=this.getPostItemById(1)
        var postData=itemData.data
        console.log('**----阅读状态-------')
        console.log(postData.collectionStatus)
        console.log('**----阅读数据-------')
        console.log(postData.readingNum)
        // return 1
        
        // console.log('*************')
        // console.log(itemData)
        // // console.log('**----单独数据-------')
        // // console.log(postData)
        // console.log('**----all数据-------')
        // console.log(allPostData)
        // console.log('*************')
        switch(category){
            case 'collect':
                //0
                if(!postData.collectionStatus){
                    postData.readingNum++;
                    postData.collectionStatus=true;
                }else{
                    postData.readingNum--;
                    postData.collectionStatus=false;
                }
                break;
            default:
                break;
        }
        //更新缓存数据
        
        
        var allPostData=this.getAllPostData();
        console.log('**----原始数据-------')
        console.log(allPostData)
        allPostData[1]=postData
        console.log('**----更新数据-------')
        console.log(allPostData)
        wx.clearStorage()
        this.execSetStorageSync(allPostData)
        
        

    }
    /**
     * 获取所有页面的数据
     * @returns 
     */
    getAllPostData(){
        var res=wx.getStorageSync(this.storageKeyName);
        if(!res){
            res=require('../data/data.js').postList; 
            this.execSetStorageSync(res) ;
        }
        console.log("数据为____"+res)
        return res;
    }
    getCommentData(){
        
        console.log('测试页面评论功能----————')
    }
    up(){
        var data=this.updatePostData('up');
        return data;
    }
   
    execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName,data);
    }
        /**
     * 根据id 获取文章信息
     * @returns 
     */
         getPostItemById(postId){
            var postsData=this.getAllPostData();
            var len=postsData.length;
            for(var i=0;i<len;i++){
                if(postsData[i].postId==postId){
                  
                    return {
                        index:i,
                        data:postsData[i]
                    }
                }
    
            }
        }
    // 得到全部信息
};
// 暴露接口给外部
export {DBPost};



// var DBPost=function(postId){
//     this.storageKeyName='postList';
//     this.postId=this.postId;

// }
// DBPost.prototype={
//     getAllPostData:function(){
//         var res=wx.getStorageSync(this.storageKeyName);
//         if(!res){
//             res=require('../data/data.js').postList;
//             this.SetS(res);
//         }
//         return res
//     },
//     getPostItemById(){
//         var postsData=this.getAllPostData();
//         var len=postsData.length;
//         for(var i=0;i<len;i++){
//             if(postsData[i].postId==this.postId){
//                 return {
//                     index:i,
//                     data:postsData[i]
//                 }
//             }

//         }
//     }
//     ,
//     SetS:function(data){
      
//         wx.SetStorageSync(this.storageKeyName,data)
//     }
// };
// module.exports ={
//     DBPost:DBPost,
// }