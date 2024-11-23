import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseMenuComponent } from './close-menu.component';

describe('CloseMenuComponent', () => {
  let component: CloseMenuComponent;
  let fixture: ComponentFixture<CloseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
