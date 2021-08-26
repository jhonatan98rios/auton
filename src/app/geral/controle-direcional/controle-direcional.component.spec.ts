import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControleDirecionalComponent } from './controle-direcional.component';

describe('ControleDirecionalComponent', () => {
  let component: ControleDirecionalComponent;
  let fixture: ComponentFixture<ControleDirecionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleDirecionalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControleDirecionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
