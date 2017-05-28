var Player = function(_name, _sign) {
    try {
        this.name = _name;
        this.sign = _sign;
    } catch(err) {
        console.log('Player constructor: ' + err)
    }
}

Player.prototype.move = function(_emptySquares) {
    try {
        return _emptySquares[Math.floor(Math.random()*_emptySquares.length)];
    } catch(err) {
        console.log('Player move: ' + err)
    }
}