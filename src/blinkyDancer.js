var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  // this.blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<div class="luigi"><img class="luigi" src="https://vignette.wikia.nocookie.net/mario/images/5/5c/Luigi_MP10.png/revision/latest?cb=20151218234643" /></div>')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

 //this.step()
 this.setPosition(top, left);

  // return blinkyDancer;
};
  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep;
    makeDancer.prototype.step.call(this, this.timeBetweenSteps)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  };