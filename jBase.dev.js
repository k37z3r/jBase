/*!
* jBase © 2024 by Sven Reddemann is licensed under Attribution-NonCommercial-ShareAlike 4.0 International.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
* Link to Work: https://github.com/k37z3r/jBase
* Link to Creator Profile: https://github.com/k37z3r
*/
let _toggleSlideClicked=false;
class JBase extends Array{
    constructor(element) {
        super();
        if (element == document || element instanceof HTMLElement || element == window)
            this.push(element);
        else {
            let elements=document.querySelectorAll(element);
            for(let i=0;i<elements.length;i++){
                this.push(elements[i]);
            }
        }
    }
    ready(callback){
        this[0].addEventListener('readystatechange', e => {
            if(this[0].readyState === "complete"){
                callback();
                return true;
            }
          });
    }
    each(callback) {
        if (callback && typeof(callback) == 'function') {
            for (let i = 0; i < this.length; i++) {
                callback(this[i], i);
            }
            return this;
        } 
    }
    addClass(className) {
        this.each(function(element) {
            element.classList.add(className);
        })
        return this;
    }

    removeClass(className) {
        this.each(function(element) {
            element.classList.remove(className);
        })
        return this;
    }
    val(){
        return this[0].value;
    }
    hasClass(className) {
        return this[0].classList.contains(className);
    }

    css(propertyObject) {
        this.each(function(element) {
            Object.assign(element.style,propertyObject);
        })
        return this;
    }
    attr(attr, value = null) {
        let getattr = this;
        if (value) {
            this.each(function(element) {
                element.setAttribute(attr, value);

            });
        }
        else
            getattr = this[0].getAttribute(attr);
        return getattr;
    }
    removeAttr(attr) {
        this[0].removeAttribute(attr);
    }
    html(data) {
        if (data) {
            this.each(function(element) {
                element.innerHTML = data;
            })
        }
        else
            return this[0].innerHTML;
        return this;
    }
    append(element){
        this[0].append(element);
        return this;
    }
    toggleSlide(data = {}){
        let timers, transitions, transformIn, transformOut;
        if (Object.hasOwn(data, 'timer')){
            if (data.timer == 'slow')
                timers = '800ms';
            else if (data.timer == 'fast')
                timers = '200ms';
            else if (data.timer == 'moderate')
                timers = '500ms';
            else
                timers = data.timer;
        }
        else
            timers = '500ms';
        if (Object.hasOwn(data, 'transition')){
            if (data.transition == 'ease')
                transitions = 'ease';
            else
                transitions = 'linear';
        }
        else
            transitions = 'linear';
        if (Object.hasOwn(data, 'transform')){
            if (Object.hasOwn(data.transform, 'in') && Object.hasOwn(data.transform, 'out')){
                transformIn = data.transform.in
                transformOut = data.transform.out
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
        this.each(function(element) {
            if (_toggleSlideClicked){
                _toggleSlideClicked=false;
                element.style.transform = transformOut;
                element.style.transitionTimingFunction = transitions;
                element.style.transition = timers;
            }
            else{
                _toggleSlideClicked=true;
                element.style.transform = transformIn;
                element.style.transitionTimingFunction = transitions;
                element.style.transition = timers;
            }
        });
        return this;
    }
    prepend(element){
        this[0].prepend(element);
        return this;
    }
    hide() {
        this.each(function(element) {
            element.style.display = "none";
        });
        return this;
    }
    show() {
        this.each(function(element) {
            element.style.display = "block";
        });
        return this;
    }
    on(events, child, callback = null, state = null) {
        let array = events.split(",");
        if (callback != null) {
            let selector = child;
            this.each(function(element) {
                array.forEach((event) => {
                    event = event.trim();
                    element.addEventListener(event, function(event) {
                        if (event.target.matches(selector + ', ' + selector + ' *')) {
                            callback.apply(event.target.closest(selector), arguments);
                        }
                    }, false);
                });
            });
        }
        else {
            callback = child;
            this.each(function(element) {
                array.forEach((event) => {
                    event = event.trim();
                    if (state)
                        element.addEventListener(event, callback, state);
                    else
                        element.addEventListener(event, callback, false);
                });
            });
        }
        return this;
    }
    disable(element){
        return this[0].disabled=element;
    }
}
const $ = function(element) {
    return new JBase(element);
}
$.ajax=function(argument) {
    let url = argument["url"];
    let type = "get";
    let success =function(){};
    let fail = function(){};
    if(argument['success']){
        success=argument['success'];
    }
    if(argument['fail']){
        fail=argument['fail'];
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onerror = function(error){
        return fail(error);
    }
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response;
            try {
                response=JSON.parse(this.responseText)
            }
            catch (e) {
                response = this.responseText;
            }
            return success(response);
        }
        else
            return fail(this.status);
    };
    let parameters="";
    if (argument) {
        type = argument["type"];
        if ('data' in argument) {
            parameters = new URLSearchParams(argument['data']).toString();
        }
    }
    if (type && type.toUpperCase()=='POST') {
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parameters);
    }
    else if (!type || type.toUpperCase()=='GET'){
        xhttp.open("GET", url + "?" + parameters, true);
        xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhttp.send();
    }
}
