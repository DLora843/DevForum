import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
 
  constructor(private router: Router) {}

  items = [
    {
      id:'1',
      title:'Как да използваме Angular Router?',
      author:'Иван Младенов',
      content:`Angular Router е модул, който позволява навигация между различни компоненти.\n
      Можеш да дефинираш пътища, да използваш параметри (като /details/:id) и да правиш lazy loading.`,
      date:'2025-07-18'
    },
    {
      id:'2',
      title:'10 съвета за по-добър TypeScript код',
      author:'Мария Георгиева',
      content:`TypeScript предлага типизация и по-лесна поддръжка на кода.\n
      Използвай интерфейси, избягвай any и се възползвай от generics`,
      date:'2025-07-19'
    },
    {
      id:'3',
      title:'Как да подобрим производителността на Angular приложение',
      author:'Георги Стоянов',
      content:`Оптимизацията може да включва\n:
      - Lazy loading на модули\n
      - Промяна на Change Detection стратегия\n
      - Използване на trackyBy в *ngFor\n
      - Минимизиране на DOM операции.`,
      date:'2025-07-20'
    },
    {
      id:'4',
      title:'React срещу Angular - кое да изберем?',
      author:'Светослав Димитров',
      content:`React е библиотека, докато Angular е цялостен фреймуърк.\n
       Изборът зависи от нуждите: React за по-леки проекти, Angular за мащабни приложения.`,
      date:'2025-07-18'
    },
    {
      id:'5',
      title:'Какво ново в ES2025',
      author:'Николай Колев',
      content:`ES2025 носи нови функции като pattern matching,\n
      подобрена работа с асинхронни итератори\n
      и оптимизации за по-добра производителност.`,
      date:'2025-07-18'
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
      date:'2025-07-18'
    },
  ];

  goToDetails(id: string){
    this.router.navigate(['/details', id]);
  }
}
