$(document).ready(function(){
  let isOpen = false;
  let counter = 0;
  let marginLeftCounter = 50;
  $('.icon').on("click",function(){
    if(!isOpen)
    {
      $(this).animate({"top":"18%","left":"15%"});
      $(this).children('.dot').hide();
      
      $('.slider_container').css({display:"flex"});
      $('.btn_l_r').show();
    }
    else
    {
      $(this).animate({"top":"94%","left":"75%"});
      $(this).children('.dot').show();
      
      $('.slider_container').css({display:"none"});
      $('.btn_l_r').hide();
    }
    isOpen=!isOpen;
  });
  $(".next").on("click",function(){
    if(counter<($('.card').length))
    {
      marginLeftCounter = marginLeftCounter-220;
      counter++;
    }
    $('.slider_container').animate({"margin-left":marginLeftCounter+"px"},500);
  });
  $(".pre").on("click",function(){
    if(counter>0)
    {
      marginLeftCounter = marginLeftCounter+220;
      counter--;
    }
    $('.slider_container').animate({"margin-left":marginLeftCounter+"px"},500);
  });
});