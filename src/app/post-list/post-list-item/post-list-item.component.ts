import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	
constructor(private postsService: PostsService) { }
	
	@Input() post: Post;

	ngOnInit() { }

	onIncreaseLoveIts() {
		this.postsService.increaseLoveIts(this.post);
	}

	onDecreaseLoveIts() {
		this.postsService.decreaseLoveIts(this.post);
	}

	onDeletePost() {
		this.postsService.removePost(this.post);
	}
}
