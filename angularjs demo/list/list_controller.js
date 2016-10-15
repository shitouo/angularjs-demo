/**
 * Created by kaimuguan on 2016/10/10.
 */
(function () {
    angular.module("s1.list",["s1.dataService"])
        .controller("listController",function ($scope,dataService) {
            var data = $scope.data = {};
            var actions = $scope.actions = {};
            //数据
            data.list = dataService.getList();
            data.error = false;
            data.selecMode = null;
            data.newGuest = {
                "name" : "",
                "tel" : ""
            };
            //行为
            //新增
            actions.invite = function () {
                if (!data.newGuest.name || !data.newGuest.tel){
                    data.error = true;
                    return;
                };
                data.list.push({
                    "name" : data.newGuest.name,
                    "tel" : data.newGuest.tel,
                    "state" : "未确认"
                })
                data.error = false;
                data.newGuest = {};
            };
            //确认或者拒绝
            actions.setState = function (guest, state) {
                guest.state = state;
            };
            //移除
            actions.remove = function (guest) {
                var index = data.list.indexOf(guest);
                data.list.splice(index,1);
            };
        })
})()
