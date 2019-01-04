({
	onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
        
		var boatSelectEvent = component.getEvent("BoatSelect");
        boatSelectEvent.setParams({
            "boatId": boat.Id
        });
    boatSelectEvent.fire();
        var onBoatSelectedEvent = $A.get("e.c:BoatSelected");
        onBoatSelectedEvent.setParams({
            "boat" : boat
    });
    onBoatSelectedEvent.fire();
        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        console.log("longitude: " + long);
        console.log("latitude: " + lat);
        var label = boat.Name;
        var sObjectId;
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerAppEvent.setParams({
            "lat" : lat,
            "long" : long,
            "label" : label,
            "SObjectId" : boat.Id
        });
        plotMapMarkerAppEvent.fire();
	}
})