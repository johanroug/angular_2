import { CollectableService } from '../../shared/collectable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
  public collectables = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

  addToCollection(item) {
    this.collectableService.addToCollection(item);
  }

}
