import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailheadComponent } from './detailhead.component';

describe('DetailheadComponent', () => {
  let component: DetailheadComponent;
  let fixture: ComponentFixture<DetailheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
