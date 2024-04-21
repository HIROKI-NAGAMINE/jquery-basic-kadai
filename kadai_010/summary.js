$(function(){
  //文字色変化のボタンが押されたら
  $('#change-color').on('click' , function(){
    //こんにちはの文字色を赤に変える
    $('p').css('color', 'red');
  });

  //文字内容変化のボタンが押されたら
  $('#change-text').on('click' , function(){
    //Hello!の文字に変える
    $('p').text('Hello!' , 'color', 'red');
  });

  //フェードアウトのボタンが押されたら
  $('#fade-out').on('click' , function(){
    //文字がフェードアウトで消える
    $('p').fadeOut();
  });

  //フェードインのボタンが押されたら
  $('#fade-in').on('click' , function(){
    //文字がフェードインで現れる
    $('p').fadeIn();
  });
});