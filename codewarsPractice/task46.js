"use strict;" 
//Power .bind()
Function.prototype.bind = function(context) {
  const self = this;
  const boundWrapper = function() {
    return self.apply(boundWrapper._context);
  };
  boundWrapper._context = context;
  boundWrapper.bind = function(newContext) {
    boundWrapper._context = newContext;
    return boundWrapper;
  };
  return boundWrapper;
}