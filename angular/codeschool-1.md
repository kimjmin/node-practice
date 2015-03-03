http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/section/1/video/1

##1.1 Ramp Up

API를 이용해서 JSON 데이터만 받아서 페이지 고침.
앵귤러는 Directive 를 이용.

### Directive : 앵귤러가 JS를 실행시키도록 참고하는 HTML태그에 포함된 마커.
html 태그 안에 선언
```
<body ng-controller='ram'>
```
javascript 코드 작성
```
function ram() {
  alert('ram!');
}
```

### Module : 앵귤러 application 을 적는 조각(부분).
캡슐화. 모듈은 다른 모듈 사용 가능.
```
var app = angular.module('store',[]);
```
'store' - 애플리케이션 이름
[] - 데펜던시. 다른 라이브러리.

store 앱 사용하겠다고 선언. HTML DOC 로딩이 끝나면 앵귤러에서 사용하도록 로드.
```
<html ng-app='store'>
```

### Expression : HTML 안에 동적 값 입력.
```
1 + 2 = {{1+2}}
My name is {{"Kim" + " " + "Jongmin"}}
```

##1.3 Index HTML Setup
###Controllers : 함수와 값을 선언한 앱의 동작.

```
(function(){    // 항상 자바스크립트는 클로저로 감싸는 습관을 들이는 것이 좋다.
  var app = angular.module('store',[]);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name : 'asdf',
    price : 12
  }

})();
```
```
<div ng-controller="StoreController as store">
  <h1>{{store.product.name}}</h1>
  <h1>{{store.product.price}}</h1>
</div>
```

##1.5 Built-in Directives

### ng-show, ng-hide : 값이 true, false 일 때 보이고, 숨김.
canPurchase 값이 true 일 때만 버튼 보이도록.
```
<button ng-show="store.product.canPurchase">Add</button>
```
canPurchase 필드가 아예 없는 경우 canPurchase: false 로 간주.

soldOut : true 일 때 div 보이지 않도록
```
<div ng-show="!store.product.soldOut">...</div>
```
또는
```
<div ng-hide="store.product.soldOut">...</div>
```

### ng-repeat : 배열값을 반복해서 입력.
```
this.product = gem;

gem = [
  { name: "Diamond"},
  { name: "Ruby"}
];
```

```
<div ng-repeat="product in store.product">
  {{product.name}}
</div>
```
