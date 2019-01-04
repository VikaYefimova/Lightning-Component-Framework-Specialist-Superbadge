({
	doInit : function(component, event, helper) {
		var renderNewButton = $A.get("e.force:createRecord");
        if(renderNewButton){
            component.set("v.renderNew", true);
        }
        var action = component.get("c.getBoatsTypes");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
            console.log("responce : " + JSON.stringify(response.getReturnValue()));
            component.set("v.boattypes", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
	},
    createNewRecord : function(component, event, helper){
    	var createRecordEvent = $A.get("e.force:createRecord");
        var selectedType = component.get("v.selectedType");
        if(selectedType != ''){
            createRecordEvent.setParams({
                "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    'BoatType__c' : selectedType
                }
            });
        }
        else if(selectedType === ''){
            createRecordEvent.setParams({
                "entityApiName": "Boat__c"
            });
        }
        createRecordEvent.fire();
	},
    handleChange : function(component, event, helper){
        var selectedValue = component.find("boatType").get("v.value");
        console.log("selected value" + selectedValue);
        component.set("v.selectedType", selectedValue);
        console.log("selected attribute value =   " + component.get("v.selectedType"));
    },
    onFormSubmit : function(component, event, helper){
        var selectedBoatTypeId = component.get("v.selectedType");
        console.log('selectedBoatTtypeId' + selectedBoatTypeId);
        var formSubmitEvent = $A.get("e.c:FormSubmit");
        formSubmitEvent.setParams({
            "formData":{"boatTypeId" : selectedBoatTypeId}
        });
        formSubmitEvent.fire();
    }
})