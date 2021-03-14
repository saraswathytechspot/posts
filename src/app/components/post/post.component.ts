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

  /**
   * Handle on Click of post. Show Id if userId selected.
   * Show UserId if Id selected
   */
  handleOnClick():void {
    this.postsService.updatePostSelection(this.item);
    if (this.isIdShown()) {
      this.showUserId()
    } else {
      this.showId()
    }
  }

  
  /**
   * @returns true if Id is shown currently
   */
  isIdShown():boolean {
    return this.parameterToShow === 'id'
  }

  /**
   * Show Id
   */
  showId():void {
    this.parameterToShow = 'id'
  }

  /**
   * Show UserId
   */
  showUserId():void {
    this.parameterToShow = 'userId'
  }

}
