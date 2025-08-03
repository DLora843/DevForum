import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  createPost(PostData: {title: string; content: string }): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, PostData);
  }
}
