/* =========================================================
   SPARKLEWASHIND
   CLEAN FRONTEND
   ========================================================= */

const WA = "918688529166";

const wa = (msg) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;


/* =========================================================
   WHATSAPP
   ========================================================= */

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(
    "Hi SparkleWashIND! I'd like to book a doorstep wash.\n\n" +
    "Vehicle: \n" +
    "Service: \n" +
    "Location: \n" +
    "Preferred date/time: "
  );

  a.target = "_blank";
  a.rel = "noopener noreferrer";
});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const navMenu = document.querySelector("#nav-menu");
const siteNav = document.querySelector(".site-nav");

if (navMenu && siteNav) {
  navMenu.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("menu-open");

    navMenu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    navMenu.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  siteNav.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("menu-open");
      navMenu.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-label", "Open menu");
    });
  });
}


/* =========================================================
   PRICING
   ========================================================= */

const pricing = {

  bike: [
    [
      "Bike Wash",
      "₹149",
      [
        "Snow-foam pre-wash",
        "Chain/rims/spokes degreasing",
        "Panels, seat & mirrors",
        "Tyre dressing"
      ]
    ]
  ],

  car5: [

    [
      "Exterior Wash",
      "₹249",
      [
        "Snow-foam pre-wash",
        "Body, glass & mirrors",
        "Alloys & tyres",
        "Streak-free hand dry"
      ]
    ],

    [
      "Exterior + Interior",
      "₹399",
      [
        "Exterior wash",
        "Cabin vacuum",
        "Dashboard, seats & door pads",
        "Mats cleaned"
      ],
      "MOST LOVED"
    ],

    [
      "Ceramic Foam Wash",
      "₹799",
      [
        "SiO₂ foam",
        "Hydrophobic beading",
        "Extra gloss",
        "Safe contact wash"
      ]
    ],

    [
      "Full Body Wax",
      "₹799",
      [
        "Surface prep",
        "Premium wax",
        "Deep gloss",
        "UV protection"
      ]
    ],

    [
      "Deep Interior Cleaning",
      "₹1,899",
      [
        "Upholstery shampoo",
        "Deep extraction",
        "Vents & crevices",
        "Roof lining"
      ]
    ],

    [
      "Teflon Coating",
      "₹1,799",
      [
        "Paint preparation",
        "PTFE sealant",
        "Protective layer",
        "Richer gloss"
      ]
    ],

    [
      "Ceramic Coating",
      "₹9,999 onwards",
      [
        "Paint correction prep",
        "Ceramic layer",
        "UV/hydrophobic defence",
        "Showroom finish"
      ],
      "PREMIUM"
    ]

  ],

  suv7: [

    [
      "Exterior Wash",
      "₹349",
      [
        "Snow-foam pre-wash",
        "Body, glass & mirrors",
        "Alloys & tyres",
        "Streak-free hand dry"
      ]
    ],

    [
      "Exterior + Interior",
      "₹549",
      [
        "Exterior wash",
        "Cabin vacuum",
        "Dashboard, seats & door pads",
        "Mats cleaned"
      ],
      "MOST LOVED"
    ],

    [
      "Ceramic Foam Wash",
      "₹999",
      [
        "SiO₂ foam",
        "Hydrophobic beading",
        "Extra gloss",
        "Safe contact wash"
      ]
    ],

    [
      "Full Body Wax",
      "₹1,199",
      [
        "Surface prep",
        "Premium wax",
        "Deep gloss",
        "UV protection"
      ]
    ],

    [
      "Deep Interior Cleaning",
      "₹2,499",
      [
        "Upholstery shampoo",
        "Deep extraction",
        "Vents & crevices",
        "Roof lining"
      ]
    ],

    [
      "Teflon Coating",
      "₹2,299",
      [
        "Paint preparation",
        "PTFE sealant",
        "Protective layer",
        "Richer gloss"
      ]
    ],

    [
      "Ceramic Coating",
      "₹11,999 onwards",
      [
        "Paint correction prep",
        "Ceramic layer",
        "UV/hydrophobic defence",
        "Showroom finish"
      ],
      "PREMIUM"
    ]

  ]

};


