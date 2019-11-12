import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeokjaeHeaderComponent } from './seokjae-header.component';

describe('SeokjaeHeaderComponent', () => {
  let component: SeokjaeHeaderComponent;
  let fixture: ComponentFixture<SeokjaeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeokjaeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeokjaeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
