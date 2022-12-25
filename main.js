var ICONS = [
    "https://github.com/Sentropic/PassifloriChatbox/blob/master/icons/cat.png?raw=true",
    "https://github.com/Sentropic/PassifloriChatbox/blob/master/icons/tuna.png?raw=true",
];

// Set the random offset for this chat box instance
var offset = Math.floor(Math.random()*ICONS.length);

// Add hash code function to strings
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length === 0) { return hash; }
    for (var i = 0; i < this.length; i++) {
        hash = ((hash << 5) - hash) +  this.charCodeAt(i);
        hash |= 0;  // Convert to 32bit integer
    }
    return hash;
}

// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
    console.log("This chat box instance will have a random offset of "+offset);
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
    
    //console.log(obj.detail);
    
    var src = ICONS[(Math.abs(obj.detail.from.hashCode())+offset)%ICONS.length];
    //console.log(src);
    // Modify the src of the latest message's img, via a relative path
    document.getElementById("custom_icon").parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.src = src
});