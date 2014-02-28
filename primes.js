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
		
		document.write("The primes of " + num + " are: " + lst)
		 


}

 