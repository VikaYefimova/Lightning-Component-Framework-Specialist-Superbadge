({
	onSearch : function(component, event) {
        var boatTypeId = component.get("v.boatTypeId");
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId:boatTypeId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.boats", response.getReturnValue());
                console.log("boats:    " + JSON.stringify(component.get("v.boats")));
            }
            else{
                console.log("Failed " + state);
            }
        });
        $A.enqueueAction(action);
	}
})