import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefiguraComponent } from './createfigura.component';

describe('CreatefiguraComponent', () => {
  let component: CreatefiguraComponent;
  let fixture: ComponentFixture<CreatefiguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefiguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
