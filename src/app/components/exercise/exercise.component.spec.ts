import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a question', () => {
    const fixture = TestBed.createComponent(ExerciseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#question')?.textContent).toContain(
      'Question'
    );
  });

  it('should render an answer', () => {
    const fixture = TestBed.createComponent(ExerciseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#answer')?.textContent).toContain('Answer');
  });
});
