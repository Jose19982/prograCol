import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFigureComponent } from './see-figure.component';

describe('SeeFigureComponent', () => {
  let component: SeeFigureComponent;
  let fixture: ComponentFixture<SeeFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
