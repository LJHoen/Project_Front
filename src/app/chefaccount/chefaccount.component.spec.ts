import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefAccountComponent } from './chefaccount.component';

describe('ChefaccountComponent', () => {
  let component: ChefAccountComponent;
  let fixture: ComponentFixture<ChefAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
