//가장 먼저 하는 일 : console에 log로 해당 파일이 연결되었는지 찍어보기!!
console.log("complete");
console.log($(window).width());
console.log($(window).height());
//이 달러 표시에 width height는 화면의 비율을 계산해주는 식! 관리자 어쩌구에서 console에 들어가면 볼 수 있음!
//현재 브라우저 칭의 가로 너비px와 세로길이를 console에 출력해줌.

//현재 브라우저 창의 가로세로 길이를 변수에 각각 저장해서 사용할 수 있음
let wWidth = $(window).width();
let wHeight = $(window).height();
//변수에 할당된 값을 확인할 때 또 log를 찍어볼 수 있다.
// console.log(wWidth);
// console.log(wHeight);

//고양이랑 풀숲 배경 조정해보기(배경이 내 마우스에 따라서 움직임!!!)
$(document).on("mousemove", function (event) {
  console.log(event);
  //1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  //2. 마우스 커서에 고양이 이미지 따라다니게 하기
  // 고양이 이미지의 가로세로 너비를 각각 변수에 할당함.
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();
  //이 두줄은 변수를 쓰려면 먼저 선언을 해줘야 하니까 선언을 해준거임

  // 2-1. 변수에 값을 할당할 때, 이미지 너비를 미리 2로 나눠서 적용하거나(밑에처럼)
  //   let imgWidth = $(".cat-img").width() /2;
  //   let imgHeight = $(".cat-img").height() /2;

  //이미지의 left, top 값의 변화를 위에서 선언한 mouse X,Y 좌표값을
  //가져와서 적용함

  //2-2. 이미지의 position값을 적용할 때, 고양이 이미지의 절반을 계산해서 넣거나.
  // 상황에 따라서 선택해서 적용하면 됨.
  // 이미지의 left, top값을 가로세로 절반만큼 빼면, 우리가 가지고 있는 커서의 위치(mouseX,Y)에서
  //이미지 가로 세로의 절반씩 좌표가 수정 되어서 커서 위치에 이미지의 중심이 오도록 적용된다.

  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
  //반만큼 나눠서 고양이가 커서 가운데로 오게 만듦!(/2)
});

//mousemove 이벤트가 일어날때마다
//mouse커서의 x,y값을 구해서 적용할 수 있습니다.

//mousemove 이벤트가 일어날때마다
//커서의 x,y값을 구해서 적용할 수 있습니다.
console.log(event);

$(document).mousemove(function (e) {
  //function(e)의 e는 event를 의미하며, 문서 (doucument)에서 mousemove가 발생할 때마다
  //{}중괄호 안의 코드들을 실행해라~~~
  $("#status").html(e.pageX + "," + e.pageY);
  //#은 css중에서 id 요소를 지칭하는 기호
  //status라는 친구가 적용된 요소의 안쪽 html내용을 pageX,pageY 기능을 통해 불러와서 표시해라
  $(".box").css("width", e.pageX);
  //class가 box로 적용된 요소의 너비를 mousemove 이벤트의 커서 x좌표 값으로 설정해라
  $(".box").css("height", e.pageY);
  //class가 box로 적용된 요소의 너비를 mousemove 이벤트의 커서 y좌표 값으로 설정해라
});
