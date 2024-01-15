import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundControllerComponent } from './round-controller.component';

describe('RoundControllerComponent', () => {
  let component: RoundControllerComponent;
  let fixture: ComponentFixture<RoundControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
