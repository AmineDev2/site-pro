import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsDashboardsPageComponent } from './apps-dashboards-page.component';

describe('AppsDashboardsPageComponent', () => {
  let component: AppsDashboardsPageComponent;
  let fixture: ComponentFixture<AppsDashboardsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppsDashboardsPageComponent]
    });
    fixture = TestBed.createComponent(AppsDashboardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
