import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtworkComponent } from './artwork.component';
import { ImageService } from 'src/app/shared/services/image.service';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

describe('ArtworkComponent', () => {
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkComponent, ArtworkCardComponent],
      providers: [ImageService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud get an image url', () => {
    component.getImage('abcd_1');
    expect(component.imageUrl).toEqual(
      'https://www.artic.edu/iiif/2/abcd_1/full/843,/0/default.jpg'
    );
  });
});
