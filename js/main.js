
$(document).ready(function() {
    var zipcode = "60004";
    geoLookup(zipcode);
});

function geoLookup(zipcode) {
    if(!isValidUSZip(zipcode)) {
	console.log("not a valid zip code");
	return;
    }
    var geolookupURL = "http://api.wunderground.com/api/2cf4437346dc32a8/geolookup/q/" + zipcode + ".json"; 
    console.log("lookup url: " + geolookupURL);
    $.ajax({
	type: "GET",
	url: geolookupURL,
	dataType:"jsonp",
	success: function(geodata){
	    console.log(geodata)
	}
    });
}

function isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
}