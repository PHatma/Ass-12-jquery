///<reference types="../@types/jquery" />


$('.singer-1').on('click' ,function(){
    $('.p1').slideToggle()
})
$('.singer-2').on('click' ,function(){
    $('.p2').slideToggle()
})
$('.singer-3').on('click' ,function(){
    $('.p3').slideToggle()
})
$('.singer-4').on('click' ,function(){
    $('.p4').slideToggle()
})

window.onload = function() {
   
    countDownToTime("10 october 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days}days`);
    $(".hours").html(`${hours}h`);
    $(".minutes").html(`${mins}m`);
    $('.seconds').html(`${secs}s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});


$(".openNav").click(function(){
    $("#leftMenu").show()
})

$(".closebtn").click(function(){
    $("#leftMenu").hide()
})










