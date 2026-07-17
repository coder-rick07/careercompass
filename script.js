// ==========================================
// 1. MOBILE NAVIGATION & SCROLL HANDLER
// ==========================================

const header = document.getElementById('navbar-header');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll styling toggle
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hamburger toggle
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when clicking nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// Navigation scroll spy (Active Link Highlighter)
const sections = document.querySelectorAll('section[id]');
const scrollSpyOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px', // Trigger activation near vertical center
  threshold: 0
};

const scrollSpyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, scrollSpyOptions);

sections.forEach(section => scrollSpyObserver.observe(section));


// ==========================================
// 2. STATS COUNTER COUNT-UP ANIMATION
// ==========================================

const statsSection = document.querySelector('.stats');
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        // Format large numbers nicely
        if (target >= 10000) {
          stat.textContent = target.toLocaleString() + '+';
        } else {
          stat.textContent = target + '+';
        }
      } else {
        stat.textContent = Math.floor(current).toLocaleString() + '+';
      }
    }, stepTime);
  });
};

const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      observer.unobserve(entry.target); // Trigger once
    }
  });
}, { threshold: 0.2 });

if (statsSection) {
  statsObserver.observe(statsSection);
}


// ==========================================
// 3. CAREER EXPLORER FILTER & DETAILS MODAL
// ==========================================

const filterTabs = document.querySelectorAll('.filter-tab');
const careerCards = document.querySelectorAll('.career-card');
const careerSearchInput = document.getElementById('career-search-input');
let activeCategory = 'all';

// Unified search and category filter function
const filterCareers = () => {
  const query = careerSearchInput ? careerSearchInput.value.trim().toLowerCase() : '';
  
  careerCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const cardTitle = card.querySelector('.career-title').textContent.toLowerCase();
    const cardDesc = card.querySelector('.career-desc').textContent.toLowerCase();
    const skillTags = Array.from(card.querySelectorAll('.skill-tag')).map(t => t.textContent.toLowerCase());
    
    const categoryMatches = (activeCategory === 'all' || cardCat === activeCategory);
    const searchMatches = (
      cardTitle.includes(query) || 
      cardDesc.includes(query) || 
      skillTags.some(tag => tag.includes(query))
    );
    
    if (categoryMatches && searchMatches) {
      card.style.display = 'flex';
      card.style.animation = 'slideUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
};

// Filter tab clicks
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.getAttribute('data-filter');
    filterCareers();
  });
});

// Search input keyups
if (careerSearchInput) {
  careerSearchInput.addEventListener('input', filterCareers);
}

