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
