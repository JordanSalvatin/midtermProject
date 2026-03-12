import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdList } from './prod-list';

describe('ProdList', () => {
  let component: ProdList;
  let fixture: ComponentFixture<ProdList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
