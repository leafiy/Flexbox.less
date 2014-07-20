(function($) {
  $.fn.extend({
    example1 : function(){
      var cell = '<div class="grid-cell"><div class="demo">1/ <u class="counter">2</u></div></div>'
      $('#example1 .add-cell').on('click',function(){
        $('#example1 .grid').append(cell);
        var num = $('#example1 .grid-cell').length;
        $('#example1 .counter').html(num);
      })
    },
    example2 : function(){
      var cell = '<div class="grid-cell"><div class="demo">Some text</div></div>'
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

    },
    example5 : function(){
      var cell = '<div class="grid-cell width-3"><div class="demo">33% width</div></div>'
      var cell2 = '<div class="grid-cell width-1"><div class="demo">10% width</div></div>'
      var cell3 = '<div class="grid-cell width-full"><div class="demo">100% width</div></div>'
      $('#example5 .add-cell').on('click',function(){
        $('#example5 .grid').append(cell);
      });
      $('#example5 .add-cell2').on('click',function(){
        $('#example5 .grid').append(cell2);
      });
      $('#example5 .add-cell3').on('click',function(){
        $('#example5 .grid').append(cell3);
      });
    },
    example6 : function(){
      var cell = '<div class="grid-cell width-1"><div class="demo">10% width</div></div>'
      $('#example6 .add-cell').on('click',function(){
        $('#example6 .grid').append(cell);
      });
    },
    example7 : function(){
      var cell = '<div class="grid-cell width-1"><div class="demo">10% width</div></div>'
      $('#example7 .add-cell').on('click',function(){
        $('#example7 .grid--flexstart').append(cell);
      });
      $('#example7 .add-cell2').on('click',function(){
        $('#example7 .grid--flexend').append(cell);
      });
      $('#example7 .add-cell3').on('click',function(){
        $('#example7 .grid--baseline').append(cell);
      });
    }
  });
  $('#example1').example1();
  $('#example2').example2();
  $('#example3').example3();
  $('#example5').example5();
  $('#example6').example6();
  $('#example7').example7();
})(jQuery);

