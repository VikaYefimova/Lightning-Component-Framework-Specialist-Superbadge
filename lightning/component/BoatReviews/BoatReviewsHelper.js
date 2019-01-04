({
	onInit : function(component, event) {
		var boat=component.get("v.boat");
        console.log("id " + boat.Id);
        var action = component.get("c.getAll");
        action.setParams({
            "boatId" : boat.Id 
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state==="SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
                console.log("response :  " + JSON.stringify(response.getReturnValue()));
                console.log('response in component attribute' + JSON.stringify(component.get("v.boatReviews")));
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
	}
})