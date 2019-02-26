import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefaccountComponent } from './chefaccount.component';

describe('ChefaccountComponent', () => {
  let component: ChefaccountComponent;
  let fixture: ComponentFixture<ChefaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
