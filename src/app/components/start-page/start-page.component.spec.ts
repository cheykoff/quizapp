import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StartPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render CS50 QuizApp as heading', () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('CS50 QuizApp');
  });

  it('should render Hello felllow CS50 students', () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#hello')?.textContent).toContain(
      'CS50 students'
    );
  });

  it('should explain in the intro the goal', () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#intro')?.textContent).toContain('goal');
  });

  it('should link to the github repo', () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const contributeParagraph = compiled.querySelector('#contribute');
    expect(contributeParagraph).toBeTruthy();
    const repoLink = contributeParagraph.querySelector('a');
    expect(repoLink).toBeTruthy();
    expect(repoLink.href).toBe('https://github.com/cheykoff/quizapp');
  });
});
