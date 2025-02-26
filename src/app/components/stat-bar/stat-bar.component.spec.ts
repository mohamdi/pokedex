import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBarComponent } from './stat-bar.component';

describe('StatBarComponent', () => {
  let component: StatBarComponent;
  let fixture: ComponentFixture<StatBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatBarComponent]
    });
    fixture = TestBed.createComponent(StatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
