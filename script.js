document.addEventListener('DOMContentLoaded', () => {
  console.log("JS is loading fine");


  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


// document.addEventListener('DOMContentLoaded', () => {

  

// // // Resume fun stuff
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

//testing hashnode post

// async function loadLatestPost() {
//   const query = `
//     query {
//       user(username: "TheSoulCod3r") {
//         publication {
//           posts(first: 1) {
//             edges {
//               node {
//                 title
//                 brief
//                 url
//                 coverImage {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     console.log("Fetching Hashnode post...");
//     const res = await fetch("https://gql.hashnode.com/", {
//   method: "POST",
//   headers: { 
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     query: `
//       query {
//         user(username: "TheSoulCod3r") {
//           publication {
//             posts(first: 1) {
//               edges {
//                 node {
//                   title
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   })
// })
// .then(r => r.json())
// .then(console.log)
// .catch(console.error);

// // Call the function
// loadLatestPost();


// Hashnode Post Here
async function loadLatestPost() {
 const query = `
query {
  publication(host: "thesoulcoder.hashnode.dev") {
    posts(first: 1) {
      edges {
        node {
          id
          title
          brief
          url
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

try {
  const res= await fetch ("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ query })
  });
  if (!res.ok)
    throw new Error (`HTTP error ${res.status}`);
  

  const json = await res.json();
  console.log("Hashnode response:", json);
  const post = json.data?.publication?.posts?.edges[0]?.node;
  const container = document.getElementById("featured-post");
  if (!container) return;

  container.innerHTML = `
  <img
    src="${post.coverImage?.url || ''}"
    alt="${post.title}"
    />
    <div class="blog-content">
      <h3>${post.title}</h3>
      <p>${post.brief}</p>
      <a
        href="${post.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn primary"

        >
        Read Article 📖
        </a>
    </div>
  
  `;

} catch (err) {
  console.error("Failed to load my hashnode post:", err);
}

}

loadLatestPost();