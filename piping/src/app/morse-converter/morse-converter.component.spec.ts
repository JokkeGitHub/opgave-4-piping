import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MorseConverterComponent } from './morse-converter.component';

describe('MorseConverterComponent', () => {
  let component: MorseConverterComponent;
  let fixture: ComponentFixture<MorseConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorseConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
