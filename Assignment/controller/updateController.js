window.updateController = function ($scope, $routeParams, $http, $location) {
    $scope.title = "Sửa thông tin khoa học";

    // Lấy id của khoa học
    let courseID = $routeParams.id;

    // Link API (sửa endpoint tương ứng với khoa học)
    const apiCourse = "http://localhost:3000/formsignin";

    // Hiển thị thông tin chi tiết của khoa học
    $http.get(
        `${apiCourse}/${courseID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.course = {
                subject: response.data.subject,
                time: response.data.time,
                teacher: response.data.teacher,
                sdt: response.data.sdt,
                email: response.data.email,
                mota: response.data.mota,
            }
        }
    })

    // Thực hiện việc chỉnh sửa thông tin
    $scope.sua = function () {

        // Tạo 1 giá trị để kiểm tra
        let flag = true;

        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            subject: false,
            time: false,
            teacher: false,
            img: false,
        }

        // Kiểm tra giá trị
        if (!$scope.course || !$scope.course.subject) {
            flag = false;
            $scope.kiemTra.subject = true;
        }
        if (!$scope.course || !$scope.course.time) {
            flag = false;
            $scope.kiemTra.time = true;
        }
        if (!$scope.course || !$scope.course.teacher) {
            flag = false;
            $scope.kiemTra.teacher = true;
        }

        if (flag) {
            // Lấy dữ liệu từ input
            let updateCourse = {
                subject: $scope.course.subject,
                time: $scope.course.time,
                teacher: $scope.course.teacher,
                email: $scope.course.email,
                sdt: $scope.course.sdt,
                mota: $scope.course.mota
            }
            $http.put(
                `${apiCourse}/${courseID}`, // Link API
                updateCourse  // Dữ liệu muốn thêm vào API
            ).then(function (response) {
                if (response.status == 200) {
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin");
        }
    }
}
