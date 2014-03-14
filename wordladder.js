var wordStack = function() {
	var stackList = [];

	this.stackPush = function(item) {
		stackList.push(item);
		return;
	}

	this.stackPop = function(item) {
		return stackList.pop();
	}

	this.peek = function() {
		return stackList[stackList.length - 1];
	}

	this.isEmpty = function() {
		if (stackList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return stackList.length;
	}

	this.clone = function() {
		var newList = stackList.slice(0);
		var newStack = new wordStack();

		for (var i = 0; i < newList.length; i++) {
			newStack.stackPush(newList[i]);
		}

		return newStack;
	}

	this.show = function() {
		return stackList;
	}
};
var wordQueue = function() {
	var queueList = [];

	this.enqueue = function(item) {
		queueList.push(item);
		return;
	}

	this.dequeue = function() {
		var removed = queueList.splice(0,1);
		return(removed[0]);
	}

	this.isEmpty = function() {
		if (queueList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return queueList.length;
	}
};

var getDiffers = function(word, wordList) {
	var differs = [];
	

	for (var i = 0; i < wordList.length; i++) {
		var same = 0;
		for(var j = 0; j < wordList[i].length; j++) {
			if (wordList[i][j] == word[j]) {
				same += 1;
			}
		}		
		if (same == word.length - 1) {
			differs.push(wordList[i]);
		}
	}
	return differs;
};


var usedSet = function() {
	var setList = [];

	this.addToSet = function(item) {
		setList.push(item);
		return;
	}

	this.usedInSet = function(item) {
		var foundItem = false;

		for (var i = 0; i < this.setList.length; i++) {
			if (setList[i] == item) {
				foundItem = true;
			}
		}
		return foundItem;
	}
};

var wordLadder = function() {

	var startingWord = document.getElementById("wordInput").value;
	var endingWord = document.getElementById("wordOutput").value;
	var wordLength = document.getElementById("wordSelect");
	var wordVal = wordLength.options[wordLength.selectedIndex].value;

	if (wordVal == 3) {
		var useList = threeLetterWords;
	} else if (wordVal == 4) {
		var useList = fourLetterWords;
	} else {
		var useList = fiveLetterWords;
	}

	var queue = new wordQueue();
	var stack = new wordStack();
	stack.stackPush(startingWord);
	queue.enqueue(stack);


	usedWords = new usedSet();
	usedWords.addToSet(startingWord);

	var done = false;
	var found = false;

	while (!done) {
		var currentStack = queue.dequeue();
		var topWord = currentStack.peek();
		var newWords = getDiffers(topWord, useList)

		for (var i = 0; i < newWords.length; i++) {
			var inUsedWords = false;
			
			for (var j = 0; j < usedWords.length; j++) {
				if (newWords[i] == usedWords[j]) {
					inUsedWords = true;
				}
			}

			if (!inUsedWords) {
				usedWords.addToSet(newWords[i]);
				var newStack = currentStack.clone();
				newStack.stackPush(newWords[i]);

				if (newWords[i] == endingWord) {
					done = true;
					found = true;
					var finalLadder = newStack.show();
				}

				queue.enqueue(newStack);
			}		
		}
	
		if (queue.size() == 0) {
			done = true;
			found = false;
		}
	}

	if (found == true) {
		
		var finalString = "";
		
		for (var i = 0; i < finalLadder.length; i++) {
			finalString += "<p>" + finalLadder[i] + "</p>";
		}
		
		document.getElementById("wordLadderSet").innerHTML = finalString;

	}
	else {
		var exceptionAlert = "There is no Word Ladder to be found."
		document.getElementById("wordLadderSet").innerHTML = exceptionAlert
	}
	return;
}