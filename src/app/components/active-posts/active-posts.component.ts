import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postSrv: PostsService, private router: Router) {}

  async ngOnInit() {
    const posts = await this.postSrv.recuperaPosts();
    this.posts = posts;
  }

  onInactivePost(id: number, i: number) {
    this.postSrv.updatePost({ active: false }, id);
    this.posts.splice(i, 1);
  }

  onDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
