({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(component, event, helper) {
        console.log("hello in event on map");
        var latitude = event.getParam('lat');
        console.log("lat " + latitude);
        
        var longitude = event.getParam('long');
        console.log("lat " + longitude);
        var label = event.getParam('label');
        if(latitude && longitude){
            component.set('v.location', {
                'lat' : latitude, 
                'long' : longitude
        	});
        }
        else if{
            component.set("v.location", null);
        }
        
        
    }
})