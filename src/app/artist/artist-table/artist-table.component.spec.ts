import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTableComponent } from './artist-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ArtistTableComponent', () => {
  let component: ArtistTableComponent;
  let fixture: ComponentFixture<ArtistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistTableComponent],
      imports: [
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
