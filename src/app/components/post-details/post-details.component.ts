import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  selectedItem: Post;

  constructor(public postsService: PostsService) {  }

  ngOnInit(): void {
    this.postsService.selectedPostDetails.subscribe((data:Post) => {
      this.selectedItem = data;
    })
  }

}
