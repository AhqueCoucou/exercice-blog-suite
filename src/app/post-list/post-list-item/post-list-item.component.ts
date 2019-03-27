import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() created_at: Date;

	ngOnInit() { }

	onIncreaseLoveIts() {
		this.loveIts = this.loveIts + 1;
	}

	onDecreaseLoveIts() {
		this.loveIts = this.loveIts - 1;
	}
}
