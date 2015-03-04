http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/3/section/1/video/1

##3.1 Forms and Models

익스프레션을 폼에 연결. 텍스트 관련 폼은 ng-model 에 대입된 변수의 값으로 전달.
```
<b> stars : {{review.body}}</b>

<textarea ng-model='review.body'></textarea>
```
checkbox는 true/false 로 동작. radio는 선택한 value 로 동작.
```
<input ng-model='review.terms' type='checkbox'/> agree

<inpit ng-model='review.color' type='radio' value='red' />
<inpit ng-model='review.color' type='radio' value='blue' />
<inpit ng-model='review.color' type='radio' value='green' />
```

##3.5 Accepting Submissions

ng-submit : 폼이 submit 됬을 때 컨트롤러 실행. ng-init 하던지 컨트롤러에서 값 설정.
```
<form ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)">

<b> stars : {{reviewCtrl.review.body}}</b>

<textarea ng-model='reviewCtrl.review.body'></textarea>

</form>

app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);  // 배열에 추가.
      this.review = {};   //폼 값 리셋.
    };
});
```

##Form Validations 101

밸리데이션 시작 전에 HTML 디폴트 밸리데이션 삭제.
```
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)" novalidate>
```

input 태그에 required 추가.
```
<textarea ng-model='review.body' required></textarea>
```
폼 전체에 valid 체크.
```
<div>review form is {{reviewForm.$valid}}</div> //form의 name 을 넣어줌. true/false 값 구분. 예를 들어 input email 같은걸로 테스트 해보길.
```
valid 안되면 submit 안되게 ng-submit 에 reviewForm.$valid && 추가.
```
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>
```

valid 체크 하는 폼의 input 요소에는 class 값들이 자동으로 추가됨.
ng-pristine : 아무 값도 없음    -    ng-dirty : 값이 입력됨
ng-invalid : 유효하지 않음    -   ng-valid : 유효함.

css 수정 :
```
.ng-invalid.ng-dirty {
  border-color : #FA787E    /* 붉은색 */
}
.ng-valid.ng-dirty {
  border-color : #78FA89    /* 초록색 */
}
```
