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
      date:'2025-07-18',
    },
    {
      id:'2',
      title:'10 съвета за по-добър TypeScript код',
      author:'Мария Георгиева',
      date:'2025-07-19'

    },
    {
      id:'3',
      title:'Как да подобрим производителността на Angular приложение',
      author:'Георги Стоянов',
      date:'2025-07-20'
    },
    {
      id:'4',
      title:'React срещу Angular - кое да изберем?',
      author:'Светослав Димитров',
      date:'2025-07-18'
    },
    {
      id:'5',
      title:'Какво ново в ES2025',
      author:'Николай Колев',
      date:'2025-07-18'
    },
    {
      id:'6',
      title:'5 често срещани грешки в JavaScript',
      author:'Елена Иванова',
      date:'2025-07-18'
    },
  ];

  goToDetails(id: string){
    this.router.navigate(['/details', id]);
  }
}
