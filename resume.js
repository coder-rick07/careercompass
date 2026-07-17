// Role templates database for inline doc editing
const roleResumeTemplates = {
  "Software Developer": {
    name: "Rahul Sharma",
    meta: "rahul.sharma@email.com | +91 98765 43210 | New Delhi, India",
    skills: `<strong>Languages:</strong> Java, Python, JavaScript, HTML/CSS, SQL<br><strong>Frameworks/Tools:</strong> React.js, Node.js, Express.js, Git, Docker, MongoDB`,
    experiences: [
      {
        title: "Software Engineering Intern",
        company: "TechSolutions Ltd.",
        location: "New Delhi, India",
        date: "May 2026 - Present",
        bullets: [
          "Collaborated in an agile team of 5 to develop and optimize REST APIs using Express.js and Node.js, reducing server latency by 25%.",
          "Refactored legacy React class components into functional components with Redux Toolkit, enhancing state efficiency and reducing bundle sizes by 15%.",
          "Wrote comprehensive unit tests using Jest, achieving 85% coverage across core controller paths."
        ]
      }
    ],
    projects: [
      {
        title: "E-Commerce Microservices Application",
        tech: "React, Node.js, MongoDB, Docker",
        bullets: [
          "Designed and deployed a responsive front-end storefront with pagination and search queries, increasing user conversion metrics by 18%.",
          "Implemented JWT session authorization checks and integrated Stripe payment processing interfaces.",
          "Containerized microservices using Docker configurations, simplifying local team setup times."
        ]
      }
    ]
  },
  "Data Analyst": {
    name: "Priya Patel",
    meta: "priya.patel@email.com | +91 98765 43211 | Mumbai, India",
    skills: `<strong>Languages:</strong> SQL (MySQL, PostgreSQL), Python, R, Excel Formulas<br><strong>Tools/Libraries:</strong> Power BI, Tableau, Pandas, NumPy, Scikit-Learn`,
    experiences: [
      {
        title: "Data Analytics Intern",
        company: "RetailCorp Solutions",
        location: "Mumbai, India",
        date: "June 2026 - Present",
        bullets: [
          "Analyzed 100K+ transactional purchasing user logs using Python and SQL to spot drop-offs, raising checkouts by 12%.",
          "Automated weekly sales performance pipeline updates using CRON triggers and SQL query scripts, saving 8+ engineering hours per week.",
          "Presented monthly interactive performance summaries to team leads, recommending inventory adjustments that cut product stock-outs by 15%."
        ]
      }
    ],
    projects: [
      {
        title: "Global Sales Performance Dashboard",
        tech: "Power BI, SQL, Python, Excel",
        bullets: [
          "Constructed multi-table SQL queries to extract data, cleaning anomalies and handling missing fields in Pandas.",
          "Configured interactive visuals in Power BI with dynamic slicing parameters to track geographic sales trends.",
          "Performed predictive customer segmentation clustering models to target high-value buyer cohorts."
        ]
      }
    ]
  },
  "AI Engineer": {
    name: "Aman Gupta",
    meta: "aman.gupta@email.com | +91 98765 43212 | Bengaluru, India",
    skills: `<strong>Languages:</strong> Python, C++, SQL, Bash scripting<br><strong>AI Stacks:</strong> PyTorch, TensorFlow, Scikit-Learn, OpenCV, FastAPI, HuggingFace`,
    experiences: [
      {
        title: "Machine Learning Intern",
        company: "IntelligentSystems Inc.",
        location: "Bengaluru, India",
        date: "Jan 2026 - Present",
        bullets: [
          "Researched and integrated fine-tuned text embedding Transformer models (BERT) into search algorithms, raising recall scores by 18%.",
          "Optimized neural model weights and compiled execution paths with ONNX Runtime, accelerating local inference speeds by 40%.",
          "Configured automated preprocessing scripts for dirty, unlabelled text datasets, saving up to 50% annotation hours."
        ]
      }
    ],
    projects: [
      {
        title: "Medical Image Segmentation Engine",
        tech: "PyTorch, U-Net, OpenCV, FastAPI",
        bullets: [
          "Trained a convolutional U-Net segmentation network to classify anomalies, attaining a 94.5% Dice coefficient.",
          "Built a FastAPI serving interface to process high-resolution diagnostic image uploads and output overlaid masks.",
          "Implemented model pipeline tracking metrics using Weights & Biases to trace parameter performance."
        ]
      }
    ]
  }
};

