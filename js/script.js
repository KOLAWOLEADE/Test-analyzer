// To check for empty str

// if (text.length === 0) {

//     return 0
// }



function wordCounter(text) {
    if (text.trim().length === 0) {

        return 0
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(word) {
        // logic to check for number

        if (!Number(element))
      wordCount++;
    });
    return wordCount;
  }