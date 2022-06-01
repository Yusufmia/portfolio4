//  menu js

 $(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
    });
    $('.fa-bars').click(function(){
        $('.menu').toggle(500);
    });
    


 });




// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });

















