# 开发者账号：13261630559
# 开发者密码：登陆密码
# API接口域名：http://122.237.103.224:9899/XXX（XXX代表具体接口，请结合下方文档）
# API对接文档：https://wkteam.cn/api-wen-dang2/
# 
#&acc
#http://域名地址/member/login
# rl = 'http://httpbin.org/post'
# d = {'key1': 'value1', 'key2': 'value2'}
# r = requests.post(url, data=d)
# print r.text
from ast import main
from email import header
from lib2to3.pytree import type_repr
import requests,json,sys,re

# 登录微信认证 返回认证密钥
def login():
    pass
    url ="http://122.237.103.224:9899/member/login"
    post_data={'account':'13261630559','password':'Woaini33279'}
    
    people=requests.post(url,json=post_data)
    print(people.text)
    success_message=people.text
    
    return success_message['data']['Authorization']
    
# 保存二维码  返回wId
def login_wx():
    url ="http://122.237.103.224:9899/iPadLogin"
    headers={"Content-Type":"application/json","Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzI2MTYzMDU1OSJ9.iEZQpFnXphfgy2CQki2e3ssfP4NIQABaftNGxAEO-cC33XjJrHowHXrVft9r9D-BuELt1sQwrFxWqVV63bxECw"}
    post_data={'proxy':1,"wcId":""}
    pass
    people=requests.post(url,headers=headers,json=post_data)
    # 转化为json 数据
    success_message=json.loads(people.text)
    print('---------------------返回信息')
    print(success_message)
    print(type(success_message))
    # 返回扫码图片 保存扫描图片报错
    r=requests.get(success_message['data']['qrCodeUrl'].split('?')[0])
    with open('wxx2.png','wb') as f:
        #final_img=img
        f.write(r.content)
        
   
    
    return success_message['data']['wId']
    
#login()
login_wx()
sys.exit()
#http://域名地址/simpleIPadLoginInfo

def login_pad():
    pass
    wId=login_wx()
    url ="http://122.237.103.224:9899/simpleIPadLoginInfo"
    print(url)
    headers={"Content-Type":"application/json","Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzI2MTYzMDU1OSJ9.iEZQpFnXphfgy2CQki2e3ssfP4NIQABaftNGxAEO-cC33XjJrHowHXrVft9r9D-BuELt1sQwrFxWqVV63bxECw"}    
    print('-----------------------获取的WId')
    print(wId)       
    post_data={"wId":wId}
    people=requests.post(url,headers=headers,json=post_data)
    print(people.text)



if __name__ == '__main__':
    #main()
        
    login_pad()
    try:
        success_message={"code":"1000","message":"处理成功","data":{"wId":"ba3319ed-4ed2-43f1-a888-9e7124c636b6","qrCodeUrl":"http://wxapii.oos-sccd.ctyunapi.cn/20220819/7efc70fc-844a-4c6b-9eac-7763bda1dec8_qrcode.png?AWSAccessKeyId=9e882e7187c38b431303&Expires=1661518437&Signature=gsqD1ixdssIszQJBTB%2BdhgIzOLQ%3D"}}
    
        print(success_message['data']['wId'])
        img= 'http://wxapii.oos-sccd.ctyunapi.cn/20220819/3fc02e10-6250-49d0-9dbb-584ebed41777_qrcode.png?AWSAccessKeyId=9e882e7187c38b431303&Expires=1661520357&Signature=VcvADYrQBnDiqu2Jk4ysp5H23r0%3D'
        final_img=img.split('?')[0]
        print('返回的图片信息为')
        print(final_img)
    except Exception as e:
        pass
        print(e)
   
   