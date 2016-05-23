// var string = prompt("Write a sentence.")


function letterCapitalize(sentence){
	var capSentence = []
	capSentence[0] = sentence[0].toUpperCase()
	for (var i = 1; i < sentence.length; i++) {
		// console.log(sentence.indexOf(" ",i))
		// while (sentence.indexOf(" ",i) >=0){
			if (sentence.indexOf(" ",i) == i){
				capSentence[i] = sentence[i]
				capSentence[i+1] = sentence[i+1].toUpperCase()
				i++
			}
			else{
				capSentence[i] = sentence[i]
			}
		// }
	}
	var string = capSentence.join("")
	console.log(string)
	console.log(capSentence.toString())
	return string
}
//alert(letterCapitalize(string))

function letterCapitalizeBetter(sentence){
	var words = sentence.split(" ")
	var capwords = words.map(function(element){

		element = element.split("")
		element.unshift(element.shift().toUpperCase())
		element = element.join("")
		return element
	})
	var string = capwords.join(" ")
	console.log(string)
	return string
}
// letterCapitalizeBetter("this is a sentence")

//wordcount

function wordCount(sentence){
	var words = sentence.split(" ")
	return words.length
}
wordCount("this is a sentence")