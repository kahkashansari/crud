import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenApiComponent } from './open-api.component';

describe('OpenApiComponent', () => {
  let component: OpenApiComponent;
  let fixture: ComponentFixture<OpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
