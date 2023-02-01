import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalComponent } from './magical.component';

describe('MagicalComponent', () => {
  let component: MagicalComponent;
  let fixture: ComponentFixture<MagicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
