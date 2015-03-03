http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/1/video/1

##2.1 Filters and a New Directive

필터는 파이프를 이용해서 첫 익스프레션을 두번째 익스프레션으로 전달.
```
{{data | filter:options}}
```
예 :
```
{{product.price | currency}}

{{'123124124124' | date:'yyyy/MM/dd @ hh:mm'}}
{{'asdf' | uppercase}}  //ASDF
{{'asdfghjk' | limitTo:5}}  //asdfg

<div ng-repeat="product in store.product | limitTo:3">

<div ng-repeat="product in store.product | orderBy:'price'">  //오름차순
<div ng-repeat="product in store.product | orderBy:'-price'"> //내림차순
```

참고로 이미지 로드 할때는 src 대신 ng-src 써야함.
```
var gems = [
  { images: [
      { full:"1.jpg", thumb:"2.jpg" }
    ]
  }
];

<img src="{{product.images[0].full}}">  //작동 안함. 이미지는 HTMLDoc 보다 먼저 로딩 되기 때문에.
<img ng-src="{{product.images[0].full}}">  //이렇게 해야 작동함.

<div class="gallery" ng-show='product.images.length'> images가 1 이상일 때 보임.
```

##2.6 Tabs Inside Out
부트스트랩에서 Tab 지정하는 법.
```
<ul class="nav nav-pills">
  <li><a href ng-click="tab=1"> asdf</a></li>
  <li><a href ng-click="tab=2" > 2zx</a></li>
  <li><a href ng-click="tab=3" > 3rew</a></li>
</ul>
{{tab}} //1, 2, 3 표시.
```
### 2-way Data Binding
클릭 할 때 마다 tab 변수 값이 업데이트 된다. 2-way data binding 이라고 함.
```
<div class="panel" ng-show="tab === 1">
  asdf
</div>
<div class="panel" ng-show="tab === 2">
  asdf
</div>
<div class="panel" ng-show="tab === 3">
  asdf
</div>
```
리프레쉬 하면 패널이 하나도 안 보이기 때문에 tab 의 초기값을 설정 해 주는것이 좋다.
```
<section ng-init="tab = 1">
```

선택된 탭을 하이라이트 하기 위해 ng-class 디렉티브 사용
```
<ul class="nav nav-pills">
  <li ng-class="{ active:tab === 1 }"><a href ng-click="tab=1"> asdf</a></li>
  <li ng-class="{ active:tab === 2 }"><a href ng-click="tab=2" > 2zx</a></li>
  <li ng-class="{ active:tab === 3 }"><a href ng-click="tab=3" > 3rew</a></li>
</ul>
```

더 깔끔하게 하기 위해 컨트롤러 사용 = PanelController.
```
<section ng-controller="PanelController as panel">
  <ul class="nav nav-pills">
    <li ng-class="{ active: panel.isSelected(1) }"><a href ng-click="panelselectTab(1)"> asdf</a></li>
    <li ng-class="{ active: panel.isSelected(2) }"><a href ng-click="panelselectTab(2)" > 2zx</a></li>
    <li ng-class="{ active: panel.isSelected(3) }"><a href ng-click="panelselectTab(3)" > 3rew</a></li>
  </ul>
  <div class="panel" ng-show="panel.isSelected(1)">
    asdf
  </div>
...

//app.js
app.controller("PanelController",function(){
  this.tab = 1; // ng-init="tab=1" 을 컨트롤러 안으로 옮김.

  this.selectTab = function(setTab){
    this.tab = setTab;  //ng-click="tab=1" 을 컨트롤러 안으로 옮김.
  };

  this.isSelected = function(checkTab){
    return this.tab === checkTab;   //선택된 탭인지 true, false 리턴.
  };

});
```

## 2.9 예제
인자가 있으면 인자로, 없으면 0 으로 셋팅.
```
this.setCurrent = function(curVal){
  if(curVal){
    this.current = curVal;
  } else {
    this.current = 0;
  }
};

this.setCurrent = function(newGallery){
  this.current = newGallery || 0;
};
```
