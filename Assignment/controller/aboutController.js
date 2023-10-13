window.aboutController = function($scope, $http, $location) {
    $scope.titles = "Đăng Kí Khóa Học";

    $scope.signinKhoaHoc = function() {
        // link api
        const apiKhoaHoc = "http://localhost:3000/formsignin";

        // tạo biến kiểm tra
        // let check = true;

        // // kiểm tra từng trường dữ liệu
        // $scope.kiemtra = {
        //     name: false,
        //     email: false,
        //     phone: false,
        //     date: false,
        // }

        // // Kiểm tra dữ liệu
        // if ($scope.formsignin || $scope.formsignin.name){
        //     $scope.kiemtra.name = true;
        //     check = false;
        // }
        // if ($scope.formsignin || $scope.formsignin.email){
        //     $scope.kiemtra.email = true;
        //     check = false;
        // }
        // if ($scope.formsignin || $scope.formsignin.phone){
        //     $scope.kiemtra.phone = true;
        //     check = false;
        // }
        // if ($scope.formsignin || $scope.formsignin.date){
        //     $scope.kiemtra.date = true;
        //     check = false;
        // }
        // if (check) {
        //     // Dữ liệu nhập từ ô input
            
        // }
        let newSignin = {
                ten: $scope.formsignin.name,
                Email: $scope.formsignin.email,
                SDT: $scope.formsignin.phone,
                gioitinh: $scope.formsignin.sex,
                ngaysinh: $scope.formsignin.date,
                khoahoc: $scope.formsignin.course,
                ghichu: $scope.formsignin.note
            }
            $http.post(
                apiKhoaHoc,
                newSignin
            ).then(function(response) {
                console.log(response);
                if (response.status == 201) {
                    alert("Đăng Kí Thành Công");
                    $location.path('/listSignin');
                }
                else {
                    alert("Đăng Kí Thất Bại");
                }
            })
    }
}