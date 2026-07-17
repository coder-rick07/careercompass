# 🧭 CareerCompass AI — Smart Career Planning & In-Line Resume Builder

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/TR/css-3-core/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

CareerCompass AI is a high-fidelity, interactive career guidance platform designed for tech students and developers. The platform guides students from initial career exploration up to job application readiness, featuring an advanced Google Docs-style inline resume builder, interactive skill roadmap timelines, and a Flipkart/Amazon-inspired student reviews dashboard.

---

## 🔗 Important Links

* **Live Deployment Site**: [https://coder-rick07.github.io/careercompass/](https://coder-rick07.github.io/careercompass/)
* **GitHub Code Repository**: [https://github.com/coder-rick07/careercompass](https://github.com/coder-rick07/careercompass)

---

## 🌟 Core Features

*   **📝 Doc-Style Inline Resume Builder**: A standalone editor where you can write your resume directly on the A4 page sheet (`contenteditable="true"`), swap templates (Software Developer, Data Analyst, AI Engineer), add or delete sections, and print/export clean PDF sheets.
*   **📊 Amazon/Flipkart Reviews Dashboard**: A dual-column feedback widget with an interactive star rating distribution histogram, verified checkmarks, helpful vote counts, and real-time JavaScript counter callbacks.
*   **🗺️ Interactive Learning Roadmaps**: Clean, chronological roadmaps for modern tech roles, providing step-by-step guidance and curated external developer resources.
*   **🔍 Interactive Careers Explorer**: Live search-and-filter grid that classifies tech roles (Development, Design, Data & AI, Security) and lists salary ranges, skills, and detailed job scope descriptions.
*   **⚡ Performance Optimized**: Render-blocking font assets are removed, LCP graphics are compressed by 85.5% (down from 602KB to 87KB) and preloaded, and script calls are deferred, pushing performance scores close to 100%.

---

## 📊 Lighthouse Optimization Metrics

The application has been audited and tuned to satisfy strict performance and accessibility criteria:

| Metric Category | Throttled Mobile Score | Desktop Score | Optimizations Applied |
| :--- | :---: | :---: | :--- |
| **Performance** | **95+** | **99-100** | 85.5% LCP image size reduction, async font preconnects, script deferrals |
| **Accessibility** | **95+** | **95+** | WCAG AA contrast ratio compliance (`#475569` gray), semantic labels |
| **Best Practices**| **100** | **100** | Standard doctypes, zero console error warnings, HTTPS compatibility |
| **SEO** | **100** | **100** | Semantic header hierarchies, meta descriptions, title tags, canonical URLs |

---

## 📁 Component-Level System Documentation

This documentation breakdown matches the structural design sheets of the platform architecture, outlining the objectives, features, technical implementation details, and future directions for all 8 system components:

### 1. Header
*   **Overview**: Provides sitewide platform branding, navigation menus, and call-to-action shortcuts.
*   **Objectives**:
    *   Enable clear, persistent sitewide navigation.
    *   Provide easy access to core platform sections.
    *   Establish premium visual brand identity.
    *   Support fully responsive mobile access drawer.
*   **Features Demonstrated**: Adaptive links with active indicator states, SVG brand logo, main CTA button links, and mobile hamburger animations.
*   **Technical Implementation**: Sticky-position wrapper styled with CSS Flexbox spacing and JavaScript classes to toggle mobile overlays.
*   **Future Improvements**: Integrate notifications hub or active candidate profile dashboards.

### 2. Hero Section
*   **Overview**: Serves as the high-impact landing banner introducing the platform and core CTAs.
*   **Objectives**:
    *   Hook user attention immediately using premium visuals.
    *   Clearly convey the platform value proposition (AI guidance).
    *   Provide direct onboarding click triggers.
    *   Establish platform authority with placement metrics.
*   **Features Demonstrated**: Decorative ambient glow graphics, animated utility tags, high-priority CTA links, and floating credential cards (ATS approved, ₹12 LPA).
*   **Technical Implementation**: Responsive CSS grid structures, keyframe animations, and prioritized loading parameters on preloaded LCP graphics.
*   **Future Improvements**: Embed a live interactive search bar to query roles directly in the banner.

### 3. Stats Section
*   **Overview**: Highlights key platform impact metrics to demonstrate scale.
*   **Objectives**:
    *   Build student and recruiter trust using verified data.
    *   Provide visual checkpoints of platform accomplishments.
    *   Confirm platform authority and scope.
*   **Features Demonstrated**: Live counting stats blocks and interactive grid layouts.
*   **Technical Implementation**: IntersectionObserver API in JavaScript triggering dynamic numeric updates from 0 to target metrics upon scroll entry.
*   **Future Improvements**: Connect metrics to active live database counters to update metrics in real-time.

### 4. Skill Roadmaps
*   **Overview**: Provides structured, role-specific learning pathways charting chronological checkpoints.
*   **Objectives**:
    *   Guide candidate skill acquisition dynamically.
    *   Show chronological and sequential resource roadmaps.
    *   Recommend specific, verified external learning assets.
    *   Improve career and study pathway planning.
*   **Features Demonstrated**: Interactive horizontal tab filters, linear progress timelines, curated tutorial links, and step-by-step milestone badges.
*   **Technical Implementation**: Timeline layouts utilizing responsive flex columns and custom dot indicators connected to tab viewport selectors.
*   **Future Improvements**: Track individual user learning progress using account sessions and database states.

### 5. Resume Hub & Interview Prep
*   **Overview**: Facilitates ATS-friendly resume generation and interview readiness.
*   **Objectives**:
    *   Provide expert guidance on resume building.
    *   Equip users with robust interview preparation structures.
    *   Increase overall candidate employability metrics.
    *   Provide actionable, structured HR and technical tips.
*   **Features Demonstrated**: Google Docs-style inline canvas editor, dynamic role templates, customizable work/project blocks, collapsible Q&A accordions, and framework guide tabs (STAR model).
*   **Technical Implementation**: Fully editable document nodes (`contenteditable`), print media layout sheets (`@media print` overrides), custom state templates, and responsive flex components.
*   **Future Improvements**: Connect resume documents to AI feedback microservices for real-time rating assessments.

### 6. Testimonials (Student Reviews)
*   **Overview**: Displays authentic student success reviews and rating scores.
*   **Objectives**:
    *   Increase platform trust and validation indices.
    *   Show visual social proof of candidate placements.
    *   Improve academic and career guide credibility.
    *   Organize and display detailed user feedback.
*   **Features Demonstrated**: Flipkart/Amazon-style reviews layout, verified student indicator checkmarks, rating distribution histograms, and interactive helpful feedback votes.
*   **Technical Implementation**: Reusable review card elements and progress-bar grids next to a sticky rating summary sidebar.
*   **Future Improvements**: Build database API connections to sync live student review submissions dynamically.

### 7. FAQs & Contact
*   **Overview**: Answers standard user inquiries and supplies quick contact submission channels.
*   **Objectives**:
    *   Resolve generic visitor questions instantly.
    *   Enable clean channels for business communication.
    *   Improve platform support and user help pathways.
    *   Increase system usability and contact conversions.
*   **Features Demonstrated**: Collapsible FAQ accordion cards, interactive contact forms, social follow shortcuts, and integrated map embeds.
*   **Technical Implementation**: Responsive HTML forms, JavaScript accordion handlers, and search-query Google Maps embeds (`iframe`).
*   **Future Improvements**: Integrate backend mailing libraries (e.g. NodeMailer) to send messages to admin dashboards.

### 8. Footer
*   **Overview**: Supplies persistent utility navigation links, newsletter signup, and copyright disclosures.
*   **Objectives**:
    *   Improve sitewide navigation and footer indexing.
    *   Display official copyright and branding declarations.
    *   Provide direct links to platform terms and privacy pages.
    *   Enable direct email marketing list signups.
*   **Features Demonstrated**: Footer link groups, newsletter form validations, social SVGs, and responsive copyright columns.
*   **Technical Implementation**: Responsive footer layout utilizing CSS Flexbox with column wrapping.
*   **Future Improvements**: Connect email submissions to Mailchimp or backend newsletter databases.

---

## 🛠️ Technology Stack

*   **Structure**: Semantic HTML5 markup
*   **Styles**: Custom Vanilla CSS3 grid systems, layouts, animations, and custom print-media CSS stylesheets (`@media print`)
*   **Logic**: Pure, native Vanilla JavaScript (ES6+) for DOM interactions, template injections, and event binds
*   **Compression Utility**: Python (Pillow library) for high-ratio image compression

---

## 📁 Repository Structure

```directory
careercompass/
├── assets/
│   └── hero-illustration.jpg   # Optimized LCP Hero Image (87KB Jpeg)
├── index.html                  # Landing Page & Features
├── resume.html                 # Standalone Resume Builder Document Canvas
├── resume.js                   # Interactive logic for Resume builder
├── script.js                   # Core JS (filters, modal, reviews, stats)
├── style.css                   # Global stylesheet (themes, grid, responsive)
└── README.md                   # Project details and documentation
```

---

## 🚀 Local Installation & Quick Start

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/coder-rick07/careercompass.git
    cd careercompass
    ```

2.  **Start a Local Development Server**:
    Using Python:
    ```bash
    python -m http.server 8080
    ```

3.  **Run in Browser**:
    Open [http://localhost:8080](http://localhost:8080) to preview the platform locally.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for details.
