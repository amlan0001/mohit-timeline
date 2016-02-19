(function () {
    var myapp = angular.module("myapp", []);
    //Controller 1


    var question =
        [
            { id: 1, name: "1programming fundamental", op1: "31-Jan-2016", op2: "Completed" },
            { id: 2, name: "2software enginerring", op1: "31-Jan-2016", op2: "Completed" },
            { id: 3, name: "3oops", op1: "31-Jan-2016", op2: "InProgress" },
            { id: 4, name: "4kya dekh raha hai", op1: "31-Jan-2016", op2: "Completed" },
            { id: 5, name: "5chal be", op1: "31-Jan-2016", op2: "InProgress" },
            { id: 6, name: "6programming fundamental", op1: "31-Jan-2016", op2: "InProgress" },
            { id: 7, name: "7software enginerring", op1: "31-Jan-2016", op2: "Completed" },
            { id: 8, name: "8oops", op1: "31-Jan-2016", op2: "InProgress" },
            { id: 9, name: "9kya dekh raha hai", op1: "31-Jan-2016", op2: "Completed" },
            { id: 10, name: "10chal be", op1: "31-Jan-2016", op2: "InProgress" },
            //{ id: 5, name: "Which of the following function sets first n characters of a string to a given character?", op1: "strinit()", op2: "Chicago", op3: "Washington", op4: "La", ans: "Washington" },

        ];


    myapp.controller("myctrl", function ($scope,$location,$anchorScroll) {
        $scope.next = function () {
            $scope.count +=2;
            if ($scope.count >9 ) {

               
                expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
                
            }
            $scope.hashval=$location.hash($scope.count);

            // call $anchorScroll()
            $anchorScroll();
        }
        
        $scope.question = question;
        $scope.count = 0;
        
    });
    //Controller 2
    myapp.controller("myctrl1", function ($scope, $location, $anchorScroll) {
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

            if (question[i].op2 == "Completed") {
                quest.push(question[i]);
            }

        }
        $scope.question = quest;
        $scope.count = 0;

    });
    //Controller 3
    myapp.controller("myctrl2", function ($scope, $location, $anchorScroll) {
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

            if (question[i].op2 == "InProgress") {
                quest.push(question[i]);
            }

        }

       
        $scope.question = quest;
        $scope.count = 0;

    });

    

}());