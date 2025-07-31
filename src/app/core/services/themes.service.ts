import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Theme } from "../../models";

@Injectable({
    providedIn: 'root' 
})
export class ThemesService {
    private apiUrl = 'http://localhost:3000/api/themes';
    private themesBehaviouSubject = new BehaviorSubject<Theme[]>([]);

    public themes$ = this.themesBehaviouSubject.asObservable();

    constructor(private httpClient: HttpClient) {}

    getThemes(): Observable<Theme[]> {
        return this.httpClient.get<Theme[]>(this.apiUrl)
        .pipe(
            tap(themes => this.themesBehaviouSubject.next(themes))
        );
    }
}