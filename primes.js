primeList = function(){
    var num = document.getElementById("primeInput").value
    var lst = new Array()
	for (i = 2; i <= num; i++) {
		 primeNum = true;
		 for (j = 2; j < i; j++){
		 	if (i%j == 0){
		 		primeNum = false
		 	}


		 	   
		 	}
		 	if (primeNum){
		 		lst.push(i)
		 	}
		 	
		 }
		
		return lst
		 


}

isPrime = function(number){
	for (i=2; i < number; i++){
		if ((number % i) == 0){
			return false 
		}
	}
	return true
}



var primeFactors = function(){
	
	var possiblePrimes = primeList()
	var primeFactorsList = []
	var n = 0
	var primeFound = false 
	var num = document.getElementById("primeInput").value
    while (!isPrime(num)){

	   while (n < possiblePrimes.length && !primeFound){
		  if (num % possiblePrimes[n] == 0){
			  primeFactorsList.push(possiblePrimes[n])
		      primeFound = true
		      num = num / possiblePrimes[n]
            
        }
        n = n + 1
	}
	n = 0
	primeFound = false
    }
	primeFactorsList.push(num)
    document.write("The prime factors are: " + primeFactorsList)
}


