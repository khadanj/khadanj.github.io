# Design Document: James Khadan Personal Homepage

## Project Description

This project is my portfolio website, as a Computer Science student at Northeastern University. The website serves as a professional online presence to showcase technical skills, work experience, and projects to potential employers, collaborators, and the broader tech community.

The site is built using vanilla HTML5, CSS3, and ES6+ JavaScript with Bootstrap 5 for responsive design. It consists of three pages: the homepage (index.html), a projects page (projects.html), and a clubs page (clubs.html). The creative element is collapsible experience cards on the homepage, allowing visitors to click on experience entries to expand and view detailed descriptions with smooth animations.

### Goals

1. Present professional information in a clean, accessible format
2. Highlight technical skills and experience relevant to software engineering roles
3. Showcase completed projects with detailed descriptions
4. Demonstrate leadership and community involvement through club activities
5. Provide easy contact methods for networking and job opportunities
6. Demonstrate proficiency in modern web development practices

---

## User Personas

### Persona 1: Technical Recruiter - Sarah Chen

**Background:**

- 8 years experience in tech recruiting
- Works at a Fortune 500 technology company
- Reviews 50+ candidate portfolios per week
- Values efficiency and quick access to relevant information

**Goals:**

- Quickly assess candidate qualifications
- Find contact information easily
- Verify technical skills match job requirements
- Share candidate profile with hiring managers

**Pain Points:**

- Slow-loading websites waste time
- Buried or missing contact information
- Vague project descriptions without technical details
- Inconsistent or unprofessional design

**How the site addresses needs:**

- Clean layout with clear navigation
- Skills section prominently displayed, organized by category
- Contact information in multiple locations (header links, dedicated section)
- Detailed project cards with technology tags
- Collapsible experience cards for quick scanning with option to expand details
- Clubs page showcasing leadership and mentorship roles

---

### Persona 2: Engineering Manager - Marcus Johnson

**Background:**

- 12 years in software development, 4 in management
- Leads a team of 8 engineers at a fintech startup
- Looking for co-op candidates with systems experience
- Values practical project experience over academic achievements alone

**Goals:**

- Understand depth of technical knowledge
- Evaluate problem-solving approach through projects
- Assess cultural fit based on interests and activities
- Gauge communication skills through content quality

**Pain Points:**

- Portfolios that only list skills without demonstrating application
- Lack of context around project complexity and impact
- Missing information about team collaboration experience

**How the site addresses needs:**

- Project pages with detailed feature lists and impact metrics
- Experience section highlighting team collaboration (SCRUM Lead, Mentoring)
- Quantified achievements (100+ hours saved, 3000+ users served)
- Clear writing demonstrating communication ability
- Clubs page demonstrating mentorship of 80+ students and community engagement

---

### Persona 3: Peer Developer - Alex Rivera

**Background:**

- Junior software engineer at a cloud infrastructure company
- Active on GitHub and tech Twitter
- Interested in systems programming and Rust
- Looking for open-source collaborators

**Goals:**

- Find interesting projects to learn from or contribute to
- Connect with developers working on similar problems
- Explore implementation approaches for container technology

**Pain Points:**

- Portfolios without links to actual code
- Vague project descriptions lacking technical depth
- No way to connect on professional platforms

**How the site addresses needs:**

- GitHub link prominently displayed
- Technical details in project descriptions (namespaces, cgroups, syscall filtering)
- Multiple contact methods including LinkedIn for professional networking
- Technology tags making it easy to identify shared interests
- Clubs page showing involvement in tech communities (Oasis, ColorStack) for networking opportunities

---

## User Stories

### Navigation & Discovery

**US-1:** As a visitor, I want to navigate between pages easily so that I can explore different sections of the portfolio without confusion.

**US-2:** As a recruiter, I want to quickly find contact information so that I can reach out to the candidate efficiently.

**US-3:** As a visitor, I want the site to load quickly so that I don't waste time waiting for content.

### Skills Assessment

**US-4:** As a hiring manager, I want to see a comprehensive list of technical skills so that I can assess the candidate's qualifications.

**US-5:** As a recruiter, I want to see skills organized by category (languages vs. tools) so that I can quickly verify specific requirements.

**US-6:** As an engineering manager, I want to see the depth of experience with each skill so that I can evaluate proficiency levels.

### Experience Evaluation

**US-7:** As a recruiter, I want to see work experience in reverse chronological order so that I can understand the candidate's career progression.

