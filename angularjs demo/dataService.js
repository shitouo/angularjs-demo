/**
 * Created by kaimuguan on 2016/10/10.
 */
(function () {
    angular.module("s1.dataService",[])
        .factory("dataService",function () {
            var data = {};
            //写数据
            var list = [
                {
                    "name" : "张三",
                    "tel" : "13333333333",
                    "state" : "未确认"
                },
                {
                    "name" : "李四",
                    "tel" : "13444444444",
                    "state" : "未确认"
                },
                {
                    "name" : "王五",
                    "tel" : "13555555555",
                    "state" : "未确认"
                },
                {
                    "name" : "赵六",
                    "tel" : "13666666666",
                    "state" : "未确认"
                },
                {
                    "name" : "田七",
                    "tel" : "13777777777",
                    "state" : "未确认"
                },
                {
                    "name" : "张九",
                    "tel" : "13999999999",
                    "state" : "未确认"
                }
            ];
            var currentGuest = null;
            //先写方法
            //获取数据列表
            data.getList = function () {
                return list;
            };
            //通过tel获取当前嘉宾
            data.getGuestByTel = function (tel) {
                var newArr = list.filter(function (item) {
                    return item.tel == tel;
                })
                return newArr[0];
            };
            //设置当前嘉宾
            data.setCurrentGuset = function (guest) {
                currentGuest = guest;
            };
            //获取当前嘉宾
            data.getCurrentGuest = function () {
                return currentGuest;
            };
            return data;
        });
})()
