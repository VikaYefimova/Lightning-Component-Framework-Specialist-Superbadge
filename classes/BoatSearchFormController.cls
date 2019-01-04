public class BoatSearchFormController {
	@AuraEnabled
    public static List<BoatType__c> getBoatsTypes(){
        return [select id, Name from BoatType__c];
    }
}