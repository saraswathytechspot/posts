import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {API_URL as apiBasePath}   from '../consts/globalConsts';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})

export class PostsService {
  
  constructor(private readonly http: HttpClient) {  }

  getPosts() {
    return this.http.get<Post[]>( `${apiBasePath}/posts` )
  }  
}
