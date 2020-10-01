import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbodyComponent } from './detailbody.component';

describe('DetailbodyComponent', () => {
  let component: DetailbodyComponent;
  let fixture: ComponentFixture<DetailbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
