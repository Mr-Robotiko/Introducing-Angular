import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherInformationComponent } from './further-information.component';

describe('FurtherInformationComponent', () => {
  let component: FurtherInformationComponent;
  let fixture: ComponentFixture<FurtherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurtherInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurtherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
