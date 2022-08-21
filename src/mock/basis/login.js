/******************
 *基础-登录-mock
 *****************/



export default {

    /**
     *基础-登录
     *@param：{
         email:String,
         password:String
     } 
     *@returns：Promise {<pending>}
     **/
    'post|login': option => {
        const { email, password } = JSON.parse(option.body);
        if (email === "123@qq.com" && password === "123@qq.com") {
            return {
                "data": {
                    "id": 500,
                    "rid": 0,
                    "username": "admin",
                    "email": "123@qq.com",
                    "password": "123@qq.com",
                    "birthday": "",
                    "phone": "",
                    "sex": "",
                    "token": "32546=-0876543213456789uytfdsertyuil"
                },
                "meta": {
                    "msg": "登录成功",
                    "status": 1
                }
            }
        }
        else {
            return {
                data: {}
                ,
                "meta": {
                    "msg": "邮箱或密码错误,邮箱:123@qq.com 密码:123@qq.com",
                    "status": 0
                }
            }
        }

    }
}