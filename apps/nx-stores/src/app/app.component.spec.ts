import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

describe('AppComponent', () => {
  let component: HomePageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it.skip(`should have as title 'nx-stores'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nx-stores');
  });

  it.skip('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to nx-stores!',
    );
  });
});
