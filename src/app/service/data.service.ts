import { EventEmitter } from '@angular/forms/src/facade/async';
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  private data: string[] = [];
  public pushedData = new EventEmitter<string>();

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog(input);
  }

  getData() {
    return this.data;
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }
}
