({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam("boat");
        component.set("v.id", boat.Id);
        component.set("v.boat", boat);
        console.log("event handler component boat details : " + boat.Id);
        component.find("service").reloadRecord();
	},
    onRecordUpdated : function(component, event, helper){
        if(component.find("boatreviews")){
            component.find("boatreviews").refresh();
        }
        
    },
    onBoatReviewAdded : function(component, event, helper) {
        component.set('v.selectedTabId', 'boatreviewtab');
        component.find("boatreviews").refresh();
    },
    onFormSubmit : function(component, event, helper){
        console.log("hello in handler form ubmit");
        component.set("v.boat", null);
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerAppEvent.setParams({
            "lat" : undefined,
            "long" : undefined,
            "label" : undefined,
            "SObjectId" : undefined
        });
        plotMapMarkerAppEvent.fire();
    }
})