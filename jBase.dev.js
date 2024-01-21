/*!
* jBase © 2024 by Sven Reddemann is licensed under Attribution-NonCommercial-ShareAlike 4.0 International.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
* Link to Work: https://github.com/k37z3r/jBase
* Link to Creator Profile: https://github.com/k37z3r
*/
let _jBaseTSC = false;
class JBase extends Array{
    constructor(e) {
        super();
        if (e == document || e instanceof HTMLElement || e == window)
            this.push(e);
        else {
            let elements=document.querySelectorAll(e);
            for(let i=0;i<elements.length;i++){
                this.push(elements[i]);
            }
        }
    }
    ready(_cb){
        this[0].addEventListener('readystatechange', e => {
            if(this[0].readyState === "complete"){
                _cb();
                return true;
            }
        });
    }
    each(_cb){
        if (_cb && typeof(_cb) == 'function') {
            for (let i = 0; i < this.length; i++) {
                _cb(this[i], i);
            }
            return this;
        } 
    }
    addClass(arg){
        this.each(function(e) {
            e.classList.add(arg);
        })
        return this;
    }
    removeClass(arg){
        this.each(function(e) {
            e.classList.remove(arg);
        })
        return this;
    }
    val(){
        return this[0].value;
    }
    hasClass(arg){
        return this[0].classList.contains(arg);
    }
    css(arg){
        this.each(function(e) {
            Object.assign(e.style, arg);
        })
        return this;
    }
    attr(att, val = null){
        let getatt = this;
        if (val) {
            this.each(function(e) {
                e.setAttribute(att, val);

            });
        }
        else
            getatt = this[0].getAttribute(att);
        return getatt;
    }
    removeAttr(arg){
        this[0].removeAttribute(arg);
    }
    html(arg){
        if (arg) {
            this.each(function(e) {
                e.innerHTML = arg;
            });
        }
        else
            return this[0].innerHTML;
        return this;
    }
    append(arg){
        this[0].append(arg);
        return this;
    }
    toggleSlide(arg = {}){
        let timers, transitions, transformIn, transformOut;
        if (Object.hasOwn(arg, 'timer')){
            if (arg.timer == 'slow')
                timers = '800ms';
            else if (arg.timer == 'fast')
                timers = '200ms';
            else if (arg.timer == 'moderate')
                timers = '500ms';
            else
                timers = arg.timer;
        }
        else
            timers = '500ms';
        if (Object.hasOwn(arg, 'transition')){
            if (arg.transition == 'ease')
                transitions = 'ease';
            else
                transitions = 'linear';
        }
        else
            transitions = 'linear';
        if (Object.hasOwn(arg, 'transform')){
            if (Object.hasOwn(arg.transform, 'in') && Object.hasOwn(arg.transform, 'out')){
                transformIn = arg.transform.in
                transformOut = arg.transform.out
            }
            else{
                transformIn = 'translateY(0%)';
                transformOut = 'translateY(100%)';
            }
        }
        else{
            transformIn = 'translateY(0%)';
            transformOut = 'translateY(100%)';
        }
        this.each(function(e) {
            if (_jBaseTSC){
                _jBaseTSC = false;
                e.style.transform = transformOut;
                e.style.transitionTimingFunction = transitions;
                e.style.transition = timers;
            }
            else{
                _jBaseTSC = true;
                e.style.transform = transformIn;
                e.style.transitionTimingFunction = transitions;
                e.style.transition = timers;
            }
        });
        return this;
    }
    prepend(arg){
        this[0].prepend(arg);
        return this;
    }
    hide(){
        this.each(function(e) {
            e.style.display = "none";
        });
        return this;
    }
    show(){
        this.each(function(e) {
            e.style.display = "block";
        });
        return this;
    }
    on(events, child, _cb = null, state = null){
        let arr = events.split(",");
        if (_cb != null){
            this.each(function(e){
                arr.forEach((event) => {
                    event = event.trim();
                    e.addEventListener(event, function(event) {
                        if (event.target.matches(child + ', ' + child + ' *')){
                            _cb.apply(event.target.closest(child), arguments);
                        }
                    }, false);
                });
            });
        }
        else{
            _cb = child;
            this.each(function(e){
                arr.forEach((event) => {
                    event = event.trim();
                    if (state)
                        e.addEventListener(event, _cb, state);
                    else
                        e.addEventListener(event, _cb, false);
                });
            });
        }
        return this;
    }
    disable(arg){
        return this[0].disabled=arg;
    }
}
const $ = function(e){
    return new JBase(e);
}
$.ajax = function(arg){
    let url = arg["url"];
    let type = "get";
    let success = function(){};
    let fail = function(){};
    if(arg['success']){
        success = arg['success'];
    }
    if(arg['fail']){
        fail = arg['fail'];
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onerror = function(error){
        return fail(error);
    }
    xhttp.onload = function(){
        if (this.readyState == 4 && this.status == 200){
            let response;
            try {
                response=JSON.parse(this.responseText)
            }
            catch (e){
                response = this.responseText;
            }
            return success(response);
        }
        else
            return fail(this.status);
    };
    let param="";
    if (arg){
        type = arg["type"];
        if ('data' in arg) {
            param = new URLSearchParams(arg['data']).toString();
        }
    }
    if (type && type.toUpperCase()=='POST'){
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(param);
    }
    else if (!type || type.toUpperCase()=='GET'){
        xhttp.open("GET", url + "?" + param, true);
        xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhttp.send();
    }
}
