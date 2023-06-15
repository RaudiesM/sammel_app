import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleSammlungPage } from './single-sammlung.page';

describe('SingleSammlungPage', () => {
  let component: SingleSammlungPage;
  let fixture: ComponentFixture<SingleSammlungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleSammlungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
