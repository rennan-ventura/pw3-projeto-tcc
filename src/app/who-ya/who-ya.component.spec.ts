import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoYaComponent } from './who-ya.component';

describe('WhoYaComponent', () => {
  let component: WhoYaComponent;
  let fixture: ComponentFixture<WhoYaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoYaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
