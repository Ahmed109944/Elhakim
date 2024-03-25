import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGridComponent } from './contact-grid.component';

describe('ContactGridComponent', () => {
  let component: ContactGridComponent;
  let fixture: ComponentFixture<ContactGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
