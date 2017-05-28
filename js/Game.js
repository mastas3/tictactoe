var Game = function() {
    try {
        this.board = new Board();
        this.player = new Player('john', 'X');
        this.comp = new Player('hp', 'O');
        this.timers = [];

        this.init = function() {
            this.board.buildBoard();
            this.play()
        }
    }
    catch(err) {
        console.log('Game constructor: ' + err);
    }
}

Game.prototype.play = function() {
    try {
        this.board.render();
        this.board.domElem.onclick = this.checkIfWin.bind(this);
    } catch(err) {
        console.log('Game.play: '+ err);
    }
}

Game.prototype.checkIfWin = function() {
    try {
        if(this.board.successfullyFilled) {
            if(this.board.checkIfWin()) {
                this.handleWinning() //handle winning situation.
            } else {
                this.computerMakeMove();  //player didnt win, computers turn
            }
        }
    } catch(err) {
        console.log('Game checkIfWin: ' + err)
    }
}

Game.prototype.handleWinning = function() {
    try {
        var gameCheckIfWinTimer_1 = setTimeout(function() {
            try {
                this.declareWinner();
                this.board.getSquares().forEach(function(arr) {  //remove event listeners for all squares
                    arr.forEach(function(s) {
                        s.getDomElem().onclick = false;
                    })
                })
            } catch(err) {
                console.log('Game checkIfWin: ' + err)
            }
            if(this.timers[gameCheckIfWinTimer_1]) {
                clearTimeout(this.timers[gameCheckIfWinTimer_1]);
            }            
        }.bind(this), 200)
        this.timers.push(gameCheckIfWinTimer_1);
        this.board.domElem.onclick = false;            
    } catch (error) {
        console.log('Game handlePlayersAction: ' + err)
    }
}

Game.prototype.handleDraw = function() {
    try {
        
    } catch (error) {
        
    }
}

Game.prototype.computerMakeMove = function() {
    try {
        var gameCheckIfWinTimer_2 = setTimeout(function() {
            this.board.update(this.comp.move(this.board.getEmptySquares()))
            if(this.board.checkIfWin()) {
                setTimeout(function() {
                    this.declareWinner();
                    this.board.getSquares().forEach(function(arr) { //remove event listeners for all squares
                        arr.forEach(function(s) {
                            s.getDomElem().onclick = false;
                        })
                    })
                }.bind(this), 100)    
            }
            if(this.timers[gameCheckIfWinTimer_2]) {
                clearTimeout(this.timers[gameCheckIfWinTimer_2]);
            }
        }.bind(this), 200)
        this.timers.push(gameCheckIfWinTimer_2);    
    } catch (error) {
        console.log('Game computerMakeMove: ' + err)
    }
}

Game.prototype.declareWinner = function() {
    alert(this.getCurrentPlayer() + ' Have won!');
}

Game.prototype.getCurrentPlayer = function() {
    try{
        return this.board.filledSquare;
    } catch(err) {
        console.log('Game getCurrentPlayer: ' + err)
    }
}

