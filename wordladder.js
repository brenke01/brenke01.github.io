wordstack = function(){

	this.myList = []
 

	this.peek = function(){
		return this.myList[this.myList.length - 1]
	}
    
    this.pushOnto = function(item){
    	this.myList.push(item)
    	
    }

    this.popFrom = function(){
    	return this.myList.pop()
    }


	this.isEmpty = function(){
		if (this.myList.length == 0){
			return true 
		}
		else{
			return false
		}
	}


	this.cloneStack = function(){
		newList = this.myList
		newStack = new wordstack()

		for (i = 0; i <= newList; i++){
			newStack.push(item)

		}
		return newStack
	}

}




wordqueue = function(){

    this.myList = []


	this.enqueue = function(item){
		this.myList.push(item)

	}

	this.dequeue = function(){
		 
		 return this.myList.shift()
	}


	this.isEmpty = function(){
		if (this.myList.length == 0){
			return true 
		}
		else{
			return false
		}
	}

	this.queuesize = function(){
		return this.myList.length
	}

}

var getOneDifferents = function(word, wList) {
	var oneDifferents = [];
    
	for (var i = 0; i < wList.length; i++) {
		console.log(wList)
		var sameCh = 0;

		for (var j = 0; j < i.length; j++) {
			if (wList[i] = word[j]) {
				sameCh += 1;
			}
		}
		if (sameCh == word.length - 1) {
			oneDifferents.push(wList[i]);
		}
	}
	return oneDifferents;
}

/*reverse = function(wordList){
	mystack = new Array()
	newList = []
	for (i = 0; i <= wordList; i++){
		mystack.push(i)
	}
	for (j = 0; j <= wordList; j++){
		newList.push(mystack.pop())
	}
	return newList

}*/

wordset = function(){

	this.mySet = []

	this.addTo = function(item){
		return this.mySet.push(item)
	}

	this.contains = function(item){
		if (this.mySet.indexOf(item) != -1){
			return true
		}
		else{
			return false
		}
	}
}
wordLadder = function(){

	var startingWord = document.getElementById("wordInput").value
	var endingWord = document.getElementById("wordOutput").value
	var wordLength = document.getElementById("wordSelect")
	var wordValue = wordLength.options[wordLength.selectedIndex].value
	



	if (wordValue == "threeLetter"){
		useList = threeLetterWords
	}
	else if (wordValue == "fourLetter"){
		useList = fourLetterWords
	}
	else if (wordValue == "fiveLetter"){
		useList = fiveLetterWords
	}
	
	
    

    var thewordstack = new wordstack()
    var thewordqueue = new wordqueue()
	thewordstack.pushOnto(startingWord)
	thewordqueue.enqueue(thewordstack)


	var usedWordsSet = new wordset()
	usedWordsSet.addTo(startingWord)
    
	var done = false
	while (!done){

        var currStack = thewordqueue.dequeue()
        var topW = currStack.peek()
        var newW = getOneDifferents(topW, useList)
        


		for (i = 0; i <= newW.length; i++){
			if (usedWordsSet.contains(i) == false){
				usedWordsSet.addTo(i)
				newStack = currStack.cloneStack()
				newStack.pushOnto(i)
				if (i == endingWord){
					done = true
					
					var wordLadderSet = []
					for (j = 0; j <= newStack.length; j++){
						wordLadderSet.push(newStack.pop())
					}
				}
				thewordqueue.enqueue(newStack)
			}
		}
		if (thewordqueue.queuesize == 0){
			done = true
		}
		else{
			var printList = wordLadderSet.reverse()
			document.write(printList)

		}
	
   
	

	}
	
}