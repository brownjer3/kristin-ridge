"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Architectural Designer",
      company: "BHA pllc",
      location: "Chicago, IL",
      duration: "Jan 2023 - Oct 2024",
      description:
        "Collaborated with interdisciplinary teams on healthcare and educational facilities, leading design documentation and permit submissions.",
      highlights: [
        "Coordinated submissions for $10M+ projects between interior and architecture teams",
        "Managed permit documentation for healthcare single family residences",
        "Developed designs for outpatient clinics balancing aesthetics with functionality",
        "Led collaboration with consultants to push forward project development",
      ],
    },
    {
      title: "Architectural Designer",
      company: "DLR Group",
      location: "Chicago, IL",
      duration: "Mar 2019 - Aug 2022",
      description:
        "Contributed to design and documentation of higher education projects through the full project lifecycle.",
      highlights: [
        "Assisted multiple project teams with design documentation and modeling",
        "Coordinated with consultants on University of Michigan and Purdue projects",
        "Developed detailed construction documentation in Revit",
        "Participated in sustainable design initiatives for LEED certification",
      ],
    },
    {
      title: "Architectural Designer",
      company: "Valerie Dewalt Train",
      location: "Chicago, IL",
      duration: "Jul 2019 - Apr 2020",
      description:
        "Contributed to high-rise residential projects from SD through DD phases, focusing on BIM coordination.",
      highlights: [
        "Worked on Vista Tower and The Laurel residential developments",
        "Coordinated 3D models for 70+ story mixed-use tower",
        "Assisted with facade design and unit layout optimization",
        "Collaborated with MEP consultants for system integration",
      ],
    },
    {
      title: "Architectural Designer",
      company: "COOKFOX Architects",
      location: "New York, NY",
      duration: "Apr 2016 - Oct 2017",
      description:
        "Contributed to sustainable design projects with focus on environmental responsibility.",
      highlights: [
        "Worked on Marymount School and other educational facilities",
        "Developed detailed construction documents for green building projects",
        "Assisted with LEED documentation and sustainable material research",
        "Coordinated with consultants on biophilic design elements",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            7+ years of architecture experience with transferable skills for
            tech
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
