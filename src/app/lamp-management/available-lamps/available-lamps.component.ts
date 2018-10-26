import { AlertService } from './../../service/alert.service';
import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import LampHueDTO = DTO.LampHueDTO;
import { LampService } from '../../service/http/lamp.service';

@Component({
  selector: 'app-available-lamps',
  templateUrl: './available-lamps.component.html',
  styleUrls: ['./available-lamps.component.scss']
})
export class AvailableLampsComponent implements OnInit {

  public availableLamps: LampHueDTO[];
  public isRefreshing: boolean;
  public isTaking: boolean;

  constructor(private lampService: LampService, private alertService: AlertService) { }

  public ngOnInit(): void {
    this.updateAvailableLamps(true);
  }

  public refresh(): void {
    // TODO
  }

  public pulseOnce(lamp: LampHueDTO): void {
    // TODO
  }

  public takeLamp(lamp: LampHueDTO): void {
    // TODO
  }

  private updateAvailableLamps(noAlert?: boolean): void {
    this.isRefreshing = true;
    this.lampService.findAllAvailable().subscribe((next: LampHueDTO[]) => {
      this.availableLamps = next;
      if (!noAlert) {
        this.alertService.info('Verfügbare Lampen aktualisiert');
      }
      this.isRefreshing = false;
    }, () => {
      this.isRefreshing = false;
    });
  }
}
