import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantaccountComponent } from './klantaccount.component';

describe('KlantaccountComponent', () => {
  let component: KlantaccountComponent;
  let fixture: ComponentFixture<KlantaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlantaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