// DOM references
const templateSelect = document.getElementById('template-select');
const btnAddExperience = document.getElementById('btn-add-experience');
const btnAddProject = document.getElementById('btn-add-project');
const btnDownloadPdf = document.getElementById('btn-download-pdf');
const btnCopyMarkdown = document.getElementById('btn-copy-markdown');

const docFullName = document.getElementById('doc-full-name');
const docMetaInfo = document.getElementById('doc-meta-info');
const docSkillsBox = document.getElementById('doc-skills-box');
const docExperienceList = document.getElementById('doc-experience-list');
const docProjectsList = document.getElementById('doc-projects-list');

// Toast feedback helper
const showToast = (message) => {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-success-icon">✓</span>
    <span style="font-size: 0.9rem; font-weight: 500;">${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      container.removeChild(toast);
    }, 400);
  }, 4000);
};

// Global delete handler
window.deleteBlock = (button) => {
  const block = button.closest('.doc-block');
  if (block) {
    block.remove();
    showToast("Section block removed from resume.");
  }
};

// Apply template structure
const applyTemplate = (role) => {
  const template = roleResumeTemplates[role];
  if (!template) return;
  
  docFullName.textContent = template.name;
  docMetaInfo.textContent = template.meta;
  docSkillsBox.innerHTML = template.skills;
  
  // Populate experiences
  docExperienceList.innerHTML = '';
  template.experiences.forEach(exp => {
    const block = document.createElement('div');
    block.className = 'doc-block';
    block.innerHTML = `
      <div class="doc-row-between">
        <span contenteditable="true">${exp.title}</span>
        <span contenteditable="true" style="color: #475569;">${exp.company}</span>
      </div>
      <div class="doc-row-sub">
        <span contenteditable="true">${exp.location}</span>
        <span contenteditable="true">${exp.date}</span>
      </div>
      <ul class="doc-bullets">
        ${exp.bullets.map(bullet => `<li contenteditable="true">${bullet}</li>`).join('')}
      </ul>
      <div class="block-actions">
        <button class="block-btn-delete" title="Delete experience block" onclick="deleteBlock(this)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
    docExperienceList.appendChild(block);
  });
  
  // Populate projects
  docProjectsList.innerHTML = '';
  template.projects.forEach(proj => {
    const block = document.createElement('div');
    block.className = 'doc-block';
    block.innerHTML = `
      <div class="doc-row-between">
        <span contenteditable="true">${proj.title}</span>
        <span contenteditable="true" style="color: #475569;">${proj.tech}</span>
      </div>
      <ul class="doc-bullets" style="margin-top: 0.4rem;">
        ${proj.bullets.map(bullet => `<li contenteditable="true">${bullet}</li>`).join('')}
      </ul>
      <div class="block-actions">
        <button class="block-btn-delete" title="Delete project block" onclick="deleteBlock(this)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
    docProjectsList.appendChild(block);
  });
  
  showToast(`Applied ${role} template successfully.`);
};

// Event listeners
templateSelect.addEventListener('change', () => {
  applyTemplate(templateSelect.value);
});

