import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefHomeComponent } from './chef-home.component';

describe('ChefHomeComponent', () => {
  let component: ChefHomeComponent;
  let fixture: ComponentFixture<ChefHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
