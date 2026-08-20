import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversePlaceholder } from './universe-placeholder';

describe('UniversePlaceholder', () => {
  let component: UniversePlaceholder;
  let fixture: ComponentFixture<UniversePlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversePlaceholder],
    }).compileComponents();

    fixture = TestBed.createComponent(UniversePlaceholder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
