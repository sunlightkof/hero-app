import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: '李白' },
  { id: 12, name: '花木兰' },
  { id: 13, name: '钟无艳' },
  { id: 14, name: '孙悟空' },
  { id: 15, name: '孙尚香' },
  { id: 16, name: '狄仁杰' },
  { id: 17, name: '鲁班' },
  { id: 18, name: '雅典娜' },
  { id: 19, name: '程咬金' },
  { id: 20, name: '露娜' }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄目录';
  hero: Hero = {
    id: 1,
    name: '暴风'
  };
  heroes = HEROES;
}
