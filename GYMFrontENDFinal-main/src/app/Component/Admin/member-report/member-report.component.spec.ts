import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReportComponent } from './member-report.component';

describe('MemberReportComponent', () => {
  let component: MemberReportComponent;
  let fixture: ComponentFixture<MemberReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
