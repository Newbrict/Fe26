function Tile(position, value, label) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.label            = label;
  this.movesLeft        = -1;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value,
    movesLeft: this.movesLeft,
    label: this.label
  };
};

Tile.prototype.decay = function() {
  if(this.movesLeft > 0) this.movesLeft -= 1;

  if(this.movesLeft === 0) {
    return true;
    this.movesLeft = -1;
  }

  return false;
};
