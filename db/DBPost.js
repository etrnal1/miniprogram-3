var DBPost=function(){
    this.storageKeyName='postList';
}
DBPost.prototype={
    getAllPostData:function(){
        var res=wx.getStorageSync(this.storageKeyName);
        if(!res){
            res=require('../data/data.js').postList;
            this.execSetStorageSync(res);
        }
        return res
    },
    execSetStorageSync:function(data){
        wx.execSetStorageSync(this.storageKeyName,data)
    }
};
module.exports ={
    DBPost:DBPost
};