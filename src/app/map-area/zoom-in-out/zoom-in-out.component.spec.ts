import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomInOutComponent } from './zoom-in-out.component';

describe('ZoomInOutComponent', () => {
  let component: ZoomInOutComponent;
  let fixture: ComponentFixture<ZoomInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
