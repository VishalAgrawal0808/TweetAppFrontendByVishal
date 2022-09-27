import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetRequest } from 'src/app/model/tweet-request';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweetText!: String
  name!: String
  tweet: any
  isSuccess: boolean = false;
  constructor(private tweetservice: TweetService, private router: Router) { }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem('userId') || '{}');
    this.router.navigate(["/post"]);
  }
  postTweet() {
    let tweetRequest = new TweetRequest(this.name, this.tweetText);
    this.tweetservice.postTweet(tweetRequest).subscribe(
      (response) => { 
        this.tweet = response;
        console.log(JSON.stringify(this.tweet));
        if(this.tweet.statusCode="200"){
         this.isSuccess = true;
          this.ngOnInit();  
        }
      },
      (error) => { console.log(error); });
  }

}
