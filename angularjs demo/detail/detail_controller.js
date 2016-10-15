(function () {
    angular.module("s1.detail",["s1.dataService","ui.router"])
        .controller("detailController",function ($scope,dataService,$stateParams) {
            var data = $scope.data = {};
            data.guestInfo = dataService.getGuestByTel($stateParams.tel);
            dataService.setCurrentGuset(data.guestInfo);
        })
})()