var app = angular.module("myDiscuss", ['lazy-scroll']);
app.controller("TabController", function($scope) {

  $scope.tab=null;
  $scope.subTab = null;
  $scope.like=null;
  $scope.subLike=null;


  $scope.selectLike = function(setTab) {
    $scope.like= setTab;
  };
  $scope.selectSubLike = function (setTab) {
      $scope.subLike=setTab;
  }
  $scope.selectTab = function(setTab) {
    $scope.tab= setTab;
  };
  $scope.selectSubTab = function(setTab){
    $scope.subTab = setTab;
  };
  $scope.isSelected = function(checkTab){
    return $scope.tab === checkTab;
  };
  $scope.isSelectedSub = function(checkTab){
    return $scope.subTab === checkTab;
  };
  $scope.isSelectedLike = function(checkTab) {
    return $scope.like === checkTab;
  };
  $scope.isSelectedSubLike = function(checkTab){
    return $scope.subLike===checkTab;
  };
 $scope.increaseHelpful = function(object){
     object.helpful += 1;
     if(object.helpful>1)
     {
       object.helpful = 0;
     }
 };
 $scope.increaseReply = function(object){
   object.replyone +=1;
 }

});

// app.controller('TodoCtrl', function($scope, $http) {
//   $http.get('../sample.json')
//        .then(function(res){
//           $scope.todos = res.data;
//           $scope.lol = res.data[0].answers[0].replies;
//         });
//
//         $scope.addComment = function(){
//         $scope.todos.push({ answers.text:$scope.comment.text});
//     }
// });


app.controller('TodoCtrl', function($scope, $http){
    $http.get('../sample.json').success(function (data){
        $scope.todos = data;
    });
    $scope.comment={
        text:null
    };
    $scope.answer =[];
    $scope.addEmp = function(){

      // var value = $scope.todos.answers.text;
      // $scope.todos.forEach(function(){

        $scope.answer.push({text:$scope.comment.text});
        $scope.todos.push($scope.answer);
      // });
    }

    $scope.getTotalEmployees    =   function(){
        return $scope.todos.length;
    }

    $scope.reversedMessage  =   function(){
        return $scope.empName.split("").reverse().join("");
    }

});


app.controller('TestController', function($scope) {
    var start = 0;
    var ending = start+5;
    var lastdata = 30;
    var reachLast = false;
    $scope.loadmore = "Loading More data..";
     $scope.testData = [];


     $scope.listData = function() {
         if(reachLast){
             return false;
         }
        var jsondt = [];
            for (var i = start; i < ending; i++) {
                jsondt.push({
                                id: i, name: "name"+i
                          });
                };
                start = i;
                ending = i+10;

             $scope.testData =$scope.testData.concat(jsondt);


                     if(ending >= lastdata) {
                         reachLast = true;
                         $scope.loadmore = "Reached at bottom";
                     }
            };


                 $scope.listData();

    });


app.controller("AlbumCtrl", function($scope,$http) {
  $scope.tog= true;
  $scope.images = [
    {image : '../images/1.jpg', thumbnail : '../images/thumbs/1.jpg', description : '1'},
    {image : '../images/2.jpg', thumbnail : '../images/thumbs/2.jpg', description : '2'},
    {image : '../images/3.jpg', thumbnail : '../images/thumbs/3.jpg', description : '3'},
    {image : '../images/4.jpg', thumbnail : '../images/thumbs/4.jpg', description : '4'},
    {image : '../images/5.jpg', thumbnail : '../images/thumbs/5.jpg', description : '5'},
    {image : '../images/6.jpg', thumbnail : '../images/thumbs/6.jpg', description : '6'},
    {image : '../images/7.jpg', thumbnail : '../images/thumbs/7.jpg', description : '7'},
    {image : '../images/8.jpg', thumbnail : '../images/thumbs/8.jpg', description : '8'},
    {image : '../images/9.jpg', thumbnail : '../images/thumbs/9.jpg', description : '9'},
    {image : '../images/10.jpg', thumbnail : '../images/thumbs/10.jpg', description : '10'},
    {image : '../images/11.jpg', thumbnail : '../images/thumbs/11.jpg', description : '11'},
  ];

  function handleImagesLoaded(data, status) {
    $scope.images = data;
    $scope.currentImage = _.first($scope.images);
  }
  $scope.setCurrentImage = function (image) {
    $scope.currentImage = image;
  };

});

app.controller('PeopleCtrl',function($scope,$http){
$scope.people = [];
$scope.loadPeople = function() {
  var httpRequest = $http({
    method:'POST',
    url:'echo/json',
    data:jsonData
  }).success(function(data,status){
    $scope.people = data;
  })
}
});

app.controller('FormController', function($scope) {

  $scope.person = {
    name: null
  };
  $scope.people = [];
  $scope.submit = function() {
    if ($scope.person.name) {
      $scope.people.push({name: $scope.person.name, helpful: 0,replyone:0});
      $scope.person.name = '';
    }
  };
});

app.controller('BlockController', function($scope) {

  $scope.reply = {
    comment :null
  };
  $scope.replybox = [];
  $scope.replysubmit = function() {
    if ($scope.reply.comment) {
      $scope.replybox.push({comment: $scope.reply.comment, helpful: 0,replyone:0});
      $scope.reply.comment = '';
    }
  };
});

app.directive('replyBox',function(){
  return {
    restrict:'A',
    scope :true,
    templateUrl:'../templates/reply-box.html'
  }
});

app.directive('replyLinks',function(){
  return {
    restrict:'A',
    scope:true,
    templateUrl:'../templates/reply-links.html'
  }
});

app.directive('gallerySlider',function(){
  return {
    restrict :'A',
    scope :true,
    templateUrl:'../templates/gallery.html'

  }
});

app.directive ('commentSection',function(){
  return{
    restrict:'A',
    scope :true,
    templateUrl:'../templates/comment-section.html'

  }
});