**US-8:** As a hiring manager, I want to read about specific contributions and impacts so that I can assess problem-solving ability.

**US-9:** As a visitor, I want to see quantified achievements so that I can understand the scale of work performed.

### Project Exploration

**US-10:** As a peer developer, I want to see detailed project descriptions so that I can understand the technical complexity.

**US-11:** As an engineering manager, I want to see the technologies used in each project so that I can assess relevant experience.

**US-12:** As a visitor, I want to access project repositories so that I can review actual code.

### Club & Community Involvement

**US-13:** As a hiring manager, I want to see community involvement and leadership roles so that I can assess teamwork and mentorship abilities.

**US-14:** As a recruiter, I want to see extracurricular activities so that I can understand the candidate's initiative and soft skills.

**US-15:** As a peer developer, I want to see club memberships so that I can find shared community connections.

### Mobile Experience

**US-16:** As a mobile user, I want the site to be responsive so that I can view content on my phone or tablet.

**US-17:** As a visitor using assistive technology, I want proper semantic HTML so that I can navigate the site with a screen reader.

---

## Design Mockups

### Homepage Layout (index.html)

```
+----------------------------------------------------------+
|               Home | Skills | Experience | Projects | Clubs | Contact
+----------------------------------------------------------+
|                                                          |
|  HERO SECTION                                            |
|  +----------------------------------+  +------------+    |
|  |  James Khadan                    |  |            |    |
|  |  Software Engineer               |  |  [Profile  |    |
|  |                                  |  |   Photo]   |    |
|  |  Computer Science student at     |  |            |    |
|  |  Northeastern...                 |  |            |    |
|  |                                  |  +------------+    |
|  |  [Get in Touch]  [View Projects] |                    |
|  +----------------------------------+                    |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  ABOUT SECTION                       EDUCATION CARD      |
|  +----------------------------+  +------------------+    |
|  | About me paragraph text... |  | Northeastern U   |    |
|  | ...                        |  | B.S. CS, Honors  |    |
|  | ...                        |  | GPA: 3.6/4.0     |    |
|  +----------------------------+  +------------------+    |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  SKILLS SECTION                                          |
|  +-----------------------------------------------------+ |
|  |  Languages                                          | |
|  |  +--------+ +--------+ +--------+ +--------+        | |
|  |  | Python | | Java   | | Rust   | | C++    | ...    | |
|  |  +--------+ +--------+ +--------+ +--------+        | |
|  |                                                     | |
|  |  Frameworks & Tools                                 | |
|  |  +--------+ +--------+ +--------+ +--------+        | |
|  |  | React  | | Docker | | AWS    | | Azure  | ...    | |
|  |  +--------+ +--------+ +--------+ +--------+        | |
|  +-----------------------------------------------------+ |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  EXPERIENCE SECTION (Click to expand/collapse)           |
|  +-----------------------------------------------------+ |
|  | Software Engineer Co-op     Jan 2026 - Present  [v] | |
|  | Integrity Security Services LLC                     | |
|  | (Description hidden - click to expand)              | |
|  +-----------------------------------------------------+ |
|  | Full-Stack Software Engineer    Jan - Aug 2025  [v] | |
|  | MFS Investment Management                           | |
|  | (Description hidden - click to expand)              | |
|  +-----------------------------------------------------+ |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  CONTACT SECTION                                         |
|  +-----------------------------------------------------+ |
|  |  [Email] [LinkedIn] [GitHub] [Portfolio]            | |
|  +-----------------------------------------------------+ |
|                                                          |
+----------------------------------------------------------+
```

### Projects Page Layout (projects.html)

```
+----------------------------------------------------------+
|               Home | Skills | Experience | Projects | Clubs | Contact
+----------------------------------------------------------+
|                                                          |
|  PAGE HEADER                                             |
|  +-------------------------------------------------+     |
|  |  Projects                                       |     |
|  |  A collection of software engineering...        |     |
|  +-------------------------------------------------+     |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  PROJECTS GRID (2 columns on desktop, 1 on mobile)       |
|                                                          |
|  +------------------------+  +------------------------+  |
|  | RUSTLETS               |  | LASTGATEWAY            |  |
|  | Container Runtime      |  | PaaS Business          |  |
|  | [Rust] [Linux]         |  | [Docker] [Proxmox]     |  |
|  |                        |  |                        |  |
|  | Built a container...   |  | Founded a Platform...  |  |
|  |                        |  |                        |  |
|  | Key Features:          |  | Key Achievements:      |  |
|  | - Feature 1            |  | - Achievement 1        |  |
|  | - Feature 2            |  | - Achievement 2        |  |
|  +------------------------+  +------------------------+  |
|                                                          |
|  +------------------------+  +------------------------+  |
|  | COMPLIANCE PORTAL      |  | SELF-SERVICE PORTAL    |  |
|  | Enterprise Web App     |  | Internal Tools         |  |
|  | [React] [FastAPI]      |  | [React] [Azure LLM]    |  |
|  | ...                    |  | ...                    |  |
|  +------------------------+  +------------------------+  |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  CALL TO ACTION                                          |
|  +-----------------------------------------------------+ |
|  |  Interested in Working Together?                    | |
|  |  [Get in Touch]                                     | |
|  +-----------------------------------------------------+ |
|                                                          |
+----------------------------------------------------------+
|  © 2026 James Khadan                                     |
+----------------------------------------------------------+
```

