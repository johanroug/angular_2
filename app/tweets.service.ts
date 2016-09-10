import { Injectable } from '@angular/core';

@Injectable()
export class TweetsService {
  public getTweets() {
    return [
      {
        img: "http://lorempixel.com/100/100/people/?1",
        name: "Johan",
        email: "fake1@gmail.com",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        like: {
          count: 24,
          liked: false
        }
      },
      {
        img: "http://lorempixel.com/100/100/people/?2",
        name: "female 2",
        email: "fake2@gmail.com",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptate enim provident ipsum accusantium ",
        like: {
          count: 240,
          liked: false
        }
      },
      {
        img: "http://lorempixel.com/100/100/people/?3",
        name: "male 2",
        email: "fake3@gmail.com",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptate enim provident ipsum accusantium minima et",
        like: {
          count: 33,
          liked: true
        }
      }
    ]
  }
}
