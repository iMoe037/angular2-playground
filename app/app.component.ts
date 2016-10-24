import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="ui top secondary menu">
    <div class="header item">{{title}}</div>
      <div class="right menu">
        <div class="ui right aligned category search item">
        <a class="item" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a class="item" routerLink="/heroes" routerLinkActive="active">Heroes</a>
          <div class="ui transparent icon input">
            <input class="prompt" type="text" placeholder="Search heroes...">
            <i class="search link icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
    </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
