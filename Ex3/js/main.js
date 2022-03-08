window.onload=function(){
    var prices=[120,50,180];
    var result=document.getElementById("result");
    var results=document.getElementsByClassName("en");
    // var fruits=document.getElementsByClassName("fruits");
    var fruits=document.querySelectorAll('[data-price]');
    for(var i=0;i<fruits.length;i++){
        fruits[i].addEventListener("change",numberChange);
    }
    for(var i=0;i<fruits.length;i++){
        results[i].textContent=prices[i];
    }
    function numberChange(){
        var sum=0;
        for(var i=0;i<fruits.length;i++){
            // sum+=fruits[i].value*prices[i];
            // sum+=fruits[i].value*parceInt( fruits[i].getAttribute('data-price'));
            sum+=parseInt(fruits[i].getAttribute('data-price'))*fruits[i].value;
            sum+=fruits[i].value*parseInt(fruits[i].getAttribute('data-price'));

        }
        result.textContent=sum+"円です";
    }
}