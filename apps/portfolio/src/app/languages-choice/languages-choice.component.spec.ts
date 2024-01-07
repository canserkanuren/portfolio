import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesChoiceComponent } from './languages-choice.component';

describe('LanguagesChoiceComponent', () => {
  let component: LanguagesChoiceComponent;
  let fixture: ComponentFixture<LanguagesChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesChoiceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
