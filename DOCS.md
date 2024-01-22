## How do I integrate jBase?
jBase should be integrated via <script> in the <head> area.

one option is to host jBase yourself.
```
<head>
    <script type="text/javascript" src="./jBase.js" defer="defer"></script>
</head>
```

the other option is to integrate jBase via CDN
```
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/k37z3r/jBase@main/jBase.js" defer="defer"></script>
</head>
```



## ready()
```
$(document).ready(function(){
 //codes
});
```


## each()
```
$('a').each(function(e){
    $(e).html('example text');
}); //like forEach
```


## addClass()
```
$('span').addClass('red'); //set class="red"
```


## removeClass()
```
$('span').removeClass('red'); //remove red from class="red"
```


## hasClass()
```
console.log($('span').hasClass('red')) //returns true / false 
```


## css()
```
$('span').css({
    color:'red'
}) //set style="color:red;"
```


## attr()
```
$('#span').attr('class') //returns the classselector
```
```
$('#span').attr('class', 'example') //set class="example"
```


## html()
```
$('div').html() //gets the innerHTML 
```
```
$('div').html('x') //add the innerHTML 
```


## prepend()
```
let h1=document.createElement('h1');
h1.innerHTML='this is a heading';
$('div').prepend(h1) //prepend the node
```
```
$('div').prepend('hello') //prepend the string 
```


## append()
```
let h1=document.createElement('h1');
h1.innerHTML='this is a heading';
$('div').append(h1) //append the node
```
```
$('div').append('hello') //append the string 
```


## hide()
```
$('div').hide() //set display: none;
```


## show()
```
$('div').show() //set display: block;
```


## on()
```
$('div').on('click',function(){
    alert('message: click has been executed')
})
```


## disable()
```
$('button').disable(true) //disable button
$('button').disable(false) //enable button
```


## $.ajax()
```
$.ajax({
    url:'example.php',
    type:'post',
    data:{
        name:'Joydeep',
        password: '123abc123'
    },
    success: function(res){
        console.log(res)
    }
}) // a simple XMLHttpRequest()
```


## toggleSlide()
```
$("#menuopener').on("click", function(){
    $("#menu").toggleSlide(
        {
            timer: "fast",  // fast = 200ms / moderate = 500ms / slow = 800ms or set time like: timer: "150ms"
            transition: "ease", // standard = linear
            transform: {
                in: "translateX(0%)", // standard = translateY(0%)
                out: "translateX(100%)" // standard = translateY(100%)
            }
        }
    )
});
```


## toogleClass()
```
$('span').toogleClass('red','blue'); // switches between the red and blue classes
$('span').toogleClass('red'); // set class red, remove class red
```


## doScroll()
```
$("body").doScroll(
    {
        top: 0,    // optional / standard 0
        left: '50px',    // optional / standard 0
        behavior: 'smooth'    // optional / standard smooth
    }
)
```


## chaining
```
$('span').addClass('red').removeClass('blue');
```


## bind event to parent
```
$(document).on('click','div',function(){
    alert('x')
}) 
```


## how to use standard-js function
```
$("div")[0].style.color = "blue";  // set color:blue at first element
$("div")[1].style.color = "blue";  // set color:blue at second element
...
$("div").each(e => {
    e.style.color = "blue"
}); // set color:blue for all div
```


## use more than one selector and/or event
```
$('#username, #password').on('input, change, blur, focus','div',function(){
    alert('x')
}) 
```