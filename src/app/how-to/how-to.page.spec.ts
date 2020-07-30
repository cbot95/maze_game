import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToPage } from './how-to.page';

describe('HowToPage', () => {
  let component: HowToPage;
  let fixture: ComponentFixture<HowToPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