// Career Modal Data Store
const careerModalData = {
  dev: {
    title: "Software Developer",
    subtitle: "Average Salary: ₹5–20 LPA",
    desc: "Software Developers design, run, and maintain operational applications, database linkages, and responsive frontend systems.",
    duties: [
      "Write high quality logic in Javascript, Python, or Go.",
      "Build databases and connect APIs using Node.js or SQL.",
      "Work closely with UI designers to build dynamic interfaces.",
      "Deploy products on server setups and troubleshoot bugs."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Git", "SQL/NoSQL"]
  },
  data: {
    title: "Data Analyst",
    subtitle: "Average Salary: ₹4–15 LPA",
    desc: "Data Analysts clean massive raw information datasets, run statistical correlations, and compile visualization reports for businesses.",
    duties: [
      "Perform data mining operations on database files.",
      "Identify consumer usage trends using statistical math.",
      "Build live visual reports in Power BI or Tableau interfaces.",
      "Explain complex statistics to management to drive strategies."
    ],
    skills: ["Excel", "SQL", "Python", "Power BI", "Tableau", "Statistics", "Pandas", "Matplotlib"]
  },
  ai: {
    title: "AI Engineer",
    subtitle: "Average Salary: ₹8–30 LPA",
    desc: "AI Engineers design, implement, and deploy artificial intelligence algorithms, neural networks, and model processing systems.",
    duties: [
      "Train convolutional or deep feedback models.",
      "Clean massive text/image dataset pipelines.",
      "Integrate large language model API loops.",
      "Deploy model weights into serverless script containers."
    ],
    skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Deep Learning", "FastAPI", "NLP"]
  },
  cloud: {
    title: "Cloud Engineer",
    subtitle: "Average Salary: ₹6–25 LPA",
    desc: "Cloud Engineers deploy server setups, secure cloud networks, and orchestrate containerized microservices across cloud hosting systems.",
    duties: [
      "Create virtual clouds and subnets in AWS or Azure.",
      "Containerize developer repositories using Docker scripts.",
      "Orchestrate cluster scaling using Kubernetes rules.",
      "Build automated CI/CD validation checks."
    ],
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Terraform", "CI/CD", "Bash"]
  },
  security: {
    title: "Cybersecurity Analyst",
    subtitle: "Average Salary: ₹6–22 LPA",
    desc: "Cybersecurity Analysts protect networks, conduct penetrative safety checks, and resolve security threats.",
    duties: [
      "Configure firewalls and encryption protocols.",
      "Conduct ethical penetration hacks to spot systems bugs.",
      "Monitor servers for security breaches or data leaks.",
      "Write safety manuals for developer compliance."
    ],
    skills: ["Linux", "Networking", "Wireshark", "Metasploit", "Cryptography", "Ethical Hacking", "Python"]
  },
  design: {
    title: "UI/UX Designer",
    subtitle: "Average Salary: ₹5–18 LPA",
    desc: "UI/UX Designers sketch user layouts, design high fidelity prototypes, and align visuals with user research data.",
    duties: [
      "Create mock wireframes and user flow architectures.",
      "Design final visual panels in Figma matching style guides.",
      "Test mockup prototypes with actual users to fix friction.",
      "Export assets and specs to help developers code pages."
    ],
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Interaction Design", "Typography"]
  }
};

// Modal DOM handlers
const modalOverlay = document.getElementById('career-modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalHeaderContent = document.getElementById('modal-header-content');
const modalBodyContent = document.getElementById('modal-body-content');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

learnMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const careerKey = btn.getAttribute('data-career');
    const info = careerModalData[careerKey];
    
    if (info) {
      // Setup header
      modalHeaderContent.innerHTML = `
        <div>
          <h3 style="font-size:1.5rem; font-family:var(--font-heading); color:var(--dark); font-weight:700;">${info.title}</h3>
          <p style="color:var(--primary); font-weight:600; font-size:0.95rem; margin-top:0.25rem;">${info.subtitle}</p>
        </div>
      `;

      // Setup body
      let skillsHtml = info.skills.map(s => `<span class="skill-tag" style="margin: 0.2rem;">${s}</span>`).join('');
      let dutiesHtml = info.duties.map(d => `<li>${d}</li>`).join('');

      modalBodyContent.innerHTML = `
        <p style="font-size:0.95rem; margin-bottom:1.25rem; line-height:1.6;">${info.desc}</p>
        
        <h4 style="font-family:var(--font-heading); font-weight:600; font-size:1.1rem; color:var(--dark); margin-bottom:0.5rem;">Key Responsibilities</h4>
        <ul style="list-style-type:disc; padding-left:1.25rem; margin-bottom:1.5rem; font-size:0.925rem;">
          ${dutiesHtml}
        </ul>

        <h4 style="font-family:var(--font-heading); font-weight:600; font-size:1.1rem; color:var(--dark); margin-bottom:0.5rem;">Target Skills Required</h4>
        <div class="skills-list" style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.5rem;">
          ${skillsHtml}
        </div>
        
        <div style="display:flex; justify-content:flex-end;">
          <a href="#roadmaps" class="btn btn-primary btn-sm" onclick="closeCareerModal(); selectRoadmap('${careerKey}')">View Learning Roadmap</a>
        </div>
      `;

      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Lock background scroll
    }
  });
});

const closeCareerModal = () => {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = 'auto';
};

modalCloseBtn.addEventListener('click', closeCareerModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeCareerModal();
});


// ==========================================
// 4. INTERACTIVE ROADMAP SELECTOR
// ==========================================

const roadmapBtns = document.querySelectorAll('.roadmap-selector-btn');
const roadmapViewports = document.querySelectorAll('.timeline-viewport');

