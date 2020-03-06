import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsumitComponent } from './testsumit.component';

describe('TestsumitComponent', () => {
  let component: TestsumitComponent;
  let fixture: ComponentFixture<TestsumitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsumitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsumitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
