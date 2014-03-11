wordLadder = function(){
	var startingWord = document.getElementById("wordInput").value
	usedWords = []
	usedWords.push(startingWord)
	
	
}

stack = function(){
	init = function(){
		this.myList = []
	}

	push = function(item){
		myList.push(item)
	}

	pop = function(){
		return this.myList.pop()
	}

	peek = function(){
		return this.myList[-1]
	}

	isEmpty = function(){
		if (this.myList.length == 0){
			return true 
		}
		else{
			return false
		}
	}

	size 
}