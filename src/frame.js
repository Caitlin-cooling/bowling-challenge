var Frame = function(){
  this.currentScore = 0;
  this.rollNumber = 0;
};

Frame.prototype.getCurrentScore = function () {
  return this.currentScore;
};

Frame.prototype.calculateScore = function (roll1, roll2) {
  if (roll1 === 10) {
    this.currentScore = 10
  } else {
    this.currentScore = roll1 + roll2;
  }
};

Frame.prototype.checkRolls = function () {
  return this.rollNumber;
};

Frame.prototype.addRoll = function () {
  ++ this.rollNumber;
};