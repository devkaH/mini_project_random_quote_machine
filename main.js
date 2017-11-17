const $ = window.$
var myQuote = [ {quote: 'Nothing preaches better than the act! ', auteur: 'Benjamin Franklin'},
{quote: 'Example is not the main thing in influencing others. It is the only thing!', auteur: 'Albert Schweitzer'},
{quote: 'The road to learning by precept is long, but by example short and effective.', auteur: 'Seneca'}]

// choose a random quote from list myQuote
function newQuote () {
  var item = Math.floor((Math.random() * myQuote.length))
  return item
}

$(document).ready(function () {
  $('button').click(function () {
    index = newQuote()
    $('.quote').html(myQuote[index].quote)
    $('.auteur').html(myQuote[index].auteur)
    $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + myQuote[index].quote + ' ' + myQuote[index].auteur)
  })
})
