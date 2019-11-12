import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeokjaeFooterComponent } from './seokjae-footer.component';

describe('SeokjaeFooterComponent', () => {
  let component: SeokjaeFooterComponent;
  let fixture: ComponentFixture<SeokjaeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeokjaeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeokjaeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
