import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from 'src/app/services/posts.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PostComponent ],
      providers: [HttpClientModule, PostsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if Id is shown currently', () => {
    component.isIdShown();
    expect(component.parameterToShow).toEqual('id')
  });

  it('should show id if user id is shown currently', () => {
    component.showUserId();
    expect(component.parameterToShow).toEqual('userId')
  });

  it('should show UserId if id is shown currently', () => {
    component.showId();
    expect(component.parameterToShow).toEqual('id')
  });

  it('should toggle Id and UserId', () => {
    expect(component.parameterToShow).toEqual('id')
    component.handleOnClick();
    expect(component.parameterToShow).toEqual('userId')
  });
});
