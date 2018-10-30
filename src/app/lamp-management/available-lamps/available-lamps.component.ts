import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import { LampService } from '../../service/http/lamp.service';
import { AlertService } from './../../service/alert.service';
import { SessionService } from './../../service/session.service';
import { LampOwnershipService } from './../lamp-ownership.service';

import LampHueDTO = DTO.LampHueDTO;
import LampCreateDTO = DTO.LampCreateDTO;

@Component({
  selector: 'app-available-lamps',
  templateUrl: './available-lamps.component.html',
  styleUrls: ['./available-lamps.component.scss']
})
export class AvailableLampsComponent implements OnInit {
  public availableLamps: LampHueDTO[];
  public isRefreshing: boolean;
  public isTaking: boolean;

  private teamId: number;

  constructor(
    private lampService: LampService,
    private alertService: AlertService,
    private sessionService: SessionService,
    private lampOwnershipService: LampOwnershipService
  ) {}

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
    this.updateAvailableLamps(true);
    this.lampOwnershipService.lampReleased$.subscribe(() => {
      this.updateAvailableLamps(true);
    });
  }

  public refresh(): void {
    if (!this.isRefreshing) {
      this.updateAvailableLamps(false);
    }
  }

  public pulseOnce(lamp: LampHueDTO): void {
    this.lampService.pulseOnce(lamp.uniqueId).subscribe();
  }

  public takeLamp(lamp: LampHueDTO): void {
    if (!this.isTaking) {
      this.isTaking = true;
      const name = lamp.name ? lamp.name : `Lampe ${Math.random()}`;
      const lampCreateDTO: LampCreateDTO = {
        hueUniqueId: lamp.uniqueId,
        name: name,
        teamId: this.teamId
      };

      this.lampService.create(lampCreateDTO).subscribe(
        () => {
          this.lampOwnershipService.lampTaken();
          this.updateAvailableLamps(true);
          this.alertService.info('Lampe übernommen!');
          this.isTaking = false;
        },
        () => {
          this.isTaking = false;
        }
      );
    }
  }

  private updateAvailableLamps(noAlert?: boolean): void {
    this.isRefreshing = true;
    this.lampService.findAllAvailable().subscribe(
      (next: LampHueDTO[]) => {
        this.availableLamps = next;
        if (!noAlert) {
          this.alertService.info('Verfügbare Lampen aktualisiert');
        }
        this.isRefreshing = false;
      },
      () => {
        this.isRefreshing = false;
      }
    );
  }
}
