(function($) {
  $.fn.extend({
    example1 : function(){
      var cell = '<div class="grid-cell"><div class="Demo">1/ <u class="counter">2</u></div></div>'
      $('#example1 .add-cell').on('click',function(){
        $('#example1 .grid').append(cell);
        var num = $('#example1 .grid-cell').length;
        $('#example1 .counter').html(num);
      })
    },
    example2 : function(){
      var cell = '<div class="grid-cell"><div class="Demo">Some text</div></div>'
      $('#example2 .add-cell').on('click',function(){
        $('#example2 .grid').append(cell);
      })
    },
    example3 : function(){
      var i = 1;
      $('#example3 .increase').on('click',function(){
        
        i++;
        if (i>2){
          i=1;
          $('#increase').css('width','40%')
        }else{
          $('#increase').css('width','20%')
        }
        
      })
      
    }
  });
  $('#example1').example1();
  $('#example2').example2();
  $('#example3').example3();
})(jQuery);

