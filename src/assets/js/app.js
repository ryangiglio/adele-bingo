function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.slice(0);
}

// min: inclusive
// max: exclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// The songs!
var songs = [
  //'Hello',
  'Water Under the Bridge',
  'One and Only',
  'Hometown Glory',
  'Chasing Pavements',
  'All I Ask',
  'Set Fire to the Rain',
  'Daydreamer',
  'Skyfall',
  'Someone Like You',
  'Million Years Ago',
  'When We Were Young',
  'Rolling in the Deep'
];

// An array to hold the shuffled songs
var shuffledSongs = shuffle(songs);

var regenerateTable = function() {
  squares = document.getElementsByClassName('square');

  for ( var i = 0; i < squares.length; i++ ) {
    square = squares[i];

    // If there are no songs left
    if ( shuffledSongs.length <= 0 ) {
      // Re-shuffle the array
      shuffledSongs = shuffle(songs);
    }

    // Get a random song in the array
    songIndex = getRandomInt( 0, shuffledSongs.length );

    // Insert that song into this square
    square.innerHTML = shuffledSongs[songIndex];

    // Remove that song from the array
    shuffledSongs.splice(songIndex, 1);
  }
}

$(document).ready(function() {
  regenerateTable();

  $('#regenerate').on('click', function(e) {
    e.preventDefault();

    regenerateTable();
  });
});
