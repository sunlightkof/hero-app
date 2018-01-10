import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: `
    <h1>{{ title }}</h1>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">排名表</a>
    <a routerLink="/heroes" routerLinkActive="active">英雄们</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    title = '我的英雄们';
    constructor() { }

    ngOnInit() { }
}
