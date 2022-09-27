import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';
import * as moment from 'moment';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(private tweet: TweetService) { }
  get: any;
  ngOnInit() {
    this.tweet.getAllTweets().subscribe(
      (response) => { this.get = response;
        console.log(JSON.stringify(this.get));
       },
      // (response) => { console.log(response); },
      (error) => { console.log(error); });
  }
  getPostedTweeetTime(postedDate : Date) {
    if(postedDate != null) {
      return moment(postedDate).fromNow();
    }
    return null;
  }
  
}
