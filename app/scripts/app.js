
'use strict';

angular.module('app',[])
    
    
    .controller('DishDetailController', ['$scope', function($scope) {
        $scope.predicate = '';
        $scope.reverse = false;
        if($scope.predicate.indexOf('-') === 0){
            $scope.reverse = true;
        }
        
        $scope.dish={
          name:'Uthapizza',
          image: 'images/uthapizza.png',
          category: 'mains', 
          label:'Hot',
          price:'4.99',
          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
          comments: [
               {
                   rating:5,
                   comment:"Imagine all the eatables, living in conFusion!",
                   author:"John Lemon",
                   date:"2012-10-16T17:57:28.556094Z"
               },
               {
                   rating:4,
                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                   author:"Paul McVites",
                   date:"2014-09-05T17:57:28.556094Z"
               },
               {
                   rating:3,
                   comment:"Eat it, just eat it!",
                   author:"Michael Jaikishan",
                   date:"2015-02-13T17:57:28.556094Z"
               },
               {
                   rating:4,
                   comment:"Ultimate, Reaching for the stars!",
                   author:"Ringo Starry",
                   date:"2013-12-02T17:57:28.556094Z"
               },
               {
                   rating:2,
                   comment:"It's your birthday, we're gonna party!",
                   author:"25 Cent",
                   date:"2011-12-02T17:57:28.556094Z"
               }
               
           ]
        };
        
        $scope.orderByList = [
          {value: 'rating', label: 'Rating'},
          {value: 'comment', label: 'Comment'},
          {value: 'author', label: 'Author'},
          {value: 'date', label: 'Date'}
        ];
    }])

    .controller('DishCommentController', ['$scope', function($scope) {
        
        $scope.userComment = {
            rating:5,
            comment:'',
            author:'',
            date: null
        };
        
        $scope.submitComment = function () {
            $scope.userComment.rating = Number($scope.userComment.rating);
            
            $scope.userComment.date = new Date().toISOString();
            $scope.dish.comments.push($scope.userComment);
            $scope.userCommentForm.$setPristine();
            $scope.userComment = {
                rating:5,
                comment:'',
                author:'',
                date: null
            };

                            
        };
    }])



;
