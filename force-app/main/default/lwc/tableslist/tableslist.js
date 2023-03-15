import { LightningElement ,wire,track} from 'lwc';
import getTableData from '@salesforce/apex/TableController.getTableData';
 
export default class Tableslist extends LightningElement {
   @track tableColumns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },       
        { label: 'Capacity', fieldName: 'CCXR_Capacity__c', type: 'text'},
        { label: 'Employee Name', fieldName: 'CCXR_Restaurant_Employee__c', type: 'text' },
        { label: 'Image url', fieldName: 'Table_Image_Link__c', type: 'url', typeAttributes: { target: '_blank' } },
        { label: 'Status', fieldName: 'CCXR_Table_Status__c', type: 'text' },
        { label: 'Image', fieldName: 'CCXR_Table_Image__c', type: 'custom', typeAttributes: { target: '_blank' } }
    ];
    @track errors;
    @track data ;
    @wire(getTableData) 
      gettable({error,data}){
        if (data) {
            this.data = data;
        } else if (error) {
            this.errors = undefined;
        }
    }
  
    handleRowAction(){

    }
}