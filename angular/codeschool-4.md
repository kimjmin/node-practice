http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/4/section/1/video/1

## 4.1 Directives

### ng-include : 다른 파일을 내부에 포함.
"''" 더블 쿼트 안에 싱글 쿼트가 들어있는 점을 잘 봐라. 파일 이름은 앵귤러 변수의 스트링값.
```
<h3 ng-include="'product.html'"></h3>

product.html
{{product.name}}
```

### Custom directive
디렉티브를 직접 작성 가능. <book-cover></book-cover> 이런 식으로.
```
<product-title></product-title>

app.directive('productTitle',function(){
  return {
    restrict : 'E',                      /* 디렉티브의 타입. E는 엘리멘트. */
    templateUrl : 'product-title.html'   /* 템플릿 파일. */
  }
});
```
HTML 의 대쉬가 JS에서 CamelCase로 바뀜.

self-closing tags 는 쓰지 않는걸 추천. <product-title /> 어떤 브라우저는 오류남.

Attribute Directive도 작성 가능
```
<h3 product-class></h3>

app.directive('productClass', function(){
  return {
    restrict : 'A',
    templateUrl : 'product-class.html'
  };
});
```

HTML 소스를 좀 더 의미있게 읽을 수 있도록 사용 가능하다.


##4.5 Directive Controllers
```
<product-panels ng-controller="PanelController as panels">
</product-panels>

app.directive('productPanels',function(){
  return {
    restrict : 'E',
    templateUrl : 'product-panels.html'
  }
});
```
위 예제의 컨트롤러를 디렉티브 안으로 옮김.
```
<product-panels>
</product-panels>

app.directive('productPanels',function(){
  return {
    restrict : 'E',
    templateUrl : 'product-panels.html',
    controller : function(){
      ... /* 컨트롤러 내용 */
    },
    controllerAs : 'panels'
  }
});
```
