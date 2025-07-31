import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable,tap } from "rxjs";
import { Post} from "../../models/post.model";

@Injectable({
    providedIn: 'root' 
})
export class PostService {
     private apiUrl = 'http://localhost:3000/api';
    private postsBehaviourSubject = new BehaviorSubject<Post[]>([]);

    public posts$ = this.postsBehaviourSubject.asObservable();
    
    constructor(private httpClient: HttpClient) {}

    getPosts(limit: number = 5): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${this.apiUrl}/posts?limit={0}`.replace('{0}', 
            limit.toString()))
        .pipe(
           tap(posts => this.postsBehaviourSubject.next(posts)) 
        );
    }

    createPost(themeName: string, postText: string): Observable<Post> {
        const body = JSON.stringify({themeName, postText});
        return this.httpClient.post<Post>(`${this.apiUrl}/posts`, body, {
            headers: 
            { 'Content-Type': 'application/json'
            }
        });
    }
}