function renderPrices(type) {

  const el = document.querySelector("#prices");

  if (!el) return;

  const vehicle =
    type === "bike"
      ? "Two-Wheeler"
      : type === "car5"
        ? "5-Seater"
        : "7-Seater / SUV / MUV";

  el.innerHTML = pricing[type]
    .map((x) => `
      <article class="price-card">

        <small>
          ${x[3] || "DOORSTEP SERVICE"}
        </small>

        <h3>${x[0]}</h3>

        <div class="amount">
          ${x[1]}
        </div>

        <ul>
          ${x[2]
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="${wa(
            `Hi SparkleWashIND! I'd like to book ${x[0]}.\n\n` +
            `Vehicle: ${vehicle}\n` +
            `Price: ${x[1]}\n` +
            `Location: \n` +
            `Preferred date/time: `
          )}"
        >
          Book on WhatsApp ↗
        </a>

      </article>
    `)
    .join("");
}


renderPrices("bike");


document
  .querySelectorAll("[data-price]")
  .forEach((button) => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll("[data-price]")
        .forEach((item) =>
          item.classList.remove("active")
        );

      button.classList.add("active");

      renderPrices(button.dataset.price);
    });

  });


/* =========================================================
   MOTION
   ========================================================= */

const reduce = matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


/* =========================================================
   PRELOADER
   ========================================================= */

window.addEventListener("load", () => {

  const preloader =
    document.querySelector("#preloader");

  if (!preloader) return;

  if (reduce || !window.gsap) {
    preloader.remove();
    return;
  }

  gsap.to(".loader-line i", {
    width: "100%",
    duration: 1.2,
    ease: "power2.inOut"
  });

  gsap.to(".preloader", {
    autoAlpha: 0,
    duration: .7,
    delay: 1.25,

    onComplete: () => {
      preloader.remove();
    }
  });

});


/* =========================================================
   CINEMATIC IMAGE + TEXT SCROLL
   ========================================================= */

(() => {

  const cinematic =
    document.querySelector("#cinematic");

  const images =
    Array.from(
      document.querySelectorAll(".scene-image")
    );

  const copyA =
    document.querySelector(".copy-a");

  const copyScene2 =
  document.querySelector(".copy-scene-2");
  
  const copyB =
    document.querySelector(".copy-b");

  const copyC =
    document.querySelector(".copy-c");

  const metaA =
    document.querySelector(".meta-a");

  const metaB =
    document.querySelector(".meta-b");

  const metaC =
    document.querySelector(".meta-c");


  if (!cinematic || images.length !== 5) {
    return;
  }


  const updateScenes = () => {

    const sectionTop =
      cinematic.getBoundingClientRect().top +
      window.scrollY;

    const scrollDistance =
      cinematic.offsetHeight -
      window.innerHeight;

    if (scrollDistance <= 0) {
      return;
    }


    const progress = Math.max(
      0,
      Math.min(
        1,
        (window.scrollY - sectionTop) /
        scrollDistance
      )
    );


    /* =====================================================
       IMAGE SCENES
       ===================================================== */

    const position = progress * 4;

    const current =
      Math.min(
        Math.floor(position),
        3
      );

    const fade =
      position - current;


    images.forEach((image, index) => {

      let opacity = 0;

      if (index === current) {
        opacity = 1 - fade;
      }

      if (index === current + 1) {
        opacity = fade;
      }

      if (progress >= 1 && index === 4) {
        opacity = 1;
      }

      image.style.opacity = opacity;

    });


   
    /* ===================================================== 
     TEXT SCENES 
     ===================================================== */ 
 
    /* 
       0.00 → 0.25 
       SCENE 1 — YOUR RIDE. 
    */ 
 
    if (progress < 0.25) { 
 
      const fade = 
        progress / 0.25; 
 
      copyA.style.opacity = 1; 
      copyA.style.transform = 
        `translateY(${-fade * 25}px)`; 
 
      copyScene2.style.opacity = 0; 
      copyScene2.style.transform = 
        "translateY(35px)"; 
 
      copyB.style.opacity = 0; 
      copyB.style.transform = 
        "translateY(35px)"; 
 
      copyC.style.opacity = 0; 
      copyC.style.transform = 
        "translateY(35px)"; 
 
      metaA.style.opacity = 1; 
      metaB.style.opacity = 0; 
      metaC.style.opacity = 0; 
 
    } 
 
 
    /* 
       0.25 → 0.50 
       SCENE 2 — DEEP CLEAN. REAL CARE. 
    */ 
 
    else if (progress < 0.50) { 
 
      const fade = 
        (progress - 0.25) / 0.25; 
 
      /* Scene 1 fades out */ 
 
      copyA.style.opacity = 
        1 - fade; 
 
      copyA.style.transform = 
        `translateY(${-fade * 25}px)`; 
 
 
      /* Scene 2 text fades in */ 
 
      copyScene2.style.opacity = 
        fade; 
 
      copyScene2.style.transform = 
        `translateY(${35 - fade * 35}px)`; 
 
 
      copyB.style.opacity = 0; 
      copyB.style.transform = 
        "translateY(35px)"; 
 
      copyC.style.opacity = 0; 
      copyC.style.transform = 
        "translateY(35px)"; 
 
 
      metaA.style.opacity = 
        1 - fade; 
 
      metaB.style.opacity = 
        fade; 
 
      metaC.style.opacity = 0; 
 
    } 
 
 
    /* 
       0.50 → 0.75 
       SCENE 3 — BACK TO SPARKLING. 
    */ 
 
    else if (progress < 0.75) { 
 
      const fade = 
        (progress - 0.50) / 0.25; 
 
      copyA.style.opacity = 0; 
 
 
      /* Scene 2 text fades out */ 
 
      copyScene2.style.opacity = 
        1 - fade; 
 
      copyScene2.style.transform = 
        `translateY(${-fade * 25}px)`; 
 
 
      /* Scene 3 text fades in */ 
 
      copyB.style.opacity = 
        fade; 
 
      copyB.style.transform = 
        `translateY(${35 - fade * 35}px)`; 
 
 
      copyC.style.opacity = 0; 
 
      copyC.style.transform = 
        "translateY(35px)"; 
 
 
      metaA.style.opacity = 0; 
 
      metaB.style.opacity = 
        1; 
 
      metaC.style.opacity = 0; 
 
    } 
 
 
    /* 
       0.75 → 1.00 
       SCENE 4/5 — WE BRING THE SHINE. 
    */ 
 
    else { 
 
      const fade = 
        Math.min( 
          1, 
          (progress - 0.75) / 0.25 
        ); 
 
      copyA.style.opacity = 0; 
 
      copyScene2.style.opacity = 0; 
 
 
      /* Scene 3 fades out */ 
 
      copyB.style.opacity = 
        1 - fade; 
 
      copyB.style.transform = 
        `translateY(${-fade * 25}px)`; 
 
 
      /* Scene 4/5 text fades in */ 
 
      copyC.style.opacity = 
        fade; 
 
      copyC.style.transform = 
        `translateY(${35 - fade * 35}px)`; 
 
 
      metaA.style.opacity = 0; 
 
      metaB.style.opacity = 
        1 - fade; 
 
      metaC.style.opacity = 
        fade; 
 
    } 
 
 
  }; 
 
 
  window.addEventListener( 
    "scroll", 
    updateScenes, 
    { passive: true } 
  ); 
 
 
  window.addEventListener( 
    "resize", 
    updateScenes 
  ); 
 
 
  updateScenes(); 
 
 
})();

/* =========================================================
   GSAP NORMAL SECTIONS
   ========================================================= */

if (!reduce && window.gsap && window.ScrollTrigger) {

  gsap.registerPlugin(ScrollTrigger);


  /* PAGE SCROLL INDICATOR */

  gsap.to(".scroll-line span", {

    height: "100%",

    ease: "none",

    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: .3
    }

  });


  /* SECTION REVEALS */

  gsap.utils
    .toArray(".reveal")
    .forEach((el) => {

      gsap.to(el, {

        opacity: 1,
        y: 0,

        duration: .9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 86%"
        }

      });

    });


  /* SERVICE CARD TILT */

  document
    .querySelectorAll("[data-tilt]")
    .forEach((card) => {

      card.addEventListener("mousemove", (event) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width - .5;

        const y =
          (event.clientY - rect.top) /
          rect.height - .5;

        gsap.to(card, {

          rotateY: x * 4,
          rotateX: -y * 4,
          transformPerspective: 700,
          duration: .25

        });

      });


      card.addEventListener("mouseleave", () => {

        gsap.to(card, {

          rotateX: 0,
          rotateY: 0,
          duration: .5

        });

      });

    });

}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

if (
  !reduce &&
  matchMedia("(pointer:fine)").matches
) {

  const dot =
    document.querySelector(".cursor-dot");

  const ring =
    document.querySelector(".cursor-ring");

  if (dot && ring) {

    let mx = innerWidth / 2;
    let my = innerHeight / 2;

    let rx = mx;
    let ry = my;


    window.addEventListener("mousemove", (event) => {

      mx = event.clientX;
      my = event.clientY;

      dot.style.left = mx + "px";
      dot.style.top = my + "px";

      dot.style.opacity = 1;
      ring.style.opacity = 1;

    });


    function cursorLoop() {

      rx += (mx - rx) * .16;
      ry += (my - ry) * .16;

      ring.style.left = rx + "px";
      ring.style.top = ry + "px";

      requestAnimationFrame(cursorLoop);

    }

    cursorLoop();


    document
      .querySelectorAll("a,button,[data-tilt]")
      .forEach((el) => {

        el.addEventListener(
          "mouseenter",
          () => ring.classList.add("hover")
        );

        el.addEventListener(
          "mouseleave",
          () => ring.classList.remove("hover")
        );

      });

  }

}
/* =========================================================
   SPARKLEWASHIND — SERVICE POPUP
   ========================================================= */

(() => {

  const modal =
    document.querySelector("#service-modal");

  const modalPanel =
    document.querySelector(".service-modal-panel");

  const modalClose =
    document.querySelector("#service-modal-close");

  const modalBackdrop =
    document.querySelector(".service-modal-backdrop");

  const modalImage =
    document.querySelector("#service-modal-image");

  const modalNumber =
    document.querySelector("#service-modal-number");

  const modalTitle =
    document.querySelector("#service-modal-title");

  const modalDescription =
    document.querySelector("#service-modal-description");

  const modalIncludes =
    document.querySelector("#service-modal-includes");

  const modalBook =
    document.querySelector("#service-modal-book");


  if (
    !modal ||
    !modalClose ||
    !modalBackdrop ||
    !modalImage ||
    !modalNumber ||
    !modalTitle ||
    !modalDescription ||
    !modalIncludes ||
    !modalBook
  ) {
    return;
  }


  /* =====================================================
     SERVICE DATA
     ===================================================== */

  const services = {

    exterior: {

      number: "01",

      title: "Exterior Wash",

      description:
        "A thorough exterior clean designed to remove dirt, dust and road grime while leaving your vehicle fresh and glossy.",

      image:
        "./service-exterior.jpg",

      includes: [
        "Snow-foam pre-wash",
        "Body, glass & mirrors",
        "Alloys / wheels & tyres",
        "Streak-free hand dry"
      ]

    },


    "exterior-interior": {

      number: "02",

      title: "Exterior + Interior",

      description:
        "Complete outside and cabin care for a cleaner, fresher vehicle without leaving your home or workplace.",

      image:
        "./service-exterior-interior.jpg",

      includes: [
        "Complete exterior wash",
        "Cabin vacuum",
        "Dashboard & door pads",
        "Seats and mats cleaned"
      ]

    },


    "deep-interior": {

      number: "03",

      title: "Deep Interior Cleaning",

      description:
        "A deeper interior treatment for vehicles that need more than a regular vacuum and wipe-down.",

      image:
        "./service-deep-interior.jpg",

      includes: [
        "Upholstery shampoo",
        "Deep extraction",
        "Vents & crevices",
        "Roof lining cleaning"
      ]

    },


    "ceramic-foam": {

      number: "04",

      title: "Ceramic Foam Wash",

      description:
        "A premium foam wash designed to deliver extra gloss, slickness and hydrophobic protection.",

      image:
        "./service-ceramic-foam.jpg",

      includes: [
        "SiO₂-infused foam",
        "Hydrophobic beading",
        "Extra gloss",
        "Safe contact wash"
      ]

    },


    "paint-protection": {

      number: "05",

      title: "Paint Protection",

      description:
        "Choose from wax, Teflon or ceramic protection depending on the level of finish and protection your vehicle needs.",

      image:
        "./service-paint-protection.jpg",

      includes: [
        "Surface preparation",
        "Full-body wax",
        "Teflon coating",
        "Ceramic coating options"
      ]

    },


    "denting-painting": {

      number: "06",

      title: "Denting & Painting",

      description:
        "Professional repair work for dents, scratches, paint damage and related bodywork. Final pricing is based on inspection.",

      image:
        "./service-denting-painting.jpg",

      includes: [
        "Dent inspection",
        "Scratch / scuff repair",
        "Colour-matched painting",
        "Bumper repair options"
      ]

    }

  };


  /* =====================================================
     OPEN MODAL
     ===================================================== */

  function openService(serviceKey) {

    const service =
      services[serviceKey];

    if (!service) return;


    modalNumber.textContent =
      service.number;

    modalTitle.textContent =
      service.title;

    modalDescription.textContent =
      service.description;

    modalImage.src =
      service.image;

    modalImage.alt =
      service.title;


    modalIncludes.innerHTML =
      service.includes
        .map(
          (item) =>
            `<span>${item}</span>`
        )
        .join("");


    /* WhatsApp booking message */

    const message =
      `Hi SparkleWashIND! I'd like to book ${service.title}.\n\n` +
      `Vehicle: \n` +
      `Location: \n` +
      `Preferred date/time: `;


    modalBook.href =
      `https://wa.me/918688529166?text=${encodeURIComponent(message)}`;

    modalBook.target =
      "_blank";

    modalBook.rel =
      "noopener noreferrer";


    /* Show modal */

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "service-modal-open"
    );

  }


  /* =====================================================
     CLOSE MODAL
     ===================================================== */

  function closeService() {

    modal.classList.remove(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "service-modal-open"
    );

  }


  /* =====================================================
     SERVICE CARD CLICK
     ===================================================== */

  document
    .querySelectorAll(".service-card")
    .forEach((card) => {

      card.addEventListener(
        "click",
        (event) => {

          /*
             Prevent the arrow button's default
             behaviour from interfering.
          */

          event.preventDefault();

          const serviceKey =
            card.dataset.service;

          openService(serviceKey);

        }
      );

    });


  /* =====================================================
     CLOSE BUTTON
     ===================================================== */

  modalClose.addEventListener(
    "click",
    closeService
  );


  /* =====================================================
     BACKDROP CLICK
     ===================================================== */

  modalBackdrop.addEventListener(
    "click",
    closeService
  );


  /* =====================================================
     ESCAPE KEY
     ===================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
      ) {

        closeService();

      }

    }
  );


})();
/* =========================================================
   HOW IT WORKS — TIMELINE ANIMATION
========================================================= */

