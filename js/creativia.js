$(document).ready(function(){
  $('.panel-faq').on('show.bs.collapse', function() { 
   $(this).addClass('active'); 
 }); 

  $('.panel-faq').on('hide.bs.collapse', function() { 
   $(this).removeClass('active'); 
 }); 
  window.onload = function () {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
          $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
      } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 300);
    });
  };
    $("#submit").click(function() {
    
      var name = $("#name").val(); // Получаем имя
      var email = $("#email").val(); // Получаем e-mail
      var subject = $("#subject").val();
      var message = $("#message").val(); // Получаем сообщение
      
      $.ajax({
      
        url: "/creativia.php", // Куда отправляем данные (обработчик)
        type: "post",
        dataType: "json",

        data: {
          "name": name,
          "email": email,
          "subjekt": subject,
          "message": message
        },

        success: function(data) {
        
          $(".result").html(data.result); // Выводим результат
          
        }
      });
    });
}) 
