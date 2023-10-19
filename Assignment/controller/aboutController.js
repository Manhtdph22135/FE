window.aboutController = function($scope, $http, $location) {
    $scope.title = "Đăng Kí Khóa Học";

    $scope.signinKhoahoc = function() {
        // link api
        const apiFormKhoahoc = "http://localhost:3000/formsignin";

        /// Tạo biến kiểm tra
        let checks = true;

        // Kiểm tra dữ liệu
        $scope.check = {
            name: false,
            mail: false,
            phone: false,
            date: false,
        }

        // Kiểm tra dữ liệu
        if (!$scope.formsignin || !$scope.formsignin.name) {
            $scope.check.name = true;
            checks = false;
        }
            
        if (!$scope.formsignin || !$scope.formsignin.mail) {
            $scope.check.mail = true;
            checks = false;
        }
        if (!$scope.formsignin || !$scope.formsignin.phone) {
            $scope.check.phone = true;
            checks = false;
        }
        if (!$scope.formsignin || !$scope.formsignin.date) {
            $scope.check.date = true;
            checks = false;
        }

        if (checks) {
            let newKhoahoc = {
                ten: $scope.formsignin.name,
                Email: $scope.formsignin.mail,
                SDT: $scope.formsignin.phone,
                gioitinh: $scope.formsignin.sex,
                ngaysinh: $scope.formsignin.date,
                khoahoc: $scope.formsignin.course,
                ghichu: $scope.formsignin.note
            }

            $http.post(
                apiFormKhoahoc,
                newKhoahoc
            ).then(function(response) {
                console.log(response);
                if (response.status == 201) {
                    alert("Đăng ký thành công");
                    $location.path('home');
                }
            })
        }
        else{
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }
}
