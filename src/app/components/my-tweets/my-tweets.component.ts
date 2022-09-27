import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';
import * as moment from 'moment';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {
  get: any
  del!: String
  tweetExist: boolean = false;
  message: String="No tweet found";
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getUserTweet().subscribe(
      (response) => {
        this.get = response;
        if (this.get === null) {
          this.tweetExist = true;
          this.message = "No tweet found"
        }
      },
     
      (error) => {
        console.log(error);
        this.get = error;
        if(this.get.statusCode===500)
          this.message = "No tweet found"
      });
  }
  delete(del: String) {
    this.tweetService.deleteTweet(del).subscribe(
      (response) => {
        this.get = response;
        if (this.get.response = "Tweet Deleted") {
          alert("Tweet Deleted Successfully!!!")
        }
      },
      
      (error) => { console.log(error); });
  }

  getPostedTweeetTime(postedDate : Date) {
    if(postedDate != null) {
      return moment(postedDate).fromNow();
    }
    return null;
  }
}
