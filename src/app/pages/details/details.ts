import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details {

  posts =[
    {
      id: '1',
      title: 'Как да използваме Angular Router?',
      author: 'Иван Младенов.',
      content:`Angular Router позволява навигация между различни компоненти в едностранични приложения (SPA).
      С него можеш: \n
      Да създаваш маршрути към различни компоненти. \n
      Да предаваш параметри чрез URL (например /details/:id). \n
      Да използваш Guards за защита на определени маршрути. \n
      Да зареждаш модулите lazy (lazy loading) за по-добра производителност. \n
      Да следиш състоянието на историята на браузъра и да навигираш обратно. \n`,
      date:'2025-07-18',
      image: '/images.png'
    },
    {
      id:'2',
      title:'10 съвета за по-добър TypeScript код',
      author:'Мария Георгиева',
      content:`TypeScript предоставя типизация, която ни помага да избегнем много често срещани грешки.
      В тази статия ще обсъдим 10 практични съвета за писане на чист и поддържащ се код:
      1. Използвайте интерфейси и типове
      2. Избягвайте any
      3. Активирайте строг режим
      4. Използвайте enums
      5. ...`,
      date:'2025-07-19',
      image: '/ts.png'
    },
    {
      id:'3',
      title:'Как да подобрим производителността на Angular приложение',
      author:'Георги Стоянов',
      content:`Оптимизацията на Angular приложения е ключова за по-добро потребителско изживяване.
      Ще разгледаме техники като lazy loading на модули, OnPush change detection, 
      оптимизация на шаблони и използване на trackBy в ngFor директиви.`,
      date:'2025-07-20',
      image: '/angular.png'
    },
    {
      id:'4',
      title:'React срещу Angular - кое да изберем?',
      author:'Светослав Димитров',
      content:`React е библиотека, докато Angular е цялостен фреймуърк.\n
      Изборът зависи от нуждите: React за по-леки проекти, Angular за мащабни приложения.`,
      date:'2025-07-18',
      image: '/react.jpg'
    },
    {
      id:'5',
      title:'Какво ново в ES2025',
      author:'Николай Колев',
      content:`ES2025 носи нови функции като pattern matching,\n
      подобрена работа с асинхронни итератори\n 
      и оптимизации за по-добра производителност.,`,
      date:'2025-07-18',
      image: '/es.png'
    },
    {
      id:'6',
      title:'5 често срещани грешки в JavaScript',
      author:'Елена Иванова',
      content:`1. Забравяне на let/const\n
      2. Грешки при работа с async/await\n
      3. Неизползване на strict mode\n
      4. Липса на обработка на грешки\n
      5. Неправилно използване на this.`,
      date:'2025-07-18',
      image: '/es.jpg'
    },
  ];
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.posts.find(p => p.id === id);
  }
}