(() => {
  const steps = document.querySelectorAll(".how-step");

  if (!steps.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("how-step-active");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25
    }
  );

  steps.forEach((step) => observer.observe(step));
})();
/* =========================================================
   PRICING — VEHICLE TABS
========================================================= */

(() => {
  const tabs = document.querySelectorAll(".pricing-tab");
  const panels = document.querySelectorAll(".pricing-panel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const target = tab.dataset.priceTab;

      /* Remove active state */
      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      panels.forEach((panel) => {
        panel.classList.remove("active");
      });


      /* Activate selected tab */
      tab.classList.add("active");

      const panel = document.querySelector(
        `[data-price-panel="${target}"]`
      );

      if (!panel) return;

      panel.classList.add("active");


      /* Re-trigger card reveal animation */
      const cards = panel.querySelectorAll(".price-card");

      cards.forEach((card, index) => {

        card.classList.remove("price-card-visible");

        setTimeout(() => {
          card.classList.add("price-card-visible");
        }, 80 + index * 120);

      });

    });

  });

})();
/* =========================================================
   OUR WORK — SCROLL REVEAL
   ========================================================= */

(() => {
  const workSection = document.querySelector(".work-section");

  if (!workSection) return;

  const revealItems = workSection.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("work-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
})();
/* =========================================================
   FINAL CTA / BOOKING — SCROLL REVEAL
   ========================================================= */

(() => {
  const contactSection = document.querySelector(".contact-section");

  if (!contactSection) return;

  const revealItems = contactSection.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("contact-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
})();