public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId != ''){
            return [select Id, Name, Contact__r.Name, picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s From Boat__c where BoatType__c =: boatTypeId];
        }
        else{
            return [select Id, Name, Contact__r.Name, picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s From Boat__c];
        }
    }
}