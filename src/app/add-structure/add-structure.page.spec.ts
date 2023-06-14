import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStructurePage } from './add-structure.page';

describe('AddStructurePage', () => {
  let component: AddStructurePage;
  let fixture: ComponentFixture<AddStructurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddStructurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
