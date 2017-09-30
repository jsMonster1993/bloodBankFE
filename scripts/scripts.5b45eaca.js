"use strict";angular.module("bloodCampApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){var c={title:"Home",name:"Home",url:"/home",controller:"MainCtrl",templateUrl:"views/main.html"},d={title:"Login",name:"Login",url:"/login",controller:"LoginCtrl",templateUrl:"views/login.html"};a.state(c),a.state(d),b.otherwise("/login")}]).run(["$state","$rootScope",function(a,b){b.$on("$stateChangeBefore",function(a,b){console.log(b.name)})}]),angular.module("bloodCampApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bloodCampApp").controller("LoginCtrl",["myservice","$scope","$rootScope",function(a,b,c){var d={},e=function(){b.name="",b.email="",b.mobile="",b.bloodGrp="",b.Address="",b.lastdonated=""};b.login=function(){d.name=b.name,d.email=b.email,d.mobile=b.mobile,d.bloodGroup=b.bloodGrp,d.address=b.Address,d.lastdonated=b.lastdonated,console.log(d),a.register(d).then(function(a){console.log(a),e()})["catch"](function(a){console.log(a)})}}]),angular.module("bloodCampApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bloodCampApp").factory("myservice",["$http","$q","$rootScope","$timeout",function(a,b,c,d){var e=function(b){return console.log("inside api"),a.post("http://34.224.23.37:3000/register",b).then(function(a){return console.log(a),a.data.status===!0?a.data:void 0})["catch"](function(a){return a})};return{register:e}}]),angular.module("bloodCampApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/login.html",'<div class="register topbar"> <form ng-submit="login()"> <div> <div> <div class="col-md-6"> <input type="text" placeholder="Name" ng-model="name"><br><br> <input type="text" placeholder="Mobile" ng-model="mobile"><br><br> </div> <div class="col-md-6"> <input type="text" placeholder="Email" ng-model="email"><br><br> <input type="text" placeholder="Blood Group" ng-model="bloodGrp"><br><br> </div> </div><br> <div> <div class="col-md-6"> <input type="text" placeholder="Last Donated" ng-model="lastdonated"><br><br> <input type="text" placeholder="Address" ng-model="Address"><br><br> </div> <div class="col-md-9 col-md-offset-4"> <input type="submit" value="Add"> </div> </div><br><br> </div> </form> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);