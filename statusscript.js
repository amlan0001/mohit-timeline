(function () {
    var myapp = angular.module("myapp1", []);
    //Controller 1


    var question =
        [
            { id: 1, name: "1programming fundamental", op1: "31-Jan-2016", op2: "Completed",status:"approved" },
            { id: 2, name: "2software enginerring", op1: "31-Jan-2016", op2: "Completed",status:"approved" },
            { id: 3, name: "3oops", op1: "31-Jan-2016", op2: "InProgress", status: "pending" },
            { id: 4, name: "4kya dekh raha hai", op1: "31-Jan-2016", op2: "Completed", status: "approved" },
            { id: 5, name: "5chal be", op1: "31-Jan-2016", op2: "InProgress", status: "pending" },
            { id: 6, name: "6programming fundamental", op1: "31-Jan-2016", op2: "InProgress", status: "pending" },
            { id: 7, name: "7software enginerring", op1: "31-Jan-2016", op2: "Completed", status: "approved" },
            { id: 8, name: "8oops", op1: "31-Jan-2016", op2: "InProgress", status: "pending" },
            { id: 9, name: "9kya dekh raha hai", op1: "31-Jan-2016", op2: "Completed", status: "pending" },
            { id: 10, name: "10chal be", op1: "31-Jan-2016", op2: "InProgress", status: "approved" },
            //{ id: 5, name: "Which of the following function sets first n characters of a string to a given character?", op1: "strinit()", op2: "Chicago", op3: "Washington", op4: "La", ans: "Washington" },

        ];


    //timeline2
    myapp.controller("mycheck", function ($scope, $location, $anchorScroll) {
        $scope.next = function () {
            $scope.count += 2;
            if ($scope.count > 9) {


                expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();

            }
            $scope.hashval = $location.hash($scope.count);

            // call $anchorScroll()
            $anchorScroll();
        }
        $scope.alert_display = function (name, op)
        {
            $scope.named = name;
            $scope.ops = op;
        }

        $scope.question = question;
        $scope.named = "";
        $scope.ops = "";
        $scope.count = 0;

    });
    myapp.controller("mycheck1", function ($scope, $location, $anchorScroll) {
        $scope.next = function () {
            $scope.count += 2;
            if ($scope.count > 9) {


                expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();

            }
            $scope.hashval = $location.hash($scope.count);

            // call $anchorScroll()
            $anchorScroll();
        }
        var quest = [];
        for (var i = 0; i < question.length; i++) {

            if (question[i].status == "approved") {
                quest.push(question[i]);
            }

        }


        $scope.question = quest;
        $scope.count = 0;

    });

    myapp.controller("mycheck2", function ($scope, $location, $anchorScroll) {
        $scope.next = function () {
            $scope.count += 2;
            if ($scope.count > 9) {


                expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();

            }
            $scope.hashval = $location.hash($scope.count);

            // call $anchorScroll()
            $anchorScroll();
        }
        
        var quest = [];
        for (var i = 0; i < question.length; i++) {

            if (question[i].status == "pending") {
                quest.push(question[i]);
            }

        }


        $scope.question = quest;

        $scope.count = 0;

    });
}());