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
    updatePostData(category){

        var itemData=this.getPostItemById(),
        postData=itemDataa.data,
        allPostData=this.getAllPostData();
        switch(category){
            case 'collect':
                if(!postData.collectionStatus){
                    postData.collectionNum++;
                    postData.collectionStatus=true;
                }else{
                    postData.collectionNum--;
                    postData.collectionStatus=false;
                }
                break;
            case 'up':
                if(!postData.upStatus){
                    postData.collectionNum++;
                    postData.upStatus=true;
                }else{
                    postData.collectionNum++;
                    postData.upStatus=false;
                }
                break;
                default:
                    break;
        }
        allPostData[itemData.index]=postData;
        this.execSetStorageSync(allPostData);
        return postData;

    }
    execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName,data);
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