var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<div class="goomba"><img class="goomba" src="https://vignette.wikia.nocookie.net/mario/images/6/6c/Bowser%2C_Super_Mario_64_DS.png/revision/latest?cb=20121106012958" /></div>')
  
  // this.blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

 //this.step()
  
  // return blinkyDancer;
 // this.setPosition(top, left);
  
};
  makeBlueDancer.prototype = Object.create(makeDancer.prototype);
  makeBlueDancer.prototype.constructor = makeBlueDancer;

  makeBlueDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep;
    makeDancer.prototype.step.call(this, this.timeBetweenSteps)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  };