import { CollectableService } from '../../shared/collectable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  public collection = [];
  
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collection = this.collectableService.getCollection();
  }

  removeItem(item) {
    this.collectableService.removeFromCollection(item);
  }

}
