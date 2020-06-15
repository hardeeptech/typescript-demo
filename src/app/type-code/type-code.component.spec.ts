import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCodeComponent } from './type-code.component';

describe('TypeCodeComponent', () => {
  let component: TypeCodeComponent;
  let fixture: ComponentFixture<TypeCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
