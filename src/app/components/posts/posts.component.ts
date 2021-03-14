import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})

export class PostsComponent implements OnInit {
  items:Observable<Post[]>

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.items = this.postsService.fetchPosts();
  }
}