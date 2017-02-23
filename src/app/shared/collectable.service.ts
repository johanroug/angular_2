import { Collectable } from './collectable.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectableService {
  private collectables: Collectable[] = [
    { description: "Excepteur et qui dolore id aute elit deserunt occaecat elit aliqua excepteur labore ipsum exercitation.", type: "book" },
    { description: "Enim duis nostrud ad eiusmod exercitation ut.", type: "garbage" },
    { description: "Adipisicing non minim occaecat pariatur in id voluptate deserunt.", type: "photo" },
    { description: "Deserunt culpa elit id occaecat excepteur magna ea officia ea.", type: "piece of paper" }
  ];

  private collection: Collectable[] = [];

  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}