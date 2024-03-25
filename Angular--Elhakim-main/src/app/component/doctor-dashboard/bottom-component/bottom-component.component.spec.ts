import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomComponentComponent } from './bottom-component.component';

describe('BottomComponentComponent', () => {
  let component: BottomComponentComponent;
  let fixture: ComponentFixture<BottomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
