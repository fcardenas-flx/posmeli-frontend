import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInventoryComponent } from './get-inventory.component';

describe('GetInventoryComponent', () => {
  let component: GetInventoryComponent;
  let fixture: ComponentFixture<GetInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
