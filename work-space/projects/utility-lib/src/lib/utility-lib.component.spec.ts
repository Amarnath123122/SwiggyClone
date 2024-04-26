import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityLibComponent } from './utility-lib.component';

describe('UtilityLibComponent', () => {
  let component: UtilityLibComponent;
  let fixture: ComponentFixture<UtilityLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilityLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
