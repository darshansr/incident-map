import {Pipe} from '@angular/core';

@Pipe({name: 'delay'})
export class DelayConversion {
    //create custom pipe to convert seconds to minutes on a give format 
    // for ex: "6m 4s" delay
    convertToTimeFormat(secondsValue) {
        if (secondsValue === 0) {
            return 'No delay';
        }
        var hours = Math.floor(secondsValue / 3600),
            minutes = Math.floor((secondsValue - hours * 3600) / 60),
            seconds = secondsValue - hours * 3600 - minutes * 60;
    
        return (hours ? hours + 'h ' : '') + (minutes ? minutes + 'min ' : '') + (seconds ? seconds + 's' : '');
    }
}
