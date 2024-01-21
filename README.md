![jbase](https://github.com/k37z3r/jBase/assets/105192630/e749d4b4-9134-4307-a404-50dc0b258a55)

![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/k37z3r/jBase?style=plastic&labelColor=rgb(255%2C127%2C0))
![GitHub Release](https://img.shields.io/github/v/release/k37z3r/jBase?style=plastic&labelColor=rgb(0%2C0%2C255))
![GitHub file size in bytes](https://img.shields.io/github/size/k37z3r/jBase/jBase.js?style=plastic&labelColor=rgb(0%2C255%2C0))
![GitHub top language](https://img.shields.io/github/languages/top/k37z3r/jBase?style=plastic&labelColor=rgb(255%2C255%2C0))





# jBase
jBase is a javascript library that is very simple and very small. i wrote this library because jQuery and other libraries are too big for me personally and i only need a small part of them. Of course I could have changed the jQuery for my purposes, but I still want a much smaller version. and if you look at the known libraries, you know how complex they are written, which would only inflate the source code for the few functions. Do I think my library is better? no, it's not! it's just smaller and therefore easier to read. Can others make changes to jBase? Sure, the licence basically says: Sharing and modifying is allowed, but you are not allowed to claim that you are the author (attribution of the author is required), and commercial use (resale...) is prohibited.

The legally binding licence can be found in an easy-to-read form including an explanation at: https://creativecommons.org/licenses/by-nc-sa/4.0/

## desciption
jBase is a single javascript library designed to facilitate the programming of various javascript applications.
the library should be integrated via <script> in the head area.
```
<head>
    <script type="text/javascript" src="./jBase.js" defer="defer"></script>
</head>
```
or use a CDN
```
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/k37z3r/jBase@main/jBase.js" defer="defer"></script>
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
> 
> ### use more than one selector and/or event
> ```
> $('#username, #password').on('input, change, blur, focus','div',function(){
>     alert('x')
> }) 
> ```

## License
> [!IMPORTANT]
> The code is hosted and developed in the [jBase GitHub repository](https://github.com/k37z3r/jBase)
> 
> jBase © 2024 by Sven Reddemann is licensed under [Attribution-NonCommercial-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/).
