import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesFolderComponent } from './hobbies-folder.component';

describe('HobbiesFolderComponent', () => {
  let component: HobbiesFolderComponent;
  let fixture: ComponentFixture<HobbiesFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
