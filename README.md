# jBase
jBase JavaScript Library

![GitHub License](https://img.shields.io/github/license/k37z3r/jBase)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/k37z3r/jBase)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/k37z3r/jBase/total)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/k37z3r/jBase)
![GitHub top language](https://img.shields.io/github/languages/top/k37z3r/jBase)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/k37z3r/jBase)

## desciption
jBase is a single javascript library designed to facilitate the programming of various javascript applications.
the library should be integrated via <script> in the head area.
```
<head>
    <script type="text/javascript" src="/javascripts/lib.min.js" defer="defer"></script>
</head>
```
## using

> [!NOTE]
> ### ready()
> ```
> $(document).ready(function(){
>  //codes
> });
> ```
> 
> ### each()
> ```
> $('a').each(function(e){
>     $(e).html('example text');
> }); //like forEach
> ```
> 
> ### addClass()
> ```
> $('span').addClass('red'); //set class="red"
> ```
> 
> ### removeClass()
> ```
> $('span').removeClass('red'); //remove red from class="red"
> ```
> 
> ### hasClass()
> ```
> console.log($('span').hasClass('red')) //returns true / false 
> ```
> 
> ### css()
> ```
> $('span').css({
>     color:'red'
> }) //set style="color:red;"
> ```
> 
> ### attr()
> ```
> $('#span').attr('class') //returns the classselector
> ```
> ```
> $('#span').attr('class', 'example') //set class="example"
> ```
>
> ### html()
> ```
> $('div').html() //gets the innerHTML 
> ```
> ```
> $('div').html('x') //add the innerHTML 
> ```
> 
> ### prepend()
> ```
> let h1=document.createElement('h1');
> h1.innerHTML='this is a heading';
> $('div').prepend(h1) //prepend the node
> ```
> ```
> $('div').prepend('hello') //prepend the string 
> ```
> 
> ### append()
> ```
> let h1=document.createElement('h1');
> h1.innerHTML='this is a heading';
> $('div').append(h1) //append the node
> ```
> ```
> $('div').append('hello') //append the string 
> ```
> 
> ### hide()
> ```
> $('div').hide() //set display: none;
> ```
> 
> ### show()
> ```
> $('div').show() //set display: block;
> ```
> 
> ### on()
> ```
> $('div').on('click',function(){
>     alert('message: click has been executed')
> })
> ```
> 
> ### $.ajax()
> ```
> $.ajax({
>     url:'example.php',
>     type:'post',
>     data:{
>         name:'Joydeep',
>         password: '123abc123'
>     },
>     success: function(res){
>         console.log(res)
>     }
> }) // a simple XMLHttpRequest()
> ```
> 
> ### toggleSlide()
> ```
> $("#menuopener').on("click", function(){
>     $("#menu").toggleSlide(
>         {
>             timer: "fast",  // fast = 200ms / moderate = 500ms / slow = 800ms or set time like: timer: "150ms"
>             transition: "ease", // standard = linear
>             transform: {
>                 in: "translateX(0%)", // standard = translateY(0%)
>                 out: "translateX(100%)" // standard = translateY(100%)
>             }
>         }
>     )
> });
> ```

> [!TIP]
> ### chaining
> ```
> $('span').addClass('red').removeClass('blue');
> ```
> 
> ### bind event to parent
> ```
> $(document).on('click','div',function(){
>     alert('x')
> }) 
> ```

## License
> [!IMPORTANT]
> The code is hosted and developed in the [jBase GitHub repository](https://github.com/k37z3r/jBase)
> 
> jBase © 2024 by Sven Reddemann is licensed under [Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/).
