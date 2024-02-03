import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollWatcherComponent } from './scroll-watcher.component';

describe('ScrollWatcherComponent', () => {
  let component: ScrollWatcherComponent;
  let fixture: ComponentFixture<ScrollWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollWatcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
