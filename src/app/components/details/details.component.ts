import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postSrv: PostsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = +param['id'];
      console.log(id);
      this.post = this.postSrv.getPostById(id);
    });
  }
}
