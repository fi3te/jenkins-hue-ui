import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvailableLampsComponent } from './available-lamps.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AvailableLampsComponent', () => {
  let component: AvailableLampsComponent;
  let fixture: ComponentFixture<AvailableLampsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [AvailableLampsComponent],
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
