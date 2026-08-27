const places = [
  {
    name: "Gal Vihara",
    location: "Polonnaruwa",
    image: "images/gal-viharaya.jpg",
    description:
      "Gal Vihara is one of the most remarkable rock temples in Sri Lanka, famous for its large granite Buddha statues and serene atmosphere.",
    importance:
      "It reflects the artistic excellence and spiritual depth of the Polonnaruwa period and remains a symbol of Buddhist devotion.",
    architecture:
      "The site features monumental seated, standing, and reclining Buddha statues carved directly from a single granite rock face.",
    facts: [
      "The statues are considered among the finest examples of ancient Sri Lankan sculpture.",
      "The reclining Buddha statue is one of the longest in the world.",
      "The site was created during the reign of Parakramabahu I."
    ]
  },
  {
    name: "Polonnaruwa Vatadage",
    location: "Polonnaruwa",
    image: "images/vatadage.jpg",
    description:
      "The Vatadage is a circular relic house that once enshrined sacred objects and stood as a major religious landmark.",
    importance:
      "Its design highlights the importance of relic worship and the advanced craftsmanship of the period.",
    architecture:
      "The structure has a circular layout, stone pillars, and a roof supported by decorative stonework and carved designs.",
    facts: [
      "Its stone roof was originally decorated with a detailed artistic finish.",
      "The structure is one of the most beautiful examples of ancient Sri Lankan architecture.",
      "It is believed to have been used as a sacred shrine for veneration."
    ]
  },
  {
    name: "Rankoth Vehera",
    location: "Polonnaruwa",
    image: "images/rankoth-vehera.jpg",
    description:
      "Rankoth Vehera is a magnificent stupa built to honor the memory of a king and to display royal devotion.",
    importance:
      "It represents the grandeur of the kingdom's Buddhist heritage and royal patronage of religious institutions.",
    architecture:
      "The stupa stands on a large platform with terraces, stone steps, and surrounding walls that create an impressive monumental form.",
    facts: [
      "It is one of the most impressive stupas in Polonnaruwa.",
      "The site was built with a strong emphasis on symmetry and presence.",
      "The stupa remains a major site for pilgrimage and heritage appreciation."
    ]
  },
  {
    name: "Royal Palace",
    location: "Polonnaruwa",
    image: "images/royal-palace.jpg",
    description:
      "The Royal Palace was the center of political power and indicates the scale of royal life in the ancient capital.",
    importance:
      "It reveals how the palace complex was designed for administration, ceremony, and elite living.",
    architecture:
      "The remaining ruins show large courtyards, baths, corridors, and decorative stone features linked to royal authority.",
    facts: [
      "The site gives insight into how medieval kings organized their capital city.",
      "It is associated with the royal grandeur of the ancient kingdom.",
      "The remains help archaeologists understand urban planning and royal architecture."
    ]
  },
  {
    name: "Parakrama Samudraya",
    location: "Polonnaruwa",
    image: "images/parakrama-samudraya.jpg",
    description:
      "Parakrama Samudraya is a massive reservoir built to store water for irrigation and agricultural use.",
    importance:
      "It stands as a symbol of ancient engineering and the importance of water management in sustaining civilization.",
    architecture:
      "The reservoir is broad, strategically designed, and linked to many irrigation channels that supported cultivation.",
    facts: [
      "It is one of the largest ancient reservoirs in Sri Lanka.",
      "The reservoir supported extensive farming in the region.",
      "It reflects the technical planning of King Parakramabahu I."
    ]
  },
  {
    name: "Lotus Pond",
    location: "Polonnaruwa",
    image: "images/lotus-pond.jpg",
    description:
      "The Lotus Pond is a beautifully designed water feature associated with royal gardens and calming landscapes.",
    importance:
      "It shows the artistic and aesthetic sensibilities of the medieval capital, especially in the royal garden tradition.",
    architecture:
      "The pond contains decorative stone steps and a symmetrical design that reflects both utility and beauty.",
    facts: [
      "It was likely used as a royal pleasure garden or bathing area.",
      "Its design demonstrates the harmony between architecture and nature.",
      "The structure is a memorable example of garden design in ancient Sri Lanka."
    ]
  },
  {
    name: "Lankatilaka Image House",
    location: "Polonnaruwa",
    image: "images/lankatilaka.jpg",
    description:
      "Lankatilaka Image House is a magnificent temple building known for its tall stone walls and sacred atmosphere.",
    importance:
      "It embodies the religious and architectural grandeur of the kingdom and its devotion to Buddhist worship.",
    architecture:
      "The structure is designed with long walls, a grand platform, and a stately silhouette that stands out in the landscape.",
    facts: [
      "The image house is one of the most impressive temple structures in Polonnaruwa.",
      "It was built as a place for sacred images and devotion.",
      "The construction reflects careful planning and advanced craftsmanship."
    ]
  },
  {
    name: "Thuparama Image House",
    location: "Polonnaruwa",
    image: "images/thuparama.jpg",
    description:
      "Thuparama Image House is a compact but elegant image house that carries a strong sense of spiritual harmony.",
    importance:
      "It forms part of the sacred heritage of the site and highlights the importance of Buddhist worship in everyday life.",
    architecture:
      "The building is relatively small in size but carefully planned, with strong lines and purposeful forms.",
    facts: [
      "Its design demonstrates the efficiency of temple architecture in the region.",
      "The site continues to attract visitors interested in sacred heritage.",
      "It reflects how religious buildings were woven into the city landscape."
    ]
  },
  {
    name: "Nissanka Latha Mandapaya",
    location: "Polonnaruwa",
    image: "images/nissanka.jpg",
    description:
      "Nissanka Latha Mandapaya is a stone pavilion and an important monument connected with royal and religious traditions.",
    importance:
      "It adds to the understanding of ceremonial architecture and the artistic sophistication of the period.",
    architecture:
      "The pavilion features carved stone details and a strong layout that draws attention to both ceremony and aesthetics.",
    facts: [
      "It is associated with the reign of King Nissanka Malla.",
      "The building showcases the artistic craftsmanship of the era.",
      "It remains an important site for historical study and tourism."
    ]
  },
  {
    name: "Nelum Pokuna",
    location: "Polonnaruwa",
    image: "images/nelum-pokuna.jpg",
    description:
      "Nelum Pokuna is a beautiful lotus pond, known for its symmetrical design and tranquil setting in the ancient city.",
    importance:
      "It demonstrates the symbolic importance of water and beauty in the architecture of the period.",
    architecture:
      "The structure has elegant steps and carved stone edges that create a calm and refined appearance.",
    facts: [
      "The name means 'lotus pond' in Sinhalese.",
      "It stands as an example of the special attention given to water features in the capital.",
      "The site is admired for both its design and peaceful atmosphere."
    ]
  }
];

