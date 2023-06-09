import { LightningElement,api,track,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/customTable.getAllAccounts';
import updatecheforderstatus from '@salesforce/apex/customTable.updatecheforderstatus';
import getAccountNames from '@salesforce/apex/customTable.getAccountNames';

export default class Cheforderscreen extends LightningElement {
    @api records;
    @api errors;
    @api itemId;
    @api chefidd;
    @api accountName
    @track showButton=true;
    @track showButton1=false;
    accountOptions = [];
    @wire(getAllAccounts,{ } )
    wiredCases({data,error}){
    if(data)
    {
        this.records = data;
        this.errors = undefined;
    }
    if(error)
    {
        this.errors = error;
        this.records = undefined;
        }
    }
    handleSelection(event) 
    {
      this.chefidd = event.target.value;
      
      
    }
     handleButtonClick(event) 
     {
        alert('kumaraaa');
       //this.showButton=false;
       //this.showButton1=true;
        alert(this.chefidd);
       
        this.itemId = event.target.value;
       updatecheforderstatus({cat:this.itemId,cat1:this.chefidd})
          this.handleRefresh();
        const record = this.records.find((rec) => rec.Id === this.itemId);
        record.Order_status__c = 'Accepted';
        record.AcceptButtonDisabled = true;
        record.ReadyButtonDisabled = false;
          
    }
    handleButtonClick11(event)
    {
        
        this.showButton1=false;

    }   
  connectedCallback() 
    {
      getAccountNames({accountName:this.itemId})
      .then(result => {
        this.accountOptions = result.map(account => ({
          label: account.Name+' , '+account.CCXR_Name__c+' , '+account.CCXR_Type_Of_Chef__c,
          value: account.Id
        }));
      })
      
    }
    
    
    handleMouseOver()
    {
        

      getAccountNames({accountName:this.itemId})
      .then(result => {
        this.accountOptions = result.map(account => ({
          label: account.Name+' , '+account.CCXR_Name__c+' , '+account.CCXR_Type_Of_Chef__c,
          value: account.Id
        }));
      })

    }

    
}