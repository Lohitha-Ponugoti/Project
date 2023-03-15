public class Order_Creation 
{
    public static List<CCXR_Customer_Table_Status__c> createOrderAndOrderLines()
    {
        list<CCXR_Customer_Table_Status__c> customers =[select Name,
                                                        CCXR_Table__r.Name,
                                                        CCXR_Customer__r.Name 
                                                        from CCXR_Customer_Table_Status__c];
        list<CCXR_Order__c> placedorder = new list<CCXR_Order__c>();
        list<CCXR_Order__c> allord = [select CCXR_Customer__c,CCXR_Table__c from CCXR_Order__c
                                      where CCXR_Customer__c!= null AND CCXR_Table__c!= null ];
        for(CCXR_Order__c ord1:allord)
        {
             if(ord1 == null)
        {
            CCXR_Order__c neword = new CCXR_Order__c();
            neword.CCXR_Order_Status__c='Progress';
            CCXR_Order_Line_Item__c newordlineitem = new CCXR_Order_Line_Item__c();
            newordlineitem.CCXR_Order_ID__c = neword.Id;
            system.debug(neword);
        }
            
        }
       
         return customers;
    }
    

}