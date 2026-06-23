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
