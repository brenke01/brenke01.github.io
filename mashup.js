var mapProp
var map

function initialize()
{
mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function pinCity(){
var geocoder =  new google.maps.Geocoder();
    var loc = document.getElementById("city").value
    geocoder.geocode( { 'address': loc}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);

            var marker = new google.maps.Marker({
            	position: results[0].geometry.location
            }) 
            marker.setMap(map);

         var wikipediaHTMLResult = function(data) {
        //Split the HTML from the parse returned
            myHTML = data.parse.text["*"]
            //var readData = $('<div>' + data.parse.text["*"] + '</div>');
            //console.log(myHTML)
            //Change the output div to the HTML page
            $("#output").html(myHTML);
            //console.log(myHTML)
        };
     //Getting the actual data from Wikipedia
        function callWikipediaAPI(wikipediaPage) {$.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&redirects&callback=?", {page:wikipediaPage, prop:"text"}, wikipediaHTMLResult);}
     
          //loc = document.getElementById("city").value
          callWikipediaAPI(loc);          
          } else {
            alert("Please enter a valid city" + status);
          }
        });
}
