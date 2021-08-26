import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardComodoComponent } from './card-comodo.component';

describe('CardComodoComponent', () => {
  let component: CardComodoComponent;
  let fixture: ComponentFixture<CardComodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComodoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
