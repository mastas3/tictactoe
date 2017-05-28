var Board = function() {
    try {
        this.board = [];
        this.filledSquare = '';
        this.successfullyFilled = false;
        this.domElem = this.createElem('div', 'board')
    } catch(err) {
        console.log('Board constructor: ' + err)
    }
}

Board.prototype.buildBoard = function() {
    try {
        var _context = this; //save reference to current board for later use
        this.board = Array.from({length:3}, function(row, i) {
            return Array.from({length:3}, function(col, j) {
                var square = new Square();
                square.setId(i+'-'+j)
                square.domElem.onclick = function(e) {
                    if(square.empty()) {
                        _context.update(square)
                        _context.successfullyFilled = true;
                    } else {
                        _context.successfullyFilled = false;
                    }
                }
                return square;
            })
        })
    } catch(err) {
        console.log('Board buildBoard: ' + err)
    }
}

Board.prototype.update = function(_square) {
    try {
        _square.setSign(this.filledSquare === 'X' ? 'O' : 'X')
        this.filledSquare = this.filledSquare === 'X' ? 'O' : 'X';
        this.render();
    } catch(err) {
        console.log('Board update: ' + err)
    }
}

Board.prototype.getEmptySquares = function() {
    try {
        var emptyCells = []
        for(var i = 0; i < this.board.length; i++) {
            for(var j = 0; j < this.board[0].length; j++) {
                if(this.board[i][j].empty()) {
                     emptyCells.push(this.board[i][j])
                }
            }
        }
    return emptyCells;
    } catch(err) {
        console.log('Board getEmptySquares: ' + err)
    }
}

Board.prototype.getSquares = function() {
    try {
        return this.board;
    } catch(err) {
        console.log('Board getSquares: ' + err);
    }
}

Board.prototype.checkIfWin = function() {
    try {
        var rows =  this.board.map(function(arr) {
            return arr.map(function(s) {
                return s.getSign();
            }).join('')
        })

        var cols = this.board.map(function(r, i, arr) {
            return r.map(function(c, j) {
                return arr[j][i].getSign();
            }).join('')
        })
        var diagonal = [
            [this.board[0][0].getSign(), this.board[1][1].getSign(), this.board[2][2].getSign()].join('')]
                .concat([this.board[2][0].getSign(), this.board[1][1].getSign(), this.board[0][2].getSign()
        ].join(''))

        return rows.concat(cols).concat(diagonal).filter(function(pattern) {
            try {
                return pattern === 'XXX' || pattern === 'OOO'
            } catch(err) {
                console.log('Board checkIfWin filter pattern: ' + err)
            }
        }).length > 0
    } catch(err) {
        console.log('Board checkIfWin: ' + err)
    }
}

//Helper function - creates DOM nodes
Board.prototype.createElem = function(_elem, _class) {
    try {
        var elem = document.createElement(_elem);
        elem.className = _class;
        return elem;
    } catch(err) {
        console.log('Board createElem: ' + err);
    }

}

Board.prototype.destroy = function() {
    try {
        Array.from(document.getElementsByClassName('column')).forEach(function(column) {
            this.domElem.removeChild(column);
        }.bind(this));
    } catch(err) {
        console.log('Board destroy: ' + err)
    }
}

Board.prototype.render = function() {
    try {
        this.destroy();
        for(var i = 0; i < this.board.length; i++) {
            var col = this.createElem('div', 'column');
            for(var j = 0; j < this.board[0].length; j++) {
                col.appendChild(this.board[i][j].render())
            }
            this.domElem.appendChild(col);
        }
        document.body.appendChild(this.domElem)
    } catch(err) {
        console.log('Board render: ' + err)
    }
}

