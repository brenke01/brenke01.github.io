import random 
from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)
app.debug = True
@app.route('/xkcd', methods=['GET', 'POST'])
def genwords():
	return render_template('passgen.html') 



filename = open('words.txt', "r")
word = filename.read().split(",")
words = [w.replace("'", "") for w in word]


def buildlist():
	
	possiblewords = []
	usedindex = []
	value = request.form.getlist('limit')
	while len(possiblewords) < 4:
		randomindex = random.randrange(0,len(words))
		if randomindex not in usedindex:
			possiblewords.append(words[randomindex])
			usedindex.append(randomindex)


			#for i in range(len(value)):
				#if value[i] == "rangethree":
					#if len(words[randomindex]) > 3:
						#possiblewords.append(words[randomindex])
						#usedindex.append(randomindex)


				#if value[i] == "rangefour":
					#if len(words[randomindex]) > 4:
						#possiblewords.append(words[randomindex])
						#usedindex.append(randomindex)

				#if value[i] == "rangefive":
					#if len(words[randomindex]) > 5:
						#possiblewords.append(words[randomindex])
						#usedindex.append(randomindex)




	
	
	for i in range(len(value)):
		if value[i] == "3":
			possiblewords = [w.replace("e", "3") for w in possiblewords]
		if value[i] == "4":
			possiblewords =[w.replace("a", "4") for w in possiblewords]
		if value[i] == "1":
			possiblewords = [w.replace("i", "1") for w in possiblewords]
		if value[i] == "0":
			possiblewords =[w.replace("o", "0") for w in possiblewords]
		if value[i] == "5":
			possiblewords =[w.replace("s", "5") for w in possiblewords]

		if value[i] == "firstcap":
			possiblewords = [possiblewords[0][1].upper() + possiblewords[0][2:]] + possiblewords[1:]
		if value[i] == "secondcap":
			possiblewords = [possiblewords[0]] + [possiblewords[1][1].upper() + possiblewords[1][2:]] + [possiblewords[2]] + [possiblewords[3]]
		if value[i] == "thirdcap":
			possiblewords = [possiblewords[0]] + [possiblewords[1]] + [possiblewords[2][1].upper() + possiblewords[2][2:]] + [possiblewords[3]]		
		if value[i] == "fourthcap":
			possiblewords = [possiblewords[0]] + [possiblewords[1]] + [possiblewords[2]] + [possiblewords[3][1].upper() + possiblewords[3][2:]]
	

	possiblew = " ".join(possiblewords)
	return possiblew


@app.route('/results', methods=['GET', 'POST'])
def results():
	final = []
	for i in range(10):
		final.append(buildlist())
	return render_template('passgen2.html', passwords = final)


if __name__ == "__main__":
	app.run()