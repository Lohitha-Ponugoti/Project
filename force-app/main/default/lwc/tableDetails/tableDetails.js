import { LightningElement,wire,api,track} from 'lwc';
import getTableData from '@salesforce/apex/TableController1.getTableData';
export default class tableDetails extends LightningElement 
{
    @api status
    @api className
    @api status3class
    @track status3
   /* handleChange(event){
        this.status3=event.target.value;
        if(status3==="Occupied"){
            this.status3class='red';
           
        }
        else 
        this.status3class='green';
    }*/
   

    /*get statusClassName() {
        return this.className ? 'status ' + this.className : 'status'
    }*/
    
    @track recordId;
    @track tables;
    @track status2;
    
    @wire(getTableData)
    wiredContacts({ error, data }) {
        if (data) {
            this.tables = data;
        } else if (error) {
            console.error(error);
        }
    }
    get statusColor() {
        return `slds-col slds-size_1-of-10 slds-text-align_right slds-text-title_bold ${
            this.tables.CCXR_Table_Status__c == "Vacant" ? "vacant" : "occupied"
          }`;
          /*return this.className ? 'alert ' + this.className : 'alert'*/
        }
       
        
}