"use client";

import React, { useState } from "react";
import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DocItem {
  id: string;
  title: string;
  type: "file" | "folder";
  content?: string;
  children?: DocItem[];
}

const mockDocs: DocItem[] = [
  {
    id: "career-transition",
    title: "Career Transition Guide",
    type: "folder",
    children: [
      {
        id: "overview",
        title: "Transition Overview",
        type: "file",
        content: `# Architecture to Tech: Your Transition Roadmap

Welcome to your comprehensive guide for transitioning from architecture to technology. This journey, while challenging, offers tremendous opportunities for growth and financial stability.

## Why Architects Succeed in Tech

### Your Unique Advantages

- **Systems Thinking**: You understand how complex systems interact and integrate
- **Documentation Excellence**: Your experience creating detailed technical specifications is invaluable
- **Project Management**: You've managed multi-million dollar projects with diverse stakeholders
- **Visual Communication**: Your ability to communicate complex ideas visually translates perfectly to tech
- **Problem-Solving**: You're trained to find creative solutions within constraints
- **Attention to Detail**: Code quality and documentation require the same precision as architectural drawings

## The Current Landscape

### Architecture Industry Challenges
- Project-based employment leading to instability
- Long hours with lower compensation relative to education investment
- Limited remote work opportunities
- Slow career progression
- High stress with significant liability

### Tech Industry Opportunities
- **Stability**: Full-time positions with comprehensive benefits
- **Compensation**: 40-60% higher salaries on average
- **Growth**: Rapid career progression possibilities
- **Flexibility**: Remote work is standard in many roles
- **Learning**: Continuous skill development is encouraged and funded
- **Impact**: Your work can reach millions of users

## Your Transition Timeline

### Months 1-2: Foundation
1. Complete skills assessment (see Skills Mapping Guide)
2. Choose 2-3 target roles to focus on
3. Start building your tech portfolio
4. Begin networking in tech communities
5. Update LinkedIn to reflect career pivot

### Months 3-4: Skill Building
1. Complete online courses in your target area
2. Work on 2-3 portfolio projects
3. Contribute to open source projects
4. Attend tech meetups and virtual events
5. Start informational interviews

### Months 5-6: Job Search
1. Apply to entry-level positions
2. Leverage your architecture network for tech connections
3. Consider contract or part-time work to gain experience
4. Practice technical interviews
5. Refine your story and pitch

## Success Metrics

| Milestone | Target Timeline | Success Indicator |
|-----------|----------------|-------------------|
| First Tech Interview | 3-4 months | Positive feedback on transferable skills |
| Portfolio Complete | 4 months | 3+ projects demonstrating tech skills |
| First Job Offer | 5-7 months | Role that values your architecture background |
| 6-Month Review | 12 months | Positive performance review in new role |

## Remember

Your architecture background is not a liability—it's your differentiator. Many successful tech professionals came from non-traditional backgrounds. Your unique perspective will be valued by the right organization.`,
      },
      {
        id: "mindset",
        title: "Mindset & Motivation",
        type: "file",
        content: `# Navigating the Emotional Journey

Career transitions are as much emotional journeys as they are professional ones. This guide addresses the psychological aspects of your pivot.

## Common Feelings and How to Address Them

### Imposter Syndrome
**You might feel**: "I don't belong in tech without a CS degree."

**Reality Check**: 
- 40% of professional developers don't have CS degrees
- Your architecture training taught you problem-solving at the highest level
- Many tech leaders actively seek diverse backgrounds
- Your fresh perspective is an asset, not a limitation

### Financial Anxiety
**You might feel**: "What if I can't match my architecture salary?"

**Reality Check**:
- Entry-level tech roles often match mid-level architecture salaries
- Tech compensation grows faster than architecture
- Benefits packages in tech are typically superior
- Remote work options reduce commuting costs

### Identity Shift
**You might feel**: "I'm abandoning my identity as an architect."

**Reframe**: 
- You're expanding your identity, not replacing it
- "Architectural thinking" is valuable in tech
- Many roles blend design and technology
- You can return to architecture with valuable tech skills

## Building Confidence

### Quick Wins Strategy
1. **Week 1**: Complete one online tutorial
2. **Week 2**: Solve 5 coding challenges
3. **Week 3**: Build your first simple app
4. **Week 4**: Share your project publicly

Each small success builds momentum and confidence.

### Daily Affirmations
- "My architecture skills make me uniquely valuable in tech"
- "I've mastered complex systems before; I can do it again"
- "Every expert was once a beginner"
- "My diverse background is my competitive advantage"

## Support Systems

### Online Communities
- **Career Changers in Tech**: Slack communities for support
- **Women Who Code**: If applicable, excellent mentorship programs
- **Dev.to**: Welcoming community for beginners
- **Reddit r/cscareerquestions**: Anonymous advice and support

### Finding Mentors
1. Reach out to architects who've transitioned to tech
2. Join mentorship platforms like MentorCruise or ADPList
3. Attend local tech meetups and be open about your journey
4. Consider paying for career coaching if budget allows

## Managing the Transition Period

### While Still in Architecture
- Dedicate 1-2 hours daily to learning
- Use architecture downtime for skill building
- Apply tech thinking to current projects
- Document your learning journey (blog/LinkedIn)

### If Unemployed
- Treat job searching as a full-time job
- Structure your days with learning and applying
- Maintain architecture network—they might have tech connections
- Consider freelance architecture work for income

## Success Stories for Inspiration

**Sarah Chen**: Architecture → UX Design Lead at Google
- 8 years in architecture
- Self-taught UX through online courses
- Landed first tech job in 6 months
- Now earning 2.5x her architecture salary

**Michael Rodriguez**: Architect → Technical Product Manager at Microsoft
- Leveraged project management skills
- Started with certification courses
- Transitioned through a startup role
- Credits architecture background for unique perspective

**Remember**: Your journey is unique, but you're not alone. Every successful transition started with someone feeling exactly how you feel now.`,
      },
      {
        id: "action-plan",
        title: "30-60-90 Day Plan",
        type: "file",
        content: `# Your 30-60-90 Day Action Plan

A structured approach to make your career transition manageable and measurable.

## First 30 Days: Foundation

### Week 1-2: Assessment & Research
- [ ] Complete comprehensive skills inventory
- [ ] Research 20+ job postings in target roles
- [ ] Identify top 3 role types to pursue
- [ ] Join 3 relevant online communities
- [ ] Update LinkedIn headline and summary

### Week 3-4: Learning Setup
- [ ] Choose primary learning platform (Coursera, Udemy, etc.)
- [ ] Enroll in first foundational course
- [ ] Set up development environment
- [ ] Create GitHub account and profile
- [ ] Start daily learning habit (minimum 1 hour)

## Days 31-60: Skill Building

### Week 5-6: Core Skills
- [ ] Complete first technical course
- [ ] Build first portfolio project
- [ ] Write first technical blog post
- [ ] Attend first virtual tech meetup
- [ ] Connect with 5 professionals in target field

### Week 7-8: Portfolio Development
- [ ] Complete second portfolio project
- [ ] Contribute to first open source project
- [ ] Update portfolio website with projects
- [ ] Get feedback from tech professionals
- [ ] Refine LinkedIn with new skills/projects

## Days 61-90: Launch

### Week 9-10: Application Preparation
- [ ] Finalize resume for tech roles
- [ ] Create tailored versions for each role type
- [ ] Practice elevator pitch
- [ ] Complete mock interviews
- [ ] Build list of 50 target companies

### Week 11-12: Active Job Search
- [ ] Apply to 3-5 positions weekly
- [ ] Follow up on all applications
- [ ] Conduct 3 informational interviews
- [ ] Attend in-person networking event
- [ ] Consider contract/freelance opportunities

## Daily Habits for Success

### Morning (30 min)
- Review tech news/trends
- Practice one coding challenge
- Update learning journal

### Evening (1-2 hours)
- Course/tutorial work
- Project development
- Community engagement

### Weekly
- Portfolio update
- Network outreach (3 new connections)
- Skills practice assessment
- Job search activities

## Tracking Progress

\`\`\`markdown
# Weekly Check-in Template

**Week of: [Date]**

**Learning Progress:**
- Courses completed: 
- Skills practiced:
- Projects advanced:

**Networking:**
- New connections made:
- Conversations had:
- Events attended:

**Job Search:**
- Applications sent:
- Responses received:
- Interviews scheduled:

**Wins:**
- 

**Challenges:**
- 

**Next Week's Priority:**
- 
\`\`\`

## Red Flags to Avoid

1. **Tutorial Hell**: Watching without building
2. **Perfectionism**: Waiting to be "ready"
3. **Isolation**: Not engaging with community
4. **Scattered Focus**: Trying to learn everything
5. **Comparison Trap**: Measuring against others

## Green Flags You're on Track

1. **Consistent Progress**: Daily learning habit established
2. **Building Things**: Projects in portfolio growing
3. **Getting Feedback**: Others reviewing your work
4. **Gaining Confidence**: Participating in discussions
5. **Seeing Opportunities**: Job posts seem achievable`,
      },
    ],
  },
  {
    id: "skills-roles",
    title: "Skills & Roles Guide",
    type: "folder",
    children: [
      {
        id: "skills-mapping",
        title: "Skills Translation",
        type: "file",
        content: `# Architecture Skills to Tech: Translation Guide

Your architecture skills are more valuable in tech than you might realize. This guide shows exactly how to translate and market them.

## Core Skills Translation Matrix

| Architecture Skill | Tech Equivalent | Relevant Roles | How to Market It |
|-------------------|-----------------|----------------|------------------|
| **AutoCAD/Revit** | Design Tools, Figma, Technical Software | UX Designer, Technical Writer | "Experienced in complex design software with attention to detail" |
| **Construction Documents** | Technical Documentation, API Docs | Technical Writer, Developer | "Created comprehensive technical specifications for $XX million projects" |
| **Project Coordination** | Agile/Scrum, Sprint Planning | Project Manager, Scrum Master | "Coordinated cross-functional teams of 10+ professionals" |
| **Client Presentations** | Stakeholder Management, Product Demos | Product Manager, Customer Success | "Presented complex technical concepts to non-technical stakeholders" |
| **Building Codes** | Compliance, Security Standards | QA Engineer, Compliance Analyst | "Ensured compliance with complex regulatory requirements" |
| **3D Modeling** | Prototyping, Wireframing | UX Designer, Product Designer | "Created detailed visual representations of complex systems" |
| **Budget Management** | Resource Planning, Cost Analysis | Product Manager, Business Analyst | "Managed budgets exceeding $10 million with 5% variance" |

## Detailed Skill Breakdowns

### Documentation & Technical Writing

**Your Architecture Experience:**
- Construction documents
- Specification writing  
- As-built drawings
- RFI responses
- Permit applications

**How This Translates to Tech:**
- **API Documentation**: Your ability to create precise technical specs
- **User Manuals**: Your experience making complex information accessible
- **Process Documentation**: Your systematic approach to recording procedures
- **Requirements Docs**: Your skill in capturing client needs precisely

**Proof Points to Emphasize:**
- Number of projects documented
- Page count of typical documentation sets
- Stakeholders who relied on your docs
- Zero-error rate in technical drawings

### Project Management

**Your Architecture Experience:**
- Multi-phase project delivery
- Consultant coordination
- Timeline management
- Budget tracking
- Risk mitigation

**How This Translates to Tech:**
- **Sprint Planning**: Your experience with project phases
- **Resource Allocation**: Your skill in managing team capacity
- **Stakeholder Communication**: Your client management experience
- **Risk Management**: Your ability to anticipate and prevent issues

**Quantifiable Achievements:**
- "Delivered 95% of projects on schedule"
- "Managed teams of 5-15 professionals"
- "Coordinated with 8+ consultant disciplines"
- "Maintained project budgets with <5% variance"

### Visual Communication & Design

**Your Architecture Experience:**
- Conceptual drawings
- 3D visualization
- Presentation boards
- Diagramming
- Space planning

**How This Translates to Tech:**
- **UX Design**: Your understanding of user flow through spaces
- **Information Architecture**: Your ability to organize complex information
- **Data Visualization**: Your skill in making data understandable
- **Wireframing**: Your experience with schematic design

**Portfolio Items to Create:**
- Redesign a popular app's user flow
- Create data visualization from public dataset
- Design information architecture for complex site
- Develop wireframes for mobile application

### Systems Thinking

**Your Architecture Experience:**
- Building systems integration
- Structural/MEP coordination
- Sustainability considerations
- Code compliance
- Material specifications

**How This Translates to Tech:**
- **System Architecture**: Understanding component interactions
- **Database Design**: Your grasp of relational systems
- **API Integration**: Your experience with system interfaces
- **Scalability Planning**: Your ability to plan for growth

**Interview Talking Points:**
- "Coordinated 5+ building systems for seamless integration"
- "Resolved conflicts between competing system requirements"
- "Optimized designs for efficiency and performance"
- "Considered lifecycle implications of all decisions"

## Skills Gap Analysis

### Skills You Have
✅ Project management  
✅ Documentation  
✅ Visual communication  
✅ Problem-solving  
✅ Attention to detail  
✅ Stakeholder management  
✅ Systems thinking  

### Skills to Develop

#### For Technical Writing
- [ ] Markdown/reStructuredText
- [ ] Git/Version control basics
- [ ] API documentation tools
- [ ] Static site generators

#### For Project Management  
- [ ] Agile/Scrum certification
- [ ] JIRA/Asana proficiency
- [ ] Basic SQL for reporting
- [ ] Data analysis fundamentals

#### For UX Design
- [ ] Figma or Sketch
- [ ] User research methods
- [ ] Prototyping tools
- [ ] Basic HTML/CSS

## Action Items

1. **Audit Your Experience**: List every architecture project with transferable elements
2. **Quantify Everything**: Add numbers to every accomplishment
3. **Learn the Lingo**: Study job postings to adopt tech terminology
4. **Build Proof**: Create 1-2 projects demonstrating tech application of your skills
5. **Tell Your Story**: Practice explaining your transition in 30 seconds`,
      },
      {
        id: "target-roles",
        title: "Target Roles Deep Dive",
        type: "file",
        content: `# Tech Roles Perfect for Architects

Detailed exploration of roles where your architecture background is a competitive advantage.

## Technical Writer / Documentation Specialist

**Why You're Perfect:** Your entire career has been creating technical documentation.

### Role Overview
- **Salary Range**: $75,000 - $125,000
- **Growth Path**: Senior Tech Writer → Documentation Manager → Content Strategy Director
- **Remote Friendly**: 90% of positions offer remote work
- **Entry Barrier**: Low with your documentation experience

### Your Advantages
- Already expert at technical specifications
- Understand complex systems documentation
- Experience with multiple stakeholder audiences
- Visual communication skills for diagrams

### 90-Day Ramp Plan
1. Learn Markdown and basic Git (Week 1-2)
2. Study API documentation examples (Week 3-4)
3. Create sample documentation portfolio (Week 5-8)
4. Contribute to open source documentation (Week 9-12)

### Companies Actively Hiring
- **Traditional Tech**: Microsoft, Google, Amazon
- **Architecture-Adjacent**: Autodesk, Trimble, Procore
- **Startups**: Look for construction tech, prop tech

---

## Project Manager / Scrum Master

**Why You're Perfect:** You've managed complex projects with multiple stakeholders.

### Role Overview
- **Salary Range**: $85,000 - $145,000
- **Growth Path**: PM → Senior PM → Program Manager → Director
- **Remote Friendly**: 75% remote opportunities
- **Entry Barrier**: Medium (certification helps)

### Your Advantages
- Proven project delivery track record
- Budget and timeline management
- Stakeholder communication expertise
- Risk mitigation experience

### 90-Day Ramp Plan
1. Get Scrum Master certification (Week 1-4)
2. Learn Agile methodologies (Week 5-6)
3. Master JIRA and project tools (Week 7-8)
4. Practice with volunteer projects (Week 9-12)

### Interview Prep Focus
- Translate construction phases to sprint planning
- Emphasize cross-functional coordination
- Highlight problem-solving examples
- Show adaptability to changing requirements

---

## UX Designer / Researcher

**Why You're Perfect:** You understand how people interact with spaces.

### Role Overview
- **Salary Range**: $80,000 - $140,000
- **Growth Path**: UX Designer → Senior UX → Lead Designer → Design Director
- **Remote Friendly**: 80% remote positions
- **Entry Barrier**: Medium (portfolio required)

### Your Advantages
- User-centered design thinking
- Space planning translates to information architecture
- Visual communication expertise
- Understanding of accessibility requirements

### 90-Day Ramp Plan
1. Learn Figma or Sketch (Week 1-3)
2. Study UX principles and methods (Week 4-6)
3. Redesign 3 existing apps (Week 7-10)
4. Conduct user research project (Week 11-12)

### Portfolio Projects
- Redesign architecture portfolio site
- Create app for construction management
- Design building wayfinding system
- Develop space planning tool

---

## Business Analyst

**Why You're Perfect:** You translate client needs into technical requirements.

### Role Overview
- **Salary Range**: $75,000 - $125,000
- **Growth Path**: BA → Senior BA → Product Manager → Product Director
- **Remote Friendly**: 70% remote work
- **Entry Barrier**: Low with your analytical skills

### Your Advantages
- Requirements gathering expertise
- Data analysis from project metrics
- Process improvement mindset
- Cross-functional communication

### 90-Day Ramp Plan
1. Learn SQL basics (Week 1-3)
2. Study business analysis frameworks (Week 4-6)
3. Master Excel/Google Sheets advanced features (Week 7-8)
4. Create analysis portfolio projects (Week 9-12)

---

## Customer Success Manager

**Why You're Perfect:** You've managed client relationships throughout projects.

### Role Overview
- **Salary Range**: $70,000 - $130,000
- **Growth Path**: CSM → Senior CSM → CS Director → VP Customer Success
- **Remote Friendly**: 85% remote
- **Entry Barrier**: Low with your client experience

### Your Advantages
- Client relationship management
- Problem-solving orientation
- Project lifecycle understanding
- Presentation skills

### Target Companies
- **PropTech**: Matterport, CoStar, BuildingConnected
- **Construction Tech**: Procore, PlanGrid, Bluebeam
- **Design Software**: Autodesk, SketchUp, Rhino

---

## Quick Decision Matrix

| If You Love... | Consider These Roles | First Step |
|---------------|---------------------|------------|
| Documentation | Technical Writer | Learn Markdown |
| Managing People | Project Manager | Get PMP/Scrum cert |
| Visual Design | UX Designer | Learn Figma |
| Problem Solving | Business Analyst | Learn SQL |
| Client Interaction | Customer Success | Study SaaS models |
| Big Picture | Product Manager | Learn Agile |`,
      },
    ],
  },
  {
    id: "practical-guides",
    title: "Practical Guides",
    type: "folder",
    children: [
      {
        id: "interview-prep",
        title: "Interview Preparation",
        type: "file",
        content: `# Tech Interview Preparation Guide

How to ace interviews when transitioning from architecture to tech.

## The Story Framework

### Your 30-Second Elevator Pitch

**Template:**
"I'm an architect with [X years] of experience transitioning to tech. My background in [specific architecture skills] directly applies to [target role] because [specific connection]. I'm particularly excited about [specific tech interest] and have been building my skills through [specific actions taken]."

**Example:**
"I'm an architect with 7 years of experience transitioning to technical writing. My background in creating detailed construction documentation directly applies to API documentation because both require precision, clarity, and understanding complex technical systems. I'm particularly excited about developer documentation and have been building my skills through online courses and contributing to open source projects."

## Common Interview Questions & Architecture-Informed Answers

### "Why are you leaving architecture?"

**Good Answer:**
"I'm drawn to tech's innovation pace and impact scale. While I've loved the creative problem-solving in architecture, I'm excited about applying those same skills to products that can reach millions of users. The tech industry's emphasis on continuous learning and iteration aligns perfectly with my growth mindset."

**Avoid:**
- Negativity about architecture
- Focus only on money
- Suggesting you're running from something

### "How does architecture prepare you for this role?"

**For Technical Writing:**
"Architecture taught me to create documentation that serves multiple audiences - from contractors who need construction details to clients who need to understand the vision. This directly translates to creating documentation for both technical and non-technical users."

**For Project Management:**
"Managing architectural projects means coordinating structural engineers, MEP consultants, contractors, and clients - often with conflicting priorities and tight deadlines. This is essentially the same as managing cross-functional tech teams."

**For UX Design:**
"Architecture is fundamentally about understanding how people move through and interact with spaces. UX design is the digital equivalent - understanding user journeys and creating intuitive pathways through digital products."

### "What's your biggest weakness?"

**Strategic Answer:**
"Coming from architecture, I'm still building fluency with some tech-specific tools and workflows. However, I'm a quick learner - for example, I taught myself [specific tool/skill] in [timeframe] and have already [specific achievement]. My architecture training taught me to rapidly master new technical tools."

### "Where do you see yourself in 5 years?"

**Good Answer:**
"I see myself as a [senior role] who uniquely bridges the physical and digital worlds. My architecture background will become increasingly valuable as technologies like AR/VR, smart cities, and IoT blur these boundaries. I want to be known as someone who brings a unique spatial and systems perspective to tech challenges."

## Behavioral Interview Prep (STAR Method)

### Situation - Task - Action - Result

**Prepare 5 STAR Stories:**

1. **Project Management Story**
   - S: Complex mixed-use development with tight deadline
   - T: Coordinate 8 consultants and meet permit deadline
   - A: Created detailed project timeline, daily check-ins, risk mitigation plan
   - R: Delivered on time, under budget, with zero permit rejections

2. **Problem-Solving Story**
   - S: Site constraint made original design impossible
   - T: Redesign within 48 hours without losing functionality
   - A: Led charrette, explored 5 alternatives, consulted experts
   - R: Found innovative solution that actually improved the design

3. **Stakeholder Management Story**
   - S: Client and contractor disagreement on materials
   - T: Find compromise maintaining design intent and budget
   - A: Facilitated workshop, presented data-driven options
   - R: Consensus reached, project stayed on schedule

4. **Learning Agility Story**
   - S: New sustainable building certification required
   - T: Become expert quickly to guide project
   - A: Completed training, created team resources, led implementation
   - R: First project in firm to achieve certification

5. **Leadership Story**
   - S: Junior team members struggling with documentation
   - T: Improve team performance without micromanaging
   - A: Created templates, held training sessions, mentored individually
   - R: 50% reduction in documentation errors, improved morale

## Technical Assessment Prep

### For Technical Writing Roles
- Practice writing README files for GitHub projects
- Create API documentation samples
- Write user guides for common software
- Prepare writing samples in Markdown

### For Project Management Roles
- Create sample project plans
- Prepare Gantt charts examples
- Practice explaining Agile concepts
- Know basic project metrics (velocity, burndown)

### For UX Design Roles
- Redesign poorly designed apps
- Create user journey maps
- Prepare design portfolio in Figma
- Practice design critique language

## Questions to Ask Interviewers

### About the Role
- "How does this role interact with other departments?"
- "What does success look like in the first 90 days?"
- "What are the biggest challenges facing this team?"

### About Growth
- "How have others with non-traditional backgrounds succeeded here?"
- "What learning and development opportunities are available?"
- "How is performance measured and reviewed?"

### About Culture
- "How does the team handle disagreements about technical decisions?"
- "What's the balance between independent work and collaboration?"
- "How does the company support work-life balance?"

## Day-of Interview Checklist

### Technical Setup (for virtual)
- [ ] Test camera and microphone
- [ ] Ensure stable internet connection
- [ ] Clean, professional background
- [ ] Good lighting (face the window)
- [ ] Have water nearby
- [ ] Close unnecessary browser tabs

### Materials to Have Ready
- [ ] Portfolio/work samples
- [ ] Resume copies
- [ ] List of references
- [ ] Questions for interviewer
- [ ] Notepad and pen
- [ ] Specific examples/stories outlined

### Mindset Prep
- [ ] Power pose for 2 minutes
- [ ] Review your wins
- [ ] Remember: they need your unique perspective
- [ ] Be curious, not desperate
- [ ] It's a conversation, not an interrogation`,
      },
      {
        id: "learning-resources",
        title: "Learning Resources",
        type: "file",
        content: `# Essential Learning Resources

Curated resources specifically chosen for architects transitioning to tech.

## Free Learning Platforms

### General Tech Foundations

**freeCodeCamp** (FREE)
- Start with: Responsive Web Design Certification
- Why: Visual, project-based learning perfect for architects
- Time: 300 hours for certification
- Link: freecodecamp.org

**CS50: Introduction to Computer Science** (FREE)
- Harvard's intro course
- Why: Solid foundation without assuming prior knowledge
- Time: 10-20 hours/week for 10 weeks
- Link: cs50.harvard.edu

**The Odin Project** (FREE)
- Full-stack curriculum
- Why: Project-based, comprehensive
- Time: 6-12 months part-time
- Link: theodinproject.com

### For Technical Writing

**Google Technical Writing Courses** (FREE)
- Technical Writing One and Two
- Why: Industry-standard practices
- Time: 2-3 hours each
- Link: developers.google.com/tech-writing

**Write the Docs** (FREE)
- Community and resources
- Why: Real-world documentation examples
- Link: writethedocs.org

**API Documentation Course** (FREE)
- By Tom Johnson
- Why: Comprehensive guide to API docs
- Link: idratherbewriting.com

### For Project Management

**Google Project Management Certificate** ($49/month)
- 6-month program
- Why: Includes Agile and Scrum
- Includes: Real portfolio projects
- Link: coursera.org

**Scrum.org Learning Paths** (FREE)
- Scrum foundations
- Why: Official Scrum resources
- Time: 10-15 hours
- Link: scrum.org/resources

**PMI Agile Practice Guide** (FREE with membership)
- Comprehensive Agile guide
- Why: Industry-recognized credential
- Link: pmi.org

### For UX Design

**Google UX Design Certificate** ($49/month)
- 6-month program
- Why: Includes portfolio projects
- Tools: Figma, Adobe XD
- Link: coursera.org

**Figma YouTube Channel** (FREE)
- Official tutorials
- Why: Learn the industry-standard tool
- Link: youtube.com/@Figma

**Design+Code** ($19/month)
- Design and coding together
- Why: Perfect for technical designers
- Link: designcode.io

## Books Worth Reading

### Career Transition
- **"What Color Is Your Parachute?"** - Richard Bolles
- **"Designing Your Life"** - Bill Burnett & Dave Evans
- **"Range"** - David Epstein (validates non-linear paths)

### Technical Writing
- **"Docs for Developers"** - Jared Bhatti et al.
- **"The Product is Docs"** - Christopher Gales
- **"Technical Writing Process"** - Kieran Morgan

### Project Management
- **"The Phoenix Project"** - Gene Kim (DevOps novel)
- **"Scrum: The Art of Doing Twice the Work in Half the Time"** - Jeff Sutherland
- **"User Story Mapping"** - Jeff Patton

### UX Design
- **"Don't Make Me Think"** - Steve Krug
- **"The Design of Everyday Things"** - Don Norman
- **"100 Things Every Designer Needs to Know About People"** - Susan Weinschenk

## YouTube Channels

### General Tech
- **Traversy Media**: Web development tutorials
- **Fireship**: Quick, modern tech explanations
- **CS50**: Harvard's computer science lectures

### Career Transition
- **Joshua Fluke**: Tech career advice
- **Tiff In Tech**: Career transition stories
- **ForrestKnight**: Self-taught developer journey

### Specific Skills
- **Kevin Powell**: CSS and web design
- **The Net Ninja**: Full-stack tutorials
- **DesignCourse**: UI/UX design

## Podcasts for Commutes

### Career & Tech
- **CodeNewbie**: Beginners in tech
- **Syntax**: Web development
- **Soft Skills Engineering**: Career advice

### Industry Insights
- **Masters of Scale**: How companies grow
- **How I Built This**: Founder stories
- **The Changelog**: Open source and tech trends

## Communities to Join

### General Support
- **r/cscareerquestions**: Reddit community
- **r/learnprogramming**: Beginners welcome
- **Dev.to**: Welcoming tech community
- **Hashnode**: Technical writing platform

### Career Changers
- **Career Karma**: Career transition community
- **#100DaysOfCode**: Twitter/X community
- **Women Who Code**: If applicable
- **Out in Tech**: LGBTQ+ in tech

### Architecture to Tech
- **LinkedIn Groups**: "Architects in Tech"
- **AEC Tech Slack**: Architecture/Engineering/Construction tech
- **AUGI Forums**: Autodesk users exploring tech

## Certifications Worth Considering

### Quick Wins (1-3 months)
- **Google Analytics**: Free, shows technical aptitude
- **HubSpot Content Marketing**: Free, good for tech writing
- **Scrum Fundamentals**: Free from Scrum.org

### Medium Investment (3-6 months)
- **AWS Cloud Practitioner**: $100, broad tech credibility
- **Google Project Management**: $294, comprehensive PM prep
- **Certified Scrum Master**: $500-1000, recognized credential

### Longer Term (6-12 months)
- **PMP Certification**: Gold standard for PM
- **Google UX Certificate**: Portfolio included
- **CompTIA certifications**: For technical roles

## Learning Schedule Template

### Week Structure (10-15 hours)
**Monday-Friday (2 hours/day)**
- 30 min: Tutorial/Course
- 60 min: Hands-on practice
- 30 min: Documentation/Notes

**Weekend (5 hours total)**
- 2 hours: Larger project work
- 2 hours: Community engagement
- 1 hour: Review and planning

### Monthly Milestones
- **Month 1**: Complete foundational course
- **Month 2**: Build first portfolio project
- **Month 3**: Contribute to open source
- **Month 4**: Network and apply

## Free Tools to Start Today

### Development Environment
- **VS Code**: Code editor (free)
- **Git**: Version control (free)
- **GitHub**: Code hosting (free)

### Design Tools
- **Figma**: UX design (free tier)
- **Canva**: Quick graphics (free tier)
- **Draw.io**: Diagramming (free)

### Project Management
- **Trello**: Kanban boards (free tier)
- **Notion**: All-in-one workspace (free tier)
- **Clockify**: Time tracking (free)

## Action Step: Start This Week

1. **Pick ONE primary resource** (don't overwhelm yourself)
2. **Set a daily 30-minute minimum** (consistency > intensity)
3. **Join ONE community** (for support and accountability)
4. **Create learning tracker** (document progress)
5. **Share your journey** (LinkedIn posts, blog, etc.)`,
      },
    ],
  },
  {
    id: "salary-negotiation",
    title: "Salary & Negotiation",
    type: "file",
    content: `# Salary Expectations & Negotiation Guide

Understanding your worth and negotiating effectively in tech.

## Salary Comparison: Architecture vs Tech

### Current Architecture Salaries (2024)
| Level | Years | Average Salary | Location Factor |
|-------|-------|---------------|------------------|
| Junior Architect | 0-3 | $55,000-$70,000 | ±20% by city |
| Project Architect | 3-7 | $70,000-$90,000 | ±25% by city |
| Senior Architect | 7-12 | $85,000-$120,000 | ±30% by city |
| Principal/Director | 12+ | $110,000-$150,000 | ±35% by city |

### Target Tech Salaries (2024)
| Role | Entry Level | Mid-Level (3-5 yrs) | Location Factor |
|------|------------|-------------------|------------------|
| Technical Writer | $75,000-$95,000 | $95,000-$125,000 | ±30% by city |
| Project Manager | $85,000-$110,000 | $110,000-$145,000 | ±35% by city |
| UX Designer | $80,000-$105,000 | $105,000-$140,000 | ±35% by city |
| Business Analyst | $75,000-$95,000 | $95,000-$125,000 | ±30% by city |
| Customer Success | $70,000-$90,000 | $90,000-$130,000 | ±30% by city |
| Scrum Master | $95,000-$115,000 | $115,000-$145,000 | ±30% by city |

### Total Compensation in Tech
Remember: Base salary is just one component

**Typical Tech Package:**
- Base Salary: 70-80% of total comp
- Bonus: 10-20% of base
- Equity/RSUs: 10-30% of base
- Benefits: Worth $15,000-$25,000

**Often Included:**
- Health/Dental/Vision (often 100% covered)
- 401k match (typically 4-6%)
- PTO (often unlimited or 4+ weeks)
- Learning budget ($1,000-$5,000/year)
- Home office stipend ($500-$2,000)
- Wellness benefits ($500-$2,000/year)

## Determining Your Ask

### Research Framework

1. **Use Multiple Data Sources:**
   - Glassdoor (tends to run low)
   - Levels.fyi (tech-specific, accurate)
   - Payscale (good for adjustments)
   - Blind (anonymous, real numbers)
   - LinkedIn Salary Insights

2. **Adjust for Your Specifics:**
   - Your years of experience (total, not just in tech)
   - Advanced degree (Masters adds 5-10%)
   - Location (SF/NYC = +40%, Austin/Denver = +20%)
   - Company size (startups pay less cash, more equity)
   - Industry (FinTech/Healthcare pay more)

3. **Calculate Your Range:**
   - Minimum: What you need to survive
   - Target: Fair market value
   - Reach: Top of range for role

### Your Unique Value Proposition

**Emphasize These Differentiators:**
- Masters degree in Architecture
- Experience with million-dollar budgets
- Client-facing experience
- Cross-functional team leadership
- Regulatory compliance experience
- Project lifecycle management
- Risk assessment expertise

## Negotiation Strategy

### Pre-Negotiation Prep

**Gather Information:**
- [ ] Current market rates for role
- [ ] Company's funding status
- [ ] Team size and growth plans
- [ ] Typical career progression
- [ ] Performance review cycle

**Prepare Your Numbers:**
- [ ] Current/last salary
- [ ] Minimum acceptable
- [ ] Target salary
- [ ] Walk-away point

### The Negotiation Process

#### Round 1: The Initial Offer

**They say:** "We're excited to offer you $X"

**You say:** "Thank you so much for the offer! I'm really excited about the opportunity. I'd like to take 24-48 hours to review everything carefully. Can you send the full details in writing?"

**Why:** Never accept or counter immediately. Always ask for time.

#### Round 2: The Counter

**Your response template:**
"Thank you for the offer. I'm very excited about joining [Company] and contributing to [specific mission/project]. Based on my research and the value I'll bring with my background in [specific skills], I was targeting a range of $[X] to $[Y]. Can we explore getting closer to $[Y]?"

**Key phrases:**
- "Based on my research..."
- "The value I bring..."
- "Can we explore..."
- "What flexibility is there..."

### What's Negotiable Beyond Base

1. **Signing Bonus** (most flexible)
   - "To help with transition costs"
   - Often $5,000-$25,000
   - Easier yes than base increase

2. **Start Date**
   - Can negotiate paid time before starting
   - Useful for vacation plans or learning

3. **Remote Work**
   - Flexibility on days in office
   - Home office budget
   - Co-working space allowance

4. **Professional Development**
   - Conference attendance
   - Course/certification budget
   - Mentorship programs

5. **PTO**
   - Additional weeks
   - Immediate availability (no waiting period)

6. **Title**
   - "Senior" prefix often negotiable
   - Affects future trajectory

## Handling Common Scenarios

### "What's your current salary?"

**Deflection Options:**
- "I'm looking for roles in the $X-Y range. Does this position fall within that?"
- "My previous role was in a different industry with different compensation structures. I'm focused on fair market value for this role."
- "I'd prefer to focus on the value I can bring to this role rather than past compensation."

### "That's above our budget"

**Your Response:**
- "I understand budget constraints. Can we explore a combination of base and signing bonus?"
- "What if we set performance milestones for a salary review in 6 months?"
- "Could we adjust the level/title to match the compensation I'm seeking?"

### "We can't go higher"

**Options:**
1. Ask for other benefits
2. Request accelerated review cycle
3. Negotiate equity/bonus instead
4. Accept if it meets your minimum
5. Walk away if below minimum

## Architecture-Specific Negotiation Points

### Leverage Your Background

**Unique Value Points:**
- "My architecture experience means zero ramp-up time on spatial/visual concepts"
- "I've managed vendor relationships worth millions"
- "My regulatory compliance experience reduces legal risk"
- "I bring a fresh perspective that's valuable for innovation"

### Address the Career Change

**If they bring up lack of direct experience:**
"While I'm new to [specific tech], my 7 years managing complex projects translates directly. In fact, coming from outside tech means I bring fresh perspectives and proven problem-solving skills from a rigorous field. Companies like [name examples] actively recruit from architecture for this reason."

## Red Flags to Watch For

### In Compensation
- Equity only, no salary
- Below-market base with "potential" bonus
- Verbal promises not in writing
- Refusal to provide salary range

### In Culture
- "We work hard and play hard" (usually means just work hard)
- "Wear many hats" (often means understaffed)
- "Fast-paced environment" (might mean chaotic)
- No clear growth path discussed

## When to Walk Away

- Offer is below your minimum viable salary
- Company won't put agreements in writing
- Disrespectful during negotiation
- Significant red flags about culture
- Pressure to decide immediately

## Success Story Templates

**Sarah's Win:** Architecture to UX Design
- Initial offer: $85,000
- Researched: Market rate $95,000-$110,000
- Negotiated: Emphasized masters, visual design skills
- Final: $97,000 + $10k signing + extra week PTO

**Michael's Strategy:** Architecture to PM
- Initial offer: $95,000
- Counter: Asked for $110,000
- Compromise: $102,000 + review in 6 months
- 6-month review: Increased to $112,000

## Your Negotiation Checklist

### Before Negotiating
- [ ] Research market rates (3+ sources)
- [ ] Document unique value proposition
- [ ] Set minimum, target, and reach numbers
- [ ] Practice negotiation with friend
- [ ] Prepare for common objections

### During Negotiation
- [ ] Stay positive and collaborative
- [ ] Focus on value, not need
- [ ] Get everything in writing
- [ ] Don't accept immediately
- [ ] Consider total compensation

### After Agreement
- [ ] Review offer letter carefully
- [ ] Negotiate start date if needed
- [ ] Send thank you note
- [ ] Begin relationship building

## Remember

1. **They want you** - They've invested time and chosen you
2. **Negotiation is expected** - Not negotiating can signal lack of confidence
3. **Architecture background is an asset** - Don't undersell it
4. **First tech salary sets baseline** - Fight for fair compensation
5. **It's business, not personal** - Professional negotiation is respected`,
  },
];

