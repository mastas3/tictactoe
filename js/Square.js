var Square = function() {
    try {
        this.sign = ''
        this.isEmpty = true;
        this.domElem = document.createElement('div');
        this.domElem.className = 'square';
        this.domElem.id = '';
        this.domElem.innerText = '';
    } catch(err) {
        console.log('Square constructor: ' + err)
    }
}

Square.prototype.setSign = function(_sign) {
    try {
        if(this.isEmpty) {
            this.sign = _sign;
            this.domElem.innerText = this.sign;
            this.isEmpty = false;
        }
    } catch(err) {
        console.log('Square.setSign: ' + err)
    }
}

Square.prototype.empty = function() {
    try {
        return this.isEmpty;
    } catch(err) {
        console.log('Square.empty: ' + err)
    }
}

Square.prototype.getSign = function() {
    try{
        return this.sign;
    } catch(err) {
        console.log('Square.setSign: ' + err)
    }
}

Square.prototype.setId = function(_id) {
    try {
      this.id = _id
    } catch(err) {
      console.log('Square setId: ' + err)
    }
}

Square.prototype.getPosition = function() {
    try {
        return this.getId().split('-');
    } catch(err) {
      console.log('Square getPosition: ' + err)
    }
}

Square.prototype.getId = function() {
    try {
      return this.id;
    } catch(err) {
      console.log('Square getId: ' + err)
    }
}

Square.prototype.getDomElem = function() {
    try {
        return this.domElem;
    } catch(err) {
        console.log('Square getDomElem: ' + err)
    }
}

Square.prototype.render = function() {
    try {
      return this.domElem;
    } catch(err) {
      console.log('Square render: ' + err)
    }
}

