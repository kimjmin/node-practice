http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/5/section/1/video/1

##5.1 Dependencies

모듈에서 다른 모듈 불러 쓰기.
```
(function(){
  var app = angular.module('store',['store-products']); /* 불러올 모듈 이름을 배열에 넣어줌. */
})();

(function(){
  var app = angular.module('store-products',[]);
})();
```
다른 .js 파일도 html 페이지에 같이 include 해 줘야 함.

##5.3 Services

앵귤러는 여러가지 서비스를 제공함.
* $http : 웹 서비스로부터 JSON 데이터 펫치
* $log : JS Console로 로그 메시지 출력
* $filter : 배열을 필터함.

```
$http({
  method : 'GET',
  url : '/product.json'
});
```
또는
```
$http.get(
  '/product.json',
  {
    apiKey : 'myApiKey'
  }
);
```
이렇게 보낼 메시지 같이 입력 가능.

리턴으로 .success() 또는 .error() 프로미스 리턴함. (JQuery)

사용하기 위해서는 컨트롤러에 정의 해 줘야 함. 데펜던시 인젝션이라고 함.
```
app.controller('controller', ['$http', function($http){

  }]
);
```
여러 서비스 사용할 때는
```
app.controller('controller', ['$http', '$log', function($http, $log){

  }]
);
```

컨트롤러 안의 $http 서비스 안에서 this 를 쓰면 컨트롤러 값으로 전달이 안 되니 다음과 같이 바꿔줘야 함.
```
(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StroreController', ['$http', function($http){
    var store = this;   /* this 값을 따로 선언한 변수에 넘겨줌. */

    store.products = [];
    
    http$.get('/products.json').success(function(data){
      store.products = data;
    });

  }]);

})();
```
