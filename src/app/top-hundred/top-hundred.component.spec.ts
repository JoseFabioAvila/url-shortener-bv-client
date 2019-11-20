import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHundredComponent } from './top-hundred.component';

describe('TopHundredComponent', () => {
  let component: TopHundredComponent;
  let fixture: ComponentFixture<TopHundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHundredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
