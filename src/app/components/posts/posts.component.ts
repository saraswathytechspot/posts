import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  items: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data) => {
      this.items = this.convertToMatrix(data);
    });
  }

  generateRows(num: number): Function {
    return function (rows, key, index) {
      return (
        (index % num == 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows
      );
    };
  }

  convertToMatrix(list): Post[] {
    return list.reduce(this.generateRows(10), []);
  }
}
