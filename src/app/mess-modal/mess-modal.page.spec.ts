import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessModalPage } from './mess-modal.page';

describe('MessModalPage', () => {
  let component: MessModalPage;
  let fixture: ComponentFixture<MessModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
