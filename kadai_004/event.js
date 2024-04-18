$(window).on('load',  function (){
  console.log('loadイベントが発生しました');
});

$(function(){
  //スクロールされたら「scrollイベントが発生しました」を表示
  $(window).on('scroll' , function (){
    console.log('scrollイベントが発生しました');
  });
});