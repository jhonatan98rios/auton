import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetorPage } from './projetor.page';

describe('ProjetorPage', () => {
  let component: ProjetorPage;
  let fixture: ComponentFixture<ProjetorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
