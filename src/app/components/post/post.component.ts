import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() item:Post = null;
  isIdSelected:boolean = true;
  faUser= faUser;
  parameterToShow: string= 'id';

  constructor(public postsService: PostsService) { }


  ngOnInit(): void {
  }

  handleOnClick() {
    this.isIdSelected = !this.isIdSelected;
    this.isIdSelected ? this.parameterToShow = 'id': this.parameterToShow = 'userId'
  }

}
