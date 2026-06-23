const slides = [
  {
    src: "assets/new-house-front.jpeg",
    alt: "Reetdachhaus bei Sonnenschein",
    caption: "Das Reetdach-Beachhouse mit eigenem Eingang und Garten",
    thumbAlt: "Reetdachhaus bei Sonnenschein",
  },
  {
    src: "assets/new-house-night.jpeg",
    alt: "Reetdachhaus bei Nacht",
    caption: "Stimmungsvolle Abendansicht unter dem Reetdach",
    thumbAlt: "Haus bei Nacht",
  },
  {
    src: "assets/new-terrace-table.jpeg",
    alt: "Terrasse mit großem Holztisch",
    caption: "Möblierte Terrasse direkt am Haus",
    thumbAlt: "Terrasse mit Tisch",
  },
  {
    src: "assets/new-garden-lounge.jpeg",
    alt: "Gartenlounge im eingezäunten Garten",
    caption: "Blickdichter Garten mit Lounge und viel Ruhe",
    thumbAlt: "Gartenlounge",
  },
  {
    src: "assets/house-2.jpg",
    alt: "Heller Wohnbereich mit offener Küche",
    caption: "Gemütlicher Wohnbereich mit offener Küche und Essplatz",
    thumbAlt: "Wohnbereich und Küche",
  },
  {
    src: "assets/house-3.jpg",
    alt: "Terrasse und blickdichter Garten",
    caption: "Möblierte Terrasse und blickdichter Garten für entspannte Stunden",
    thumbAlt: "Terrasse und Garten",
  },
  {
    src: "assets/house-kitchen-dining-bright.jpeg",
    alt: "Essbereich und Küche mit Blick zur Terrasse",
    caption: "Heller Essbereich mit offener Küche und direktem Zugang zur Terrasse",
    thumbAlt: "Essbereich und Küche",
  },
  {
    src: "assets/house-living-dining-view.jpeg",
    alt: "Wohn- und Essbereich mit Blick in den Garten",
    caption: "Wohn- und Essbereich mit großem Fenster zum Garten",
    thumbAlt: "Wohn- und Essbereich",
  },
  {
    src: "assets/house-kitchen-to-garden.jpeg",
    alt: "Küche mit Blick Richtung Essplatz und Garten",
    caption: "Praktische Küche mit kurzen Wegen zum Essplatz",
    thumbAlt: "Küche",
  },
  {
    src: "assets/house-bedroom-double.jpeg",
    alt: "Schlafzimmer mit Doppelbett unter der Dachschräge",
    caption: "Gemütliches Schlafzimmer unter der Dachschräge",
    thumbAlt: "Schlafzimmer Doppelbett",
  },
  {
    src: "assets/house-bedroom-closet.jpeg",
    alt: "Schlafzimmer mit Stauraum",
    caption: "Schlafzimmer mit Stauraum und warmem Holzfußboden",
    thumbAlt: "Schlafzimmer Stauraum",
  },
  {
    src: "assets/house-bedroom-twins.jpeg",
    alt: "Zweites Schlafzimmer mit zwei Einzelbetten",
    caption: "Zweites Schlafzimmer mit zwei Einzelbetten",
    thumbAlt: "Zweites Schlafzimmer",
  },
  {
    src: "assets/house-bathroom-glass-shower.jpeg",
    alt: "Badezimmer mit Glasdusche",
    caption: "Modernes Badezimmer mit Glasdusche",
    thumbAlt: "Badezimmer Dusche",
  },
  {
    src: "assets/house-bathroom-shower.jpeg",
    alt: "Badezimmer mit Dusche und Handtuchheizung",
    caption: "Badezimmer mit Dusche und Handtuchheizung",
    thumbAlt: "Badezimmer",
  },
  {
    src: "assets/house-guest-toilet.jpeg",
    alt: "Separates Gäste-WC",
    caption: "Separates Gäste-WC im Haus",
    thumbAlt: "Gäste-WC",
  },
  {
    src: "assets/house-entry-hall.jpeg",
    alt: "Eingangsflur des Ferienhauses",
    caption: "Eingangsbereich mit kurzen Wegen in den Wohnraum",
    thumbAlt: "Eingangsflur",
  },
  {
    src: "assets/house-stairs-hall.jpeg",
    alt: "Flur mit Treppe ins Obergeschoss",
    caption: "Flur mit Treppe ins Obergeschoss",
    thumbAlt: "Treppe",
  },
  {
    src: "assets/house-upstairs-hall.jpeg",
    alt: "Flur im Obergeschoss",
    caption: "Flur im Obergeschoss zu den Schlafräumen",
    thumbAlt: "Flur Obergeschoss",
  },
  {
    src: "assets/house-evening-table.jpeg",
    alt: "Gemütlicher Abend im Wohnbereich",
    caption: "Gemütlicher Abend im Wohnbereich",
    thumbAlt: "Abendstimmung",
  },
  {
    src: "assets/new-park-sign.jpeg",
    alt: "Eingangsschild Roompot Beach Resort Nieuwvliet-Bad",
    caption: "Ankommen im Beach Resort Nieuwvliet-Bad",
    thumbAlt: "Resort-Schild",
  },
  {
    src: "assets/new-park-path.jpeg",
    alt: "Weg durch das Beach Resort mit Dünenbepflanzung",
    caption: "Wege durch das Resort, eingerahmt von Dünenpflanzen",
    thumbAlt: "Resortweg",
  },
  {
    src: "assets/new-park-terrace-sunny.jpeg",
    alt: "Sonnige Außenterrasse im Resort",
    caption: "Sonnige Außenbereiche nahe dem Parkzentrum",
    thumbAlt: "Parkterrasse",
  },
  {
    src: "assets/new-park-lounge.jpeg",
    alt: "Lounge im Parkzentrum",
    caption: "Helles Parkzentrum mit gemütlichen Sitzbereichen",
    thumbAlt: "Parklounge",
  },
  {
    src: "assets/new-park-cafe.jpeg",
    alt: "Cafébereich im Parkzentrum",
    caption: "Café- und Shopbereich im modernen Resortzentrum",
    thumbAlt: "Cafébereich",
  },
  {
    src: "assets/new-park-atrium.jpeg",
    alt: "Atrium im Parkzentrum",
    caption: "Lichtdurchflutetes Atrium mit viel Platz zum Verweilen",
    thumbAlt: "Atrium",
  },
  {
    src: "assets/new-play-area.jpeg",
    alt: "Indoor-Spielbereich für Kinder",
    caption: "Indoor-Spielbereich für Kinder im Parkzentrum",
    thumbAlt: "Spielbereich",
  },
  {
    src: "assets/new-kids-play-cafe.jpeg",
    alt: "Indoor-Spielbereich mit Sitzbereich im Parkzentrum",
    caption: "Indoor-Spielbereich mit Cafébereich für entspannte Familienpausen",
    thumbAlt: "Indoor-Spielbereich",
  },
  {
    src: "assets/park-indoor-play-purple.jpeg",
    alt: "Indoor-Spielplatz mit Kletterelementen",
    caption: "Indoor-Spielplatz mit Kletterelementen und Rutschen",
    thumbAlt: "Indoor-Spielplatz Klettern",
  },
  {
    src: "assets/new-koos-toy-store.jpeg",
    alt: "Koos Toy Store im Parkzentrum",
    caption: "Koos Toy Store und Kinderwelt im Zentrum des Parks",
    thumbAlt: "Koos Toy Store",
  },
  {
    src: "assets/new-indoor-play-entrance.jpeg",
    alt: "Eingang zum Indoor-Spielplatz",
    caption: "Eingang zum Indoor-Spielplatz mit liebevoll gestalteter Koos-Welt",
    thumbAlt: "Indoor-Spielplatz",
  },
  {
    src: "assets/new-swimming-water-play.png",
    alt: "Wasserspielbereich im Schwimmbad",
    caption: "Wasserspielbereich im Schwimmbad für kleine Gäste",
    thumbAlt: "Wasserspielbereich",
  },
  {
    src: "assets/new-water-slides.png",
    alt: "Wasserrutschen am Schwimmbad",
    caption: "Große Wasserrutschen am Schwimmbad des Resorts",
    thumbAlt: "Wasserrutschen",
  },
  {
    src: "assets/new-minigolf-aerial.png",
    alt: "Minigolfbereich von oben",
    caption: "Minigolfbereich direkt im Landal Beach Resort",
    thumbAlt: "Minigolf",
  },
  {
    src: "assets/new-resort-aerial-sunset.png",
    alt: "Luftaufnahme des Resorts bei Sonnenuntergang",
    caption: "Das Resort aus der Luft, eingebettet zwischen Küste und Natur",
    thumbAlt: "Resort von oben",
  },
  {
    src: "assets/new-supermarket.png",
    alt: "Supermarkt im Parkzentrum",
    caption: "Supermarkt im Parkzentrum für die wichtigsten Einkäufe vor Ort",
    thumbAlt: "Supermarkt",
  },
  {
    src: "assets/new-park-outdoor-lounge.jpeg",
    alt: "Outdoor-Lounge mit Sonnensegeln",
    caption: "Großzügige Outdoor-Lounge mit Strandgefühl",
    thumbAlt: "Outdoor-Lounge",
  },
  {
    src: "assets/new-park-covered-terrace.jpeg",
    alt: "Überdachte Terrasse im Resort",
    caption: "Überdachte Terrasse für entspannte Pausen",
    thumbAlt: "Überdachte Terrasse",
  },
  {
    src: "assets/new-park-restaurant.jpeg",
    alt: "Restaurantbereich im Park",
    caption: "Restaurantbereich mit warmem Holz und gemütlicher Atmosphäre",
    thumbAlt: "Restaurant",
  },
];

const image = document.querySelector("#galleryImage");
const caption = document.querySelector("#galleryCaption");
const thumbsContainer = document.querySelector(".thumbs");
const prev = document.querySelector(".gallery-button.prev");
const next = document.querySelector(".gallery-button.next");

let current = 0;
let thumbs = [];

function renderThumbs() {
  thumbsContainer.innerHTML = slides
    .map(
      (slide, index) => `
        <button class="thumb" type="button" data-index="${index}">
          <img src="${slide.src}" alt="${slide.thumbAlt}" />
        </button>
      `,
    )
    .join("");

  thumbs = [...thumbsContainer.querySelectorAll(".thumb")];
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      showSlide(Number(thumb.dataset.index));
    });
  });
}

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  const slide = slides[current];

  image.src = slide.src;
  image.alt = slide.alt;
  caption.textContent = slide.caption;

  thumbs.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === current);
  });
}

renderThumbs();
showSlide(0);

prev.addEventListener("click", () => showSlide(current - 1));
next.addEventListener("click", () => showSlide(current + 1));
