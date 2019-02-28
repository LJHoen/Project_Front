import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefgegevensComponent } from './chefgegevens.component';

describe('ChefgegevensComponent', () => {
  let component: ChefgegevensComponent;
  let fixture: ComponentFixture<ChefgegevensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefgegevensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefgegevensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
