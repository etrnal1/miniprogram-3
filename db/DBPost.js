var DBPost=function(){
    this.storageKeyName='postList';
    this.postId=postId;
}
DBPost.prototype={
    getAllPostData:function(){
        var res=wx.getStorageSync(this.storageKeyName);
        if(!res){
            res=require('../data/data.js').postList;
            this.SetStorageSync(res);
        }
        return res
    },
    getPostItemById(){
        var postsData=this.getAllPostData();
        var len=postsData.length;
        for(var i=0;i<len;i++){
            if(postsData[i].postId==this.postId){
                return {
                    index:i,
                    data:postsData[i]
                }
            }

        }
    }
    ,
    SetStorageSync:function(data){
        wx.SetStorageSync(this.storageKeyName,data)
    }
};
module.exports ={
    DBPost:DBPost
};