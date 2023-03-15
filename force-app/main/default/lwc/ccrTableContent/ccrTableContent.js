import { LightningElement,track,api,wire } from 'lwc';
import deleteTables from '@salesforce/apex/EmployeeData.deleteTable';
import getTables from '@salesforce/apex/TableController.getTableData';

export default class CcrTableContent extends LightningElement {

    @track getTab;
    @api drecordId;
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    @track showModalBox1 = false;
    showComp1() {
        this.showModalBox1 = true;
    }

    
    @wire(getTables)
    WiredItems({
         error,
         data
     }) {
         if (data) {
             this.getTab = data;
         } else if(error) {
             this.error = error;
         }
     }

    handleDelete(event) 
        {
            this.drecordId=event.target.value;
            deleteTables({tabRecordId:this.drecordId})
              .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record deleted successfully.',
                            variant: 'success'
                        })
                    );
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'Error deleting record: ' + error.body.message,
                            variant: 'error'
                        })
                    );
                });
                
        }
}