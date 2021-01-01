import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmcsmartsarathiComponent } from './pcmcsmartsarathi.component';

describe('PcmcsmartsarathiComponent', () => {
  let component: PcmcsmartsarathiComponent;
  let fixture: ComponentFixture<PcmcsmartsarathiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmcsmartsarathiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmcsmartsarathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
