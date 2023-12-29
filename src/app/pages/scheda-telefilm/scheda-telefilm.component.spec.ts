import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaTelefilmComponent } from './scheda-telefilm.component';

describe('SchedaTelefilmComponent', () => {
  let component: SchedaTelefilmComponent;
  let fixture: ComponentFixture<SchedaTelefilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedaTelefilmComponent]
    });
    fixture = TestBed.createComponent(SchedaTelefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
