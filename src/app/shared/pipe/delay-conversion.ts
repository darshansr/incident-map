import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'delay'})
export class DelayConversion implements PipeTransform{
    transform(secondsValue: any) {
        if (secondsValue === 0) {
            return 'No delay';
        }
        let hours = Math.floor(secondsValue / 3600),
            minutes = Math.floor((secondsValue - hours * 3600) / 60),
            seconds = secondsValue - hours * 3600 - minutes * 60;
    
        return (hours ? hours + 'h ' : '') + (minutes ? minutes + 'm ' : '') + (seconds ? seconds + 's' : '');
    }
   
}
