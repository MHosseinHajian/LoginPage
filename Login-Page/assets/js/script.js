 $(document).ready(function(){
     $(".Hidden").on('click',function(){
         $(".Hidden").css("visibility","hidden");
         $(".Show").css("visibility","visible");
         $(".password input[type='password']").attr('type','text');
    });

     $(".Show").on('click',function(){
        $(".Show").css("visibility","hidden");
        $(".Hidden").css("visibility","visible");
       $(".password input[type='text']").attr('type','password');
    });
 });