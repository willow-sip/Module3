"use strict;" 
//Anonymous Returns.
const name = 'The Window';
let alpha = {
    name: 'My Alpha',
    getNameFunc: function() {
        return () => {
            return this.name;
        };
    }
}