import { LightningElement,api,wire } from 'lwc';
import specialItems from '@salesforce/apex/GetSpecialItems.getTodaySpecialMenu';
export default class DisplayItems extends LightningElement {
    @api recordId;

    //Speacial Items
        items;
        @api errors;
        @api imageURL;
        @wire(specialItems,{})
        wiredSpeacialItems({ error, data }) {
            if (data) {
                this.items = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

        handleClick(event) {
            // Handle detail button click here
        }
}