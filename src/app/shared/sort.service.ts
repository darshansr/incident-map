import { Injectable } from '@angular/core';

@Injectable()

export class SortService{
    
   property: string = null;
   direction = 1;
 
      /**
    * @ngdoc method
    * @name SortService#sort
    * Sort incident List information based on prop
    *
    * @param collection Receive incident list
    * @param prop Receive property or key
    *
    * @return {method} Order of the property in ascending or descending direction
    */
     sort(collection: any[], prop: any) {
         this.property = prop;
         this.direction = (this.property === prop) ? this.direction * -1 : 1;
 
         collection.sort((a: any, b: any) => {
             let aVal: any;
             let bVal: any;
 
             if (prop) {
               aVal = a[prop];
               bVal = b[prop];
             }
 
             // Fix issues that spaces before/after string value can cause such as 'Lane Closed'
             if (this.isString(aVal)) { aVal = aVal.trim().toUpperCase(); }
             if (this.isString(bVal)) { bVal = bVal.trim().toUpperCase(); }
 
             if (aVal === bVal) {
                 return 0;
             } else if (aVal > bVal) {
                 return this.direction * -1;
             } else {
                 return this.direction * 1;
             }
         });
     }
 
   /**
    * @ngdoc method
    * @name SortService#isString
    * check for string
    * 
    * @param val Receive any type value 
    *
    * @return {method} Return true or false
    */
     isString(val: any): boolean {
       return (val && (typeof val === 'string' || val instanceof String));
     }
 
}
