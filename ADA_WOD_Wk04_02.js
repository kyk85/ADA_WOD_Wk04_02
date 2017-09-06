function isPalindrome(x) {
  //Get user input
	var x = document.getElementById("userInput2").value;
  //Convert and use lower case for comparison, but maintain input for result string
  var u = x.toLowerCase();
  //Reverse string
	var y = u.split("");
	var z = y.reverse();
  var t = z.join("");
  var result = document.getElementById("answer2");
  //Compare reversed string with user input (converted to lowercase)
  if (t == u) {
    result.innerHTML= x + " is a Palindrome."
  } else {
    result.innerHTML= x + " is not a Palindrome."
  };
}