Person = function(age, name){
	var ssn = 421678452
	var weight = 180
	this.age = age
	this.personName = name

	this.gainWeight = function(lbs){
		return weight + 5
	}

	this.getSSN = function(){
		return ssn
	}

	this.getWeight = function(){
		return weight
	}
}

Person.prototype.birthday = function(age) {
	this.newage = this.age + 1
	return this.newage
}