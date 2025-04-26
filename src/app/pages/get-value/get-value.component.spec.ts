import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetValueComponent } from './get-value.component';

describe('GetValueComponent', () => {
  let component: GetValueComponent;
  let fixture: ComponentFixture<GetValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
