import {Injectable} from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn:"root",
})

export class ShareService{
    constructor(){

    }

    private bookDataSubject = new Subject<Object>();
    public setBookDataEvent = this.bookDataSubject.asObservable();
    public selectedGenreId: string = ''; 

    public SetBookData(data:any){
        this.bookDataSubject.next(data);
    }
}