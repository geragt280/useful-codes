import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import { PrimaryButton, TextField } from 'office-ui-fabric-react';

export default class Dialog extends BaseDialog {

    constructor(){
      super();
    }

    DialogContext = () : React.JSX.Element => {
      return (
        <div >
          <h3>Enter Value</h3>
          <div style={{margin:10}}>
            <TextField placeholder='Enter required field' />
          </div>
          <div style={{ width:'100%', textAlign:'center' }}>
            <PrimaryButton text='Do Something' onClick={this.close} />
          </div>
        </div>
      )
    }
    
    public render(): void {
      ReactDOM.render(
      <div style={{margin:10}}>
        <this.DialogContext />
      </div>
      , this.domElement);
    }
  
    public getConfig(): IDialogConfiguration {
      return { isBlocking: false };
    }
  
    protected onAfterClose(): void {
      super.onAfterClose();
  
      // Clean up the element for the next dialog
      ReactDOM.unmountComponentAtNode(this.domElement);
    }
  }
