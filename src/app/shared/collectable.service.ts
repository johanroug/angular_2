import { Collectable } from './collectable.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectableService {
  private collectables: Collectable[] = [
    { description: "1", type: "book" },
    { description: "2", type: "garbage" },
    { description: "3", type: "photo" },
    { description: "4", type: "piece of paper" }
  ];

  private collection: any = [];

  getCollectables() {    
    return this.collectables; 
  }

  getCollection() {     
    if (localStorage.getItem("johan") !== null) {
      this.collection = JSON.parse(localStorage.getItem("johan")); // If localstorage exist, use that, other wise just return an empty list  
    }  
    return this.collection;
  }

  addToCollection(item) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item); // add to collection
    localStorage.setItem("johan", JSON.stringify(this.collection)); // update localstorage
  }

  removeFromCollection(item) {
    this.collection.splice(this.collection.indexOf(item), 1); // remove from collection
    localStorage.setItem("johan", JSON.stringify(this.collection)); // update localstorage
  }
}