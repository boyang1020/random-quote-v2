// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// my collection of 5 quotes with source, citation, year, and tags. 
var quotes = [
    {
        quote: 'For myself, I am an optimist— it does not seem to be much use being anything else.',
        source: 'Winston Churchill',
        citation: 'speech at the Lord Mayor\'s banquet, London',
        year: '1954,',
        tags: ' Optimisim'
    },
    {
        quote: 'The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror.',
        source: 'Oscar Wilde',
        citation: 'The Picture of Dorian Gray',
        year: '1891,',
        tags: ' Optimisim'
    },
    {
        quote: 'Ah, music. A magic beyond all we do here!',
        source: 'J. K. Rowling',
        citation: 'Harry Potter and the Sorcerer\'s Stone',
        year: '1997,',
        tags: ' Music'
    },
    {
        quote: 'Aim above morality. Be not simply good; be good for something.',
        source: 'Henry David Thoreau',
        citation: 'Walden',
        year: '1854,',
        tags: ' Moral'
    },
    {
        quote: 'There must be a limit to the mistakes one person can make, and when I get to the end of them, then I\'ll be through with them. That\'s a very comforting thought.',
        source: 'L. M. Montgomery',
        citation: 'Anne of Green Gables',
        year: '1908,',
        tags: ' Mistake'
    }
];

// random color generator displays randoms colors when another quote is displayed
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

// random qupte generator 
function getRandomQuote() {

    return quotes[Math.floor(Math.random() * 5)];
}

// this prints random quote to the page with differnt properties
function printQuote() {
    var quoteBox = document.getElementById('quote-box');
    var newQuote = getRandomQuote();

    if (newQuote.citation === undefined && newQuote.year === undefined && newQuote.tags === undefined) {
        quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '</p>';

    } else if (newQuote.citation !== undefined && newQuote.year === undefined && newQuote.tags === undefined) {

        quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '<span class="citation">' + newQuote.citation + '</span>' + '</p>';
    } else if (newQuote.citation !== undefined && newQuote.year !== undefined && newQuote.tags === undefined) {
        quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '<span class="citation">' + newQuote.citation + '</span>' + '<span class="year">' + newQuote.year + '</span>' + '</p>';


    } else if (newQuote.citation === undefined && newQuote.year !== undefined && newQuote.tags === undefined) {
        quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '<span class="year">' + newQuote.year + '</span>' + '</p>';

    } else {

        quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '<span class="citation">' + newQuote.citation + '</span>' + '<span class="year">' + newQuote.year + '</span>' + '<span class="tags">' + newQuote.tags + '</span>' + '</p>';
    };


    random_bg_color();
};

// the quotes page will refresh every 30 seconds
setInterval(printQuote, 30000);