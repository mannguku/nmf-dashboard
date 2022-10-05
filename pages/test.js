
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.cellSpacing = [20, 20];
        this.mediaQuery = 'max-width: 700px';
        this.panels = [
            { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
            { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
            { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
            { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
            { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
        ];
    }
    render() {
        return (<div>
      <div id='container'>
        <DashboardLayoutComponent id='defaultLayout' columns={5} cellSpacing={this.cellSpacing} panels={this.panels} mediaQuery={this.mediaQuery}/>
      </div>
    </div>);
    }
}