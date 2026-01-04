document.addEventListener('DOMContentLoaded', () => {
  // Fade-in sections
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));

  // Vinyl easter egg
  const vinylEgg = document.querySelector('.vinyl-easter-egg');
  setTimeout(() => {
    vinylEgg.classList.add('active'); // appear after 3s
  }, 3000);

  const vinylSpin = document.querySelector('.vinyl-spin');
  if (vinylSpin && resumeModal) {
    vinylSpin.addEventListener('dbclick', () => {
      resumeModal.classList.add('active');
    }
    );
  }
  const vinylStack = document.querySelector('.vinyl-stack'); // updated

  // Toggle fan-out vinyl stack
  vinylSpin.addEventListener('click', () => {
    vinylStack.classList.toggle('active'); // toggle fan-out
  });
});

// Resume fun stuff
const openResume = document.getElementById('openResume');
const resumeModal = document.getElementById('resumeModal');
const closeResume = document.getElementById('closeResume');

if ( openResume && resumeModal && closeResume) {
  openResume.addEventListener('click', () => {
    resumeModal.classList.add('active');
  });

  closeResume.addEventListener('click', () => {
    resumeModal.classList.remove('active');
  });

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
    }
  });
}

async function loadLatestPost() {
  const query =
  query {
    user(username: "TheSoulCod3r") {
      publication {
        posts(first: 1) {
          edges {
            node {
              title
              brief
              url
              coverImage
                url
            }
          }
        }
      }
    }
  }
  
};

try {
  const res = await fetch("https:gql.hashnode.com/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
  });

  const json = await res.json();
}
