import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'quizapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('quizapp');
  });

  it('should render CS50 QuizApp as heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('CS50 QuizApp');
  });

  it('should render Hello felllow CS50 students', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain('CS50 students');
  });

  it('should explain in the intro the goal', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#intro')?.textContent).toContain('goal');
  });

  it('should link to the github repo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const contributeParagraph = compiled.querySelector('#contribute');
    expect(contributeParagraph).toBeTruthy();
    const repoLink = contributeParagraph.querySelector('a');
    expect(repoLink).toBeTruthy();
    expect(repoLink.href).toBe('https://github.com/cheykoff/quizapp');
  });
});
