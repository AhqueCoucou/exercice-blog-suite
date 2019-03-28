import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
	constructor() {
    	this.getPosts();
	}

	posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

	createNewPost(newPost: Post) {
		this.posts.push(newPost);
		this.savePosts();
		this.emitPosts();
	}

	removePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
		(postEl) => {
			if(postEl === post) {
				return true;
			}
		});

		this.posts.splice(postIndexToRemove, 1);
		this.savePosts();
		this.emitPosts();
	}

	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	savePosts() {
    	firebase.database().ref('/posts').set(this.posts);
	}

	getPosts() {
		firebase.database().ref('/posts')
		.on('value', (data: DataSnapshot) => {
			this.posts = data.val() ? data.val() : [];
			this.emitPosts();
		});
	}

	increaseLoveIts(post: Post) {
		const postIndexToIncrease = this.posts.findIndex(
		(postEl) => {
			if(postEl === post) {
				return true;
			}
		});

		this.posts[postIndexToIncrease].loveIts = this.posts[postIndexToIncrease].loveIts + 1;
		this.savePosts();
		this.emitPosts();
	}

	decreaseLoveIts(post: Post) {
		const postIndexToDecrease = this.posts.findIndex(
		(postEl) => {
			if(postEl === post) {
				return true;
			}
		});

		this.posts[postIndexToDecrease].loveIts = this.posts[postIndexToDecrease].loveIts - 1;
		this.savePosts();
		this.emitPosts();
	}
}
