import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiAiNewsComponent } from './ki-ai-news.component';

describe('KiAiNewsComponent', () => {
  let component: KiAiNewsComponent;
  let fixture: ComponentFixture<KiAiNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiAiNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiAiNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
