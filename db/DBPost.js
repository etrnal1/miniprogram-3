var DBPost=function(){
    this.storageKeyName='postList';
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
    SetStorageSync:function(data){
        wx.SetStorageSync(this.storageKeyName,data)
    }
};
module.exports ={
    DBPost:DBPost
};