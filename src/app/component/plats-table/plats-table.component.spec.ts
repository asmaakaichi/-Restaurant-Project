import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsTableComponent } from './plats-table.component';

describe('PlatsTableComponent', () => {
  let component: PlatsTableComponent;
  let fixture: ComponentFixture<PlatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
