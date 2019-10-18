import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabinetPage } from './cabinet.page';

describe('CabinetPage', () => {
  let component: CabinetPage;
  let fixture: ComponentFixture<CabinetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