btnAddExperience.addEventListener('click', () => {
  const block = document.createElement('div');
  block.className = 'doc-block';
  block.innerHTML = `
    <div class="doc-row-between">
      <span contenteditable="true">Role / Job Title</span>
      <span contenteditable="true" style="color: #475569;">Company Name</span>
    </div>
    <div class="doc-row-sub">
      <span contenteditable="true">Location</span>
      <span contenteditable="true">Duration (e.g. June 2026 - Present)</span>
    </div>
    <ul class="doc-bullets">
      <li contenteditable="true">Describe a metric-focused achievement using active verbs.</li>
      <li contenteditable="true">Detail technologies applied and quantitative outcome of tasks.</li>
    </ul>
    <div class="block-actions">
      <button class="block-btn-delete" title="Delete experience block" onclick="deleteBlock(this)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `;
  docExperienceList.appendChild(block);
  block.querySelector('span').focus();
  showToast("Added new experience block.");
});

btnAddProject.addEventListener('click', () => {
  const block = document.createElement('div');
  block.className = 'doc-block';
  block.innerHTML = `
    <div class="doc-row-between">
      <span contenteditable="true">Project Title</span>
      <span contenteditable="true" style="color: #475569;">Tech stack (e.g. React, Python)</span>
    </div>
    <ul class="doc-bullets" style="margin-top: 0.4rem;">
      <li contenteditable="true">Explain the architecture of the tool and metrics built.</li>
      <li contenteditable="true">Add links or repository references showing testing details.</li>
    </ul>
    <div class="block-actions">
      <button class="block-btn-delete" title="Delete project block" onclick="deleteBlock(this)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `;
  docProjectsList.appendChild(block);
  block.querySelector('span').focus();
  showToast("Added new project block.");
});

btnDownloadPdf.addEventListener('click', () => {
  showToast("Preparing document. Opening system print dialog...");
  setTimeout(() => {
    window.print();
  }, 800);
});

btnCopyMarkdown.addEventListener('click', () => {
  const name = docFullName.textContent.trim();
  const meta = docMetaInfo.textContent.trim();
  const skills = docSkillsBox.innerText.trim();
  
  let rawText = `# ${name}\n${meta}\n\n`;
  
  // Extract education
  rawText += `## Education\n`;
  const eduBlocks = document.querySelectorAll('#resume-sheet > .doc-block');
  eduBlocks.forEach(block => {
    const row1 = block.querySelector('.doc-row-between');
    const row2 = block.querySelector('.doc-row-sub');
    if (row1 && row2) {
      rawText += `- **${row1.children[0].textContent.trim()}** | ${row1.children[1].textContent.trim()}\n`;
      rawText += `  *${row2.children[0].textContent.trim()}* | ${row2.children[1].textContent.trim()}\n`;
    }
  });
  
  // Extract skills
  rawText += `\n## Technical Skills\n${skills}\n\n`;
  
  // Extract experiences
  rawText += `## Work Experience\n`;
  const expBlocks = docExperienceList.querySelectorAll('.doc-block');
  expBlocks.forEach(block => {
    const row1 = block.querySelector('.doc-row-between');
    const row2 = block.querySelector('.doc-row-sub');
    const bullets = block.querySelectorAll('.doc-bullets li');
    if (row1 && row2) {
      rawText += `### ${row1.children[0].textContent.trim()} @ ${row1.children[1].textContent.trim()}\n`;
      rawText += `*${row2.children[0].textContent.trim()} | ${row2.children[1].textContent.trim()}*\n`;
      bullets.forEach(bullet => {
        rawText += `- ${bullet.textContent.trim()}\n`;
      });
      rawText += `\n`;
    }
  });
  
  // Extract projects
  rawText += `## Projects\n`;
  const projBlocks = docProjectsList.querySelectorAll('.doc-block');
  projBlocks.forEach(block => {
    const row1 = block.querySelector('.doc-row-between');
    const bullets = block.querySelectorAll('.doc-bullets li');
    if (row1) {
      rawText += `### ${row1.children[0].textContent.trim()} (${row1.children[1].textContent.trim()})\n`;
      bullets.forEach(bullet => {
        rawText += `- ${bullet.textContent.trim()}\n`;
      });
      rawText += `\n`;
    }
  });

  navigator.clipboard.writeText(rawText.trim())
    .then(() => showToast("Copied compile Markdown to clipboard!"))
    .catch(() => showToast("Failed to copy compilation."));
});
