import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSectionComponent } from './experience-section.component';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
