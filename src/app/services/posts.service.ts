import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {API_URL as apiBasePath}   from '../consts/globalConsts';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})

export class PostsService {
  private readonly _isIdShown = new BehaviorSubject<boolean>(true);
  private selectedPost = new BehaviorSubject<Post>(null);
  selectedPostDetails = this.selectedPost.asObservable();
  
  constructor(private readonly http: HttpClient) {  }


  getPosts() {
    return this.http.get<Post[]>( `${apiBasePath}/posts` )
  }

  
}
