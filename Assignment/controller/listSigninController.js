window.listSigninController = function($scope, $http) {
    $scope.title = "Danh Sách Đăng Kí Khóa Học";
    // Call api

    // link api
    const apiKhoaHoc = "http://localhost:3000/formsignin";

    // Tham số $http (là giao thức để thực hiện việc call api)
    // $http.phương thức sử dụng(link api).then()
    $http.get(apiKhoaHoc).then(function(response) {
        console.log(response);

        // Truy cập vào dữ liệu
        console.log(response.data);

        if (response.status == 200) {
            $scope.listSignin = response.data;
        }
            
    })
}