function DocTreeItem({
  item,
  level = 0,
  onSelect,
  selectedId,
  expandedFolders,
  toggleFolder,
}: {
  item: DocItem;
  level?: number;
  onSelect: (item: DocItem) => void;
  selectedId: string | null;
  expandedFolders: Set<string>;
  toggleFolder: (id: string) => void;
}) {
  const isExpanded = expandedFolders.has(item.id);
  const isSelected = selectedId === item.id;

  return (
    <div>
      <button
        onClick={() => {
          if (item.type === "folder") {
            toggleFolder(item.id);
          } else {
            onSelect(item);
          }
        }}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors text-left",
          isSelected && "bg-accent",
        )}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
      >
        {item.type === "folder" && (
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform shrink-0",
              isExpanded && "rotate-90",
            )}
          />
        )}
        {item.type === "folder" ? (
          isExpanded ? (
            <FolderOpen className="h-4 w-4 shrink-0" />
          ) : (
            <Folder className="h-4 w-4 shrink-0" />
          )
        ) : (
          <FileText className="h-4 w-4 shrink-0" />
        )}
        <span className="truncate">{item.title}</span>
      </button>
      {item.type === "folder" && isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <DocTreeItem
              key={child.id}
              item={child}
              level={level + 1}
              onSelect={onSelect}
              selectedId={selectedId}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  // Simple markdown parsing - in production, use a proper markdown library like react-markdown
  const renderMarkdown = (text: string) => {
    // Split content into lines for processing
    const lines = text.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLang = "";
    let inTable = false;
    let tableRows: string[][] = [];

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-muted p-4 rounded-md overflow-x-auto my-4"
            >
              <code className={`language-${codeBlockLang}`}>
                {codeBlockContent.join("\n")}
              </code>
            </pre>,
          );
          codeBlockContent = [];
          inCodeBlock = false;
          codeBlockLang = "";
        } else {
          inCodeBlock = true;
          codeBlockLang = line.slice(3).trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Tables
      if (line.includes("|") && line.trim().startsWith("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(
          line
            .split("|")
            .map((cell) => cell.trim())
            .filter(Boolean),
        );

        // Check if next line is not a table row
        if (index === lines.length - 1 || !lines[index + 1].includes("|")) {
          elements.push(
            <div key={`table-${index}`} className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    {tableRows[0].map((cell, i) => (
                      <th
                        key={i}
                        className="border border-border px-4 py-2 text-left font-semibold"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(2).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-border px-4 py-2"
                        >
                          {cell.includes("`") ? (
                            <code className="bg-muted px-1 py-0.5 rounded text-sm">
                              {cell.replace(/`/g, "")}
                            </code>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          );
          inTable = false;
          tableRows = [];
        }
        return;
      }

      // Headers
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold mt-6 mb-4">
            {line.slice(2)}
          </h1>,
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mt-5 mb-3">
            {line.slice(3)}
          </h2>,
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
            {line.slice(4)}
          </h3>,
        );
      }
      // Lists
      else if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        currentList.push(line.trim().slice(2));
        if (
          index === lines.length - 1 ||
          (!lines[index + 1].trim().startsWith("- ") &&
            !lines[index + 1].trim().startsWith("* "))
        ) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside my-3 space-y-1"
            >
              {currentList.map((item, i) => (
                <li key={i}>
                  {item.includes("**") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>",
                        ),
                      }}
                    />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>,
          );
          currentList = [];
        }
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line.trim())) {
        currentList.push(line.trim().replace(/^\d+\.\s/, ""));
        if (
          index === lines.length - 1 ||
          !/^\d+\.\s/.test(lines[index + 1].trim())
        ) {
          elements.push(
            <ol
              key={`olist-${index}`}
              className="list-decimal list-inside my-3 space-y-1"
            >
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>,
          );
          currentList = [];
        }
      }
      // Inline code
      else if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split(/`([^`]+)`/);
        elements.push(
          <p key={index} className="my-2">
            {parts.map((part, i) =>
              i % 2 === 0 ? (
                part
              ) : (
                <code
                  key={i}
                  className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
                >
                  {part}
                </code>
              ),
            )}
          </p>,
        );
      }
      // Regular paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={index} className="my-2">
            {line}
          </p>,
        );
      }
    });

    return elements;
  };

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {renderMarkdown(content)}
    </div>
  );
}

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["career-transition", "skills-roles", "practical-guides"]),
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const findAllFiles = (items: DocItem[]): DocItem[] => {
    const files: DocItem[] = [];
    items.forEach((item) => {
      if (item.type === "file") {
        files.push(item);
      } else if (item.children) {
        files.push(...findAllFiles(item.children));
      }
    });
    return files;
  };

  // Auto-select first file on mount
  if (!selectedDoc) {
    const firstFile = findAllFiles(mockDocs)[0];
    if (firstFile) {
      setSelectedDoc(firstFile);
    }
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside
          className={cn(
            "w-64 border-r bg-background/95 backdrop-blur-sm overflow-y-auto",
            "transition-transform duration-200 lg:translate-x-0 lg:relative",
            sidebarOpen
              ? "translate-x-0 fixed z-40"
              : "-translate-x-full fixed lg:relative",
          )}
        >
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-4">Documentation</h2>
            <div className="space-y-1">
              {mockDocs.map((item) => (
                <DocTreeItem
                  key={item.id}
                  item={item}
                  onSelect={setSelectedDoc}
                  selectedId={selectedDoc?.id || null}
                  expandedFolders={expandedFolders}
                  toggleFolder={toggleFolder}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile sidebar toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden fixed left-4 top-20 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ChevronRight
            className={cn(
              "h-5 w-5 transition-transform",
              sidebarOpen && "rotate-180",
            )}
          />
        </Button>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 lg:p-8">
            {selectedDoc ? (
              <article>
                <MarkdownRenderer content={selectedDoc.content || ""} />
              </article>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                Select a document from the sidebar to view its content.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
