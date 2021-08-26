import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComodosPage } from './comodos.page';

describe('ComodosPage', () => {
  let component: ComodosPage;
  let fixture: ComponentFixture<ComodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
