import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkCardComponent } from './artwork-card.component';
import { Artwork } from 'src/app/shared/models/artwork';
import {HarnessLoader} from '@angular/cdk/testing';
import { By } from '@angular/platform-browser';

describe('ArtworkCardComponent', () => {
  let component: ArtworkCardComponent;
  let fixture: ComponentFixture<ArtworkCardComponent>;

  const artwork: Artwork = {
    id: 1,
    imageId: 'abcd_1',
    title: 'Test Art',
    artistDisplay: 'Anna Novak',
    artistTitle: 'Anna Novak',
    mediumDisplay: 'paper',
    styleTitle: 'artdeco',
    inscriptions: '',
    dimensions: '45.5 \u00d7 37.5 cm (17 15/16 \u00d7 14 13/16 in.)',
    dateDisplay: '20024',
    classification: 'gouache',
    publicDomain: true,
    placeOfOrigin: 'Poland',
    typeTitle: 'painting',
    altText: 'a lovely picture',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when the RandomArtButton is clicked', () => {
    const radomArtSpy = spyOn(component.clicked, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('#radomArtButton');
    button.click();
    expect(radomArtSpy).toHaveBeenCalled();
  });

});
