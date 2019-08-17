import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Component({
  template: `
    <p id="item">{{item$ | async}}</p>
    <button (click)="setItem()">Set item</button>
  `,
})
export class ReloadComponent implements OnInit {

  readonly key = 'reload';
  item$!: Observable<string | undefined>;

  constructor(private storageMap: StorageMap) {}

  ngOnInit() {
    this.item$ = this.storageMap.get(this.key, { type: 'string' });
  }

  async setItem() {
    await this.storageMap.clear().toPromise();
    await this.storageMap.set(this.key, 'hello').toPromise();
    location.reload();
  }

}
