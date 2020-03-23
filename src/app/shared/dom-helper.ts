import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
}) 
export class DomFactory {
   
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

    private svgElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }

    private svgImgElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }

    private svgTextSpanElement(tag: any,value: string){
        return document.createElementNS(tag,value);
    }
    
    createSvg(){
        return this.svgElement("http://www.w3.org/2000/svg","svg")
    }
    createSvgImg(){
        return this.svgImgElement("http://www.w3.org/2000/svg","image")
    }
    createSvgText(){
        return this.svgImgElement("http://www.w3.org/2000/svg","text")
    }
    createSvgTSpan(){
        return this.svgTextSpanElement("http://www.w3.org/2000/svg","tspan")
    }

    setAttribute(tag:any,attribute:object){
        for (var prop in attribute) {
            tag.setAttribute(prop,attribute[prop]);
        }
        return tag;
    }
    
    
}

