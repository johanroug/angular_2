import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2</h1>
    <zippy title="This is the title">
      Here is the content        
    </zippy>
    <zippy title="This is another the title">
      Here is another content        
    </zippy>
  `
})
export class AppComponent {}
