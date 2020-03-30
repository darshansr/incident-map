import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
}) 


export class DomFactory {
   

   
    private svgElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }

    private svgImgElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }

    private svgTextSpanElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }
    
    /**
    * @ngdoc method
    * @name DomFactory #createSvg
    * 
    *
    * @return {method} return <svg></svg> tag element
    */
    createSvg(){
        return this.svgElement("http://www.w3.org/2000/svg","svg")
    }

    /**
    * @ngdoc method
    * @name DomFactory #createSvgImg
    * 
    * @return {method} return <image></image> tag element
    */
    createSvgImg(){
        return this.svgImgElement("http://www.w3.org/2000/svg","image")
    }

     /**
    * @ngdoc method
    * @name DomFactory #createSvgText
    * 
    * @return {method} return <text></text> tag element
    */
    createSvgText(){
        return this.svgImgElement("http://www.w3.org/2000/svg","text")
    }

    /**
    * @ngdoc method
    * @name DomFactory #createSvgTSpan
    * 
    * @return {method} return <tspan></tspan> tag element
    */
    createSvgTSpan(){
        return this.svgTextSpanElement("http://www.w3.org/2000/svg","tspan")
    }

    /**
    * @ngdoc method
    * @name DomFactory #setAttribute
    * 
    * @param tag takes tag value
    * @parma attribute of type Object
    *  
    * @return {method} return tag element
    */
    setAttribute(tag:any,attribute:object){
        for (var prop in attribute) {
            tag.setAttribute(prop,attribute[prop]);
        }
        return tag;
    }

    /**
    * @ngdoc method
    * @name DomFactory #elementProducer
    * 
    * @param tag takes tag value
    * @param attribute optional 
    * @param value optional 
    * @param content optional 
    *  
    * @return {method} return tag element
    */
    elementProducer(tag: any, attribute?:string,value?: string, content?:string) {
        var element = document.createElement(tag);
        if(typeof attribute !== 'undefined'){
            element.setAttribute(attribute, value);
        }
        if (typeof content !== 'undefined') {
            element.textContent = content;
        }
        return element;
    }

}

