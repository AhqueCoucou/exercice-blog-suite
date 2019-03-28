export class Post {
	public loveIts: number;
	public created_at: number;

	constructor(public title: string, public content: string) { 
		this.loveIts = 0;
		this.created_at = Date.now();
	}
}