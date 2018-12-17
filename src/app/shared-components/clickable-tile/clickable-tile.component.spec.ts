import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableTileComponent } from './clickable-tile.component';

describe('ClickableTileComponent', () => {
  let component: ClickableTileComponent;
  let fixture: ComponentFixture<ClickableTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
