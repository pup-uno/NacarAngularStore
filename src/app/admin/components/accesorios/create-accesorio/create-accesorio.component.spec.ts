import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccesorioComponent } from './create-accesorio.component';

describe('CreateAccesorioComponent', () => {
  let component: CreateAccesorioComponent;
  let fixture: ComponentFixture<CreateAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