const selectRoadmap = (roadmapKey) => {
  // Map explorer keys to roadmap keys if needed
  let targetKey = roadmapKey;
  if (roadmapKey === 'dev' || roadmapKey === 'design' || roadmapKey === 'security') targetKey = 'dev';
  if (roadmapKey === 'data' || roadmapKey === 'ai') targetKey = 'ai';
  if (roadmapKey === 'cloud') targetKey = 'cloud';

  // Toggle active button
  roadmapBtns.forEach(btn => {
    if (btn.getAttribute('data-roadmap') === targetKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle active timeline viewport
  roadmapViewports.forEach(viewport => {
    if (viewport.getAttribute('id') === `roadmap-viewport-${targetKey}`) {
      viewport.classList.add('active');
    } else {
      viewport.classList.remove('active');
    }
  });
};

roadmapBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const rKey = btn.getAttribute('data-roadmap');
    selectRoadmap(rKey);
  });
});


// ==========================================
// 5. MOCK RESUME BUILDER WIDGET
// ==========================================

// Resume Builder has been migrated to its own page (resume.html and resume.js) to enable doc-style editing.



// ==========================================
// 6. COLLAPSIBLE ACCORDIONS (ADVICE, QA, FAQ)
// ==========================================

const toggleTipAccordion = (cardIndex) => {
  const cards = document.querySelectorAll('.tip-accordion-card');
  cards.forEach((card, index) => {
    if (index + 1 === cardIndex) {
      card.classList.toggle('open');
    } else {
      card.classList.remove('open');
    }
  });
};

const toggleQA = (cardIndex) => {
  const cards = document.querySelectorAll('.qa-card');
  cards.forEach((card, index) => {
    if (index + 1 === cardIndex) {
      card.classList.toggle('open');
    } else {
      card.classList.remove('open');
    }
  });
};

const toggleFAQ = (cardIndex) => {
  const cards = document.querySelectorAll('.faq-card');
  cards.forEach((card, index) => {
    if (index + 1 === cardIndex) {
      card.classList.toggle('open');
    } else {
      card.classList.remove('open');
    }
  });
};


// ==========================================
// 7. INTERVIEW PREPARATION TABS SWITCHER
// ==========================================

const prepTabBtns = document.querySelectorAll('.prep-tab-btn');
const prepContentPanes = document.querySelectorAll('.prep-tab-content-pane');

prepTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    prepTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tabId = btn.getAttribute('data-tab');
    prepContentPanes.forEach(pane => {
      if (pane.getAttribute('id') === `pane-${tabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  });
});


// ==========================================
// 8. TESTIMONIAL GRID (PURE CSS / RESPONSIVE)
// ==========================================
// Testimonial cards are laid out in a responsive grid. No JS slider overhead needed.


// ==========================================
// 9. FORM VALIDATIONS & TOAST NOTIFICATION
// ==========================================

const showToast = (message) => {
  const container = document.getElementById('toast-container');
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-success-icon">✓</span>
    <span style="font-size: 0.9rem; font-weight: 500;">${message}</span>
  `;

  container.appendChild(toast);
  
  // Trigger animation show
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      container.removeChild(toast);
    }, 400); // Wait for transition fade out
  }, 4000);
};

const handleContactSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const phone = document.getElementById('form-phone').value;
  const message = document.getElementById('form-message').value;

  if (name && email && phone && message) {
    // Simulate submission
    showToast(`Thank you, ${name}! Your message was sent successfully.`);
    document.getElementById('contact-form').reset();
  } else {
    showToast("Please fill in all form inputs.");
  }
};

const handleNewsletterSubmit = (event) => {
  event.preventDefault();
  
  const email = document.getElementById('newsletter-email').value;
  
  if (email) {
    showToast("Subscribed! Thank you for joining our newsletter.");
    document.getElementById('newsletter-form').reset();
  }
};

// Global Amazon-style helpful vote counter
window.voteHelpful = (id) => {
  const voteElem = document.getElementById(`vote-count-${id}`);
  if (voteElem) {
    let currentVotes = parseInt(voteElem.textContent);
    voteElem.textContent = currentVotes + 1;
    showToast("Feedback submitted. Thank you!");
  }
};
