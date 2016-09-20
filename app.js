var main = function() {
  $('#top-text').keyup(function(){
      var top = $('#top-text').val();
      $('.top-caption').text(top);
  });

  $('#bottom-text').keyup(function(){
      $('.bottom-caption').text(
        $('#bottom-text').val()
      )
  });

  $('#image-url').keyup(function(){
      var url = $('#image-url').val();
      $('.meme img').attr('src', url);
  });

};

$(document).ready(main);


 // var main = function() {
 //   $('#image-url').keyup(function() {
 //     var url = $(this).val();
 //     $('.thumbnail img').attr('src', url);
 //   });
 //
 //   $('#top-text').keyup(function() {
 //     var top = $(this).val();
 //     $('.top-caption').text(top);
 //   });
 //
 //   $('#bottom-text').keyup(function() {
 //     var bottom = $(this).val();
 //     $('.bottom-caption').text(bottom);
 //   });
 // };
 //
 // $(document).ready(main);