### Clubs Page Layout (clubs.html)

```
+----------------------------------------------------------+
|               Home | Skills | Experience | Projects | Clubs | Contact
+----------------------------------------------------------+
|                                                          |
|  PAGE HEADER                                             |
|  +-------------------------------------------------+     |
|  |  Club Involvement                               |     |
|  |  Leadership and mentorship roles in tech...     |     |
|  +-------------------------------------------------+     |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  CLUBS GRID (2 columns on desktop, 1 on mobile)          |
|                                                          |
|  +------------------------+  +------------------------+  |
|  | OASIS TECH CLUB        |  | COLORSTACK             |  |
|  | Instructor / Mentor    |  | Team Member            |  |
|  | [Sept 2024 - Present]  |  | [Sept 2024 - Present]  |  |
|  |                        |  |                        |  |
|  | Mentoring 80+ students |  | Engaging with 1500+    |  |
|  | in full-stack...       |  | CS students...         |  |
|  |                        |  |                        |  |
|  | Responsibilities:      |  | Involvement:           |  |
|  | - Workshops            |  | - Professional dev     |  |
|  | - One-on-one mentoring |  | - Networking events    |  |
|  +------------------------+  +------------------------+  |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  CALL TO ACTION                                          |
|  +-----------------------------------------------------+ |
|  |  Interested in Working Together?                    | |
|  |  [Get in Touch]                                     | |
|  +-----------------------------------------------------+ |
|                                                          |
+----------------------------------------------------------+
|  © 2026 James Khadan                                     |
+----------------------------------------------------------+
```

### Mobile Layout (Responsive)

```
+-------------------------+
|               [Menu]    |
+-------------------------+
|                         |
|  James Khadan           |
|  Software Engineer      |
|                         |
|  Description text...    |
|                         |
|  [Get in Touch]         |
|  [View Projects]        |
|                         |
|     +------------+      |
|     |  [Profile  |      |
|     |   Photo]   |      |
|     +------------+      |
|                         |
+-------------------------+
|  About Me               |
|  -----------            |
|  Paragraph text...      |
|                         |
+-------------------------+
|  Education              |
|  +-----------------+    |
|  | Northeastern U  |    |
|  | B.S. CS         |    |
|  +-----------------+    |
+-------------------------+
|  Skills                 |
|  Languages              |
|  +------+ +------+      |
|  |Python| | Java |      |
|  +------+ +------+      |
|                         |
|  Frameworks & Tools     |
|  +------+ +------+      |
|  |React | |Docker|      |
|  +------+ +------+      |
+-------------------------+
```

---

## Color Scheme

| Element          | Color     | Hex Code |
| ---------------- | --------- | -------- |
| Primary          | Blue      | #2563eb  |
| Primary Hover    | Dark Blue | #1d4ed8  |
| Text Dark        | Gray 800  | #1f2937  |
| Text Muted       | Gray 500  | #6b7280  |
| Background Light | Gray 50   | #f9fafb  |
| Background White | White     | #ffffff  |
| Border           | Gray 200  | #e5e7eb  |

---

## Typography

- **Headings:** Segoe UI, system-ui, sans-serif (Bold)
- **Body:** Segoe UI, system-ui, sans-serif (Regular)
- **Code/Tech Tags:** System monospace

---

## Accessibility Considerations

1. All images include descriptive alt text
2. Semantic HTML5 elements for proper document structure
3. Sufficient color contrast ratios (WCAG AA compliant)
4. Keyboard navigable interactive elements
5. ARIA labels for icon-only buttons
6. Focus indicators on interactive elements
7. Responsive design for all screen sizes
