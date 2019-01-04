({
	onFormSubmit : function(component, event, helper) {
		var boatSearchResultComponent = component.find("BSRcmp");
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        console.log("boatTypeId in event handler : " + boatTypeId);
        boatSearchResultComponent.search(boatTypeId);
	}
})