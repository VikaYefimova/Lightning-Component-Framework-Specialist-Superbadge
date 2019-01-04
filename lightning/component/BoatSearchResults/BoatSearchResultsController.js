({
	doSearch : function(component, event, helper) {
        console.log("hi in search method");
        var params = event.getParam('arguments');
        component.set("v.boatTypeId", params.boatTypeId);
        console.log('boat type id in search results component : ' + params.boatTypeId);
        helper.onSearch(component, event);
	},
    doInit : function(component, event, helper){
        console.log("hi in search method");
		//var params = event.getParam('arguments');
        component.set("v.boatTypeId", '');
        helper.onSearch(component, event);
    },
    onBoatSelect : function(component, event, helper){
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    }
})