const galleryItems = [
  { name: "Gal Vihara", category: "temples", image: "images/gal-viharaya.jpg" },
  { name: "Vatadage", category: "ancient-buildings", image: "images/vatadage.jpg" },
  { name: "Rankoth Vehera", category: "temples", image: "images/rankoth-vehera.jpg" },
  { name: "Royal Palace", category: "ancient-buildings", image: "images/royal-palace.jpg" },
  { name: "Parakrama Samudraya", category: "nature", image: "images/parakrama-samudraya.jpg" },
  { name: "Lotus Pond", category: "nature", image: "images/lotus-pond.jpg" },
  { name: "Lankatilaka", category: "temples", image: "images/lankatilaka.jpg" },
  { name: "Ancient Ruins", category: "ancient-buildings", image: "images/polonnaruwa.jpg" },
  { name: "Buddha Statue", category: "statues", image: "images/gal-viharaya.jpg" },
  { name: "Stone Sculpture", category: "statues", image: "images/nelum-pokuna.jpg" }
];

const setCurrentYear = () => {
  const yearElements = document.querySelectorAll("#year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((yearElement) => {
    yearElement.textContent = currentYear;
  });
};

const setupNavigation = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
};

const createPlaceCards = () => {
  const placesList = document.getElementById("places-list");
  if (!placesList) return;

  places.forEach((place) => {
    const card = document.createElement("article");
    card.className = "place-card place-item reveal";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" />
      <div class="place-card-content">
        <h3>${place.name}</h3>
        <div class="place-meta">
          <span>${place.location}</span>
        </div>
        <p>${place.description}</p>
        <a href="place-details.html?place=${encodeURIComponent(place.name)}" class="btn-link">View Details</a>
      </div>
    `;
    placesList.appendChild(card);
  });

  setupSearch();
};

const setupSearch = () => {
  const searchInput = document.getElementById("place-search");
  const cards = document.querySelectorAll(".place-item");
  const noResult = document.getElementById("no-result");

  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const match = name.includes(query);
      card.style.display = match ? "flex" : "none";
      if (match) visibleCount += 1;
    });

    if (noResult) {
      noResult.classList.toggle("hidden", visibleCount !== 0);
    }
  });
};

const renderPlaceDetails = () => {
  const container = document.getElementById("place-details");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const placeName = params.get("place") || "Gal Vihara";
  const place = places.find((item) => item.name.toLowerCase() === placeName.toLowerCase()) || places[0];

  container.innerHTML = `
    <article class="place-detail-layout">
      <img src="${place.image}" alt="${place.name}" class="place-detail-image" />
      <div class="place-detail-content">
        <h2>${place.name}</h2>
        <span class="detail-meta">${place.location}</span>
        <p>${place.description}</p>

        <div class="detail-section">
          <h3>Historical Background</h3>
          <p>${place.importance}</p>
        </div>

        <div class="detail-section">
          <h3>Architectural Features</h3>
          <p>${place.architecture}</p>
        </div>

        <div class="detail-section">
          <h3>Interesting Facts</h3>
          <ul>
            ${place.facts.map((fact) => `<li>${fact}</li>`).join("")}
          </ul>
        </div>

        <a href="places.html" class="back-link">Back to Places</a>
      </div>
    </article>
  `;
};

const renderGallery = () => {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  const buildGallery = (filter = "all") => {
    galleryGrid.innerHTML = "";

    const filteredItems = filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

    filteredItems.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item";
      figure.dataset.category = item.category;
      figure.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <figcaption>${item.name}</figcaption>
      `;
      figure.addEventListener("click", () => openLightbox(item.image, item.name));
      galleryGrid.appendChild(figure);
    });
  };

  buildGallery();

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      buildGallery(button.dataset.filter);
    });
  });
};

const openLightbox = (imageSrc, caption) => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightboxImage.src = imageSrc;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
};

const setupLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const closeButton = document.querySelector(".lightbox-close");
  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
};

const setupScrollTop = () => {
  const scrollButton = document.querySelector(".scroll-top");
  if (!scrollButton) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const setupRevealAnimations = () => {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const init = () => {
  setCurrentYear();
  setupNavigation();
  createPlaceCards();
  renderPlaceDetails();
  renderGallery();
  setupLightbox();
  setupScrollTop();
  setupRevealAnimations();
};

document.addEventListener("DOMContentLoaded", init);
