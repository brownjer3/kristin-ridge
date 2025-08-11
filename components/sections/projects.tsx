"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Urban Mixed-Use Development",
      category: "Commercial",
      description:
        "Led documentation and coordination for a 50,000 sq ft mixed-use development including retail and residential spaces.",
      skills: [
        "Project Management",
        "Technical Documentation",
        "Stakeholder Coordination",
        "BIM",
      ],
      metrics: {
        budget: "$15M",
        team: "12 professionals",
        duration: "18 months",
      },
    },
    {
      title: "Sustainable Housing Project",
      category: "Residential",
      description:
        "Managed design documentation for LEED-certified affordable housing complex with 40 units.",
      skills: [
        "Sustainable Design",
        "Documentation",
        "Client Relations",
        "Code Compliance",
      ],
      metrics: {
        budget: "$8M",
        team: "8 professionals",
        duration: "12 months",
      },
    },
    {
      title: "Historic Building Renovation",
      category: "Preservation",
      description:
        "Created detailed as-built documentation and renovation plans for a historic landmark building.",
      skills: [
        "Technical Writing",
        "3D Visualization",
        "Research",
        "Problem Solving",
      ],
      metrics: {
        budget: "$3M",
        team: "5 professionals",
        duration: "9 months",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing project management and documentation expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{project.metrics.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{project.metrics.team}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Budget: {project.metrics.budget}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Portfolio available upon request with detailed case studies
          </p>
          <Button variant="outline">
            Request Full Portfolio
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
