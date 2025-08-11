"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Architect",
      company: "Design Studio ABC",
      location: "San Francisco, CA",
      duration: "2020 - 2024",
      description:
        "Led design and documentation for multiple commercial and residential projects. Managed cross-functional teams of 5-10 professionals.",
      highlights: [
        "Managed $2M+ construction projects from concept to completion",
        "Created comprehensive technical documentation for 15+ projects",
        "Coordinated with contractors, engineers, and city officials",
        "Streamlined documentation processes, reducing errors by 30%",
      ],
    },
    {
      title: "Project Architect",
      company: "Architecture Firm XYZ",
      location: "San Francisco, CA",
      duration: "2017 - 2020",
      description:
        "Developed construction documents and managed client relationships for residential projects.",
      highlights: [
        "Produced detailed technical drawings and specifications",
        "Managed project timelines and budgets",
        "Presented designs to clients and stakeholders",
        "Implemented BIM workflows improving efficiency by 25%",
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
