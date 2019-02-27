import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantAccountComponent } from './klantaccount.component';

describe('KlantAccountComponent', () => {
  let component: KlantAccountComponent;
  let fixture: ComponentFixture<KlantAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlantAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
