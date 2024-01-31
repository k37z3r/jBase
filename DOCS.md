## How do I integrate jBase?
jBase should be integrated via <script> in the <head> area.

one option is to host jBase yourself.
```html
<head>
    <script type="text/javascript" src="./jBase.js" defer="defer"></script>
</head>
```

the other option is to integrate jBase via CDN

via **jsdelivr**
```html
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/k37z3r/jBase@main/jBase.js" defer="defer"></script>
</head>
```

via **Statically**
```html
<head>
    <script type="text/javascript" src="https://cdn.statically.io/gh/k37z3r/jBase/main/jBase.js" defer="defer"></script>
</head>
```


## Any selector valid in CSS can be used as a selector in jBase
**Examples:**

```js
$("#div") // select Object with id="div"
```

```js
$(".div") // select Object with class="div"
```

```js
$("div") // select Object with tag <div>
```

```js
$(document) // select document
```

```js
$(window) // select window
```

**Chained selectors are also possible:**

```js
$("div > span.colored") // select Object with tag <span> an class="colored", if this object is inner tag <div>
```

```js
$("input[id^=reg][type=text]") // select Object with tag <input> and id is beginning with "reg" and type="text"
```

and many more possibilities, read: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors

## ready()
```js
$(document).ready(function(){
 //codes
});
```


## each()
```js
$('a').each(function(e){
    $(e).html('example text');
}); //like forEach
```


## addClass()
```js
$('span').addClass('red'); //set class="red"
```


## removeClass()
```js
$('span').removeClass('red'); //remove red from class="red"
```


## hasClass()
```js
console.log($('span').hasClass('red')) //returns true / false 
```


## css()
```js
$('span').css({
    color:'red'
}) //set style="color:red;"
```


## attr()
```js
$('#span').attr('class') //returns the classselector
```
```js
$('#span').attr('class', 'example') //set class="example"
```


## html()
```js
$('div').html() //gets the innerHTML 
```
```js
$('div').html('x') //add the innerHTML 
```


## prepend()
```js
let h1=document.createElement('h1');
h1.innerHTML='this is a heading';
$('div').prepend(h1) //prepend the node
```
```js
$('div').prepend('hello') //prepend the string 
```


## append()
```js
let h1=document.createElement('h1');
h1.innerHTML='this is a heading';
$('div').append(h1) //append the node
```
```js
$('div').append('hello') //append the string 
```


## hide()
```js
$('div').hide() //set display: none;
```


## show()
```js
$('div').show() //set display: block;
```


## on()
```js
$('div').on('click',function(){
    alert('message: click has been executed')
})
```


## disable()
```js
$('button').disable(true) //disable button
```
```js
$('button').disable(false) //enable button
```
```js
$('button').disable() //get button-status e.g. false
```


## $.ajax()
```js
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
```js
$("#menuopener").on("click", function(){
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
```js
$('span').toogleClass('red','blue'); // switches between the red and blue classes
```
```js
$('span').toogleClass('red'); // set class red, remove class red
```


## doScroll()
```js
$("body").doScroll(
    {
        top: 0,    // optional / standard 0
        left: '50px',    // optional / standard 0
        behavior: 'smooth'    // optional / standard smooth
    }
)
```


## val()
```js
$('#input_text').val() // get value of <input type=text id=input_text>
```
```js
$('#input_text').val("test") // set value in <input type=text id=input_text> to test
```


## click()
```js
$('#href').click() // simulate click at element with id="href"
```


## focus()
```js
$('#href').focus(
    {
        scroll: true, // optional / standard true / autoscroll to focused element
        visible: true  // optional / standard true / force the visible indication
    }
) // focus to element
```


## chaining
```js
$('span').addClass('red').removeClass('blue');
```


## bind event to parent
```js
$(document).on('click','div',function(){
    alert('x')
}) 
```


## how to use standard-js function
```js
$("div")[0].style.color = "blue";  // set color:blue at first element
$("div")[1].style.color = "blue";  // set color:blue at second element
// and so on....
```
```js
$("div").each(e => {
    e.style.color = "blue"
}); // set color:blue for all div
```


## use more than one selector and/or event
```js
$('#username, #password').on('input, change, blur, focus','div',function(){
    alert('x')
}) 
```
