import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RgbPage } from './rgb.page';

describe('RgbPage', () => {
  let component: RgbPage;
  let fixture: ComponentFixture<RgbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RgbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
