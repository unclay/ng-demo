import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PartsComponent } from './parts.component';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule, RouterTestingModule],
    declarations: [PartsComponent],
  }).compileComponents();
}));


describe('PartsComponent', () => {
  let component: PartsComponent;
  let fixture: ComponentFixture<PartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
