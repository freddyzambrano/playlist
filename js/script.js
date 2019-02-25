/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Respect", 
    "Girl on Fire", 
    "The List", 
    "Take on Me"
];
var images_links = [
    "images/respect.jpeg", 
    "images/girl-on-fire.jpeg", 
    "images/the-list.jpeg", 
    "images/take-on-me.jpeg"
];
var artists = [
    "Aretha Franklin", 
    "Alicia Keys", 
    "Moonchild", 
    "A-ha"
];
var songLengths = [
    "2:30", 
    "3:52", 
    "5:10", 
    "3:47"
];
var links = [
    "https://www.youtube.com/watch?v=6FOUqQt3Kg0", 
    "https://www.youtube.com/watch?v=J91ti_MpdHA", 
    "https://www.youtube.com/watch?v=1eDvtvdoxJE", 
    "https://www.youtube.com/watch?v=djV11Xbc914"
];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function (song){
	    $("#songs").append("<li>" + song + "</li>"); 
    });

    images_links.forEach(function (imglink){
	    $("#images").append("<img src=" + imglink + ">"); 
    });
    
    artists.forEach(function (art){
	    $("#artists").append("<li>" + art + "</li>"); 
    });
    
    songLengths.forEach(function (sngL){
	    $("#lengths").append("<li>" + sngL + "<li>"); 
    });
    
    links.forEach(function (link){
	    $("#links").append("<a href='" + link + "'>" + "Click Here" + "</a>"); 
    });

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
