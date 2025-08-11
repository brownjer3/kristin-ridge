"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Vista Tower (St. Regis Chicago)",
      category: "High-Rise Residential",
      description:
        "Contributed to BIM coordination and documentation for 101-story mixed-use supertall skyscraper, now Chicago's third-tallest building.",
      skills: [
        "Revit/BIM",
        "High-Rise Design",
        "Consultant Coordination",
        "Construction Documentation",
      ],
      metrics: {
        budget: "$1B+",
        team: "20+ professionals",
        duration: "24 months",
      },
    },
    {
      title: "University of Michigan Campus Design",
      category: "Educational",
      description:
        "Developed master planning and detailed documentation for campus expansion including new academic facilities and student housing.",
      skills: [
        "Campus Planning",
        "Sustainable Design",
        "Stakeholder Engagement",
        "LEED Documentation",
      ],
      metrics: {
        budget: "$50M+",
        team: "15 professionals",
        duration: "18 months",
      },
    },
    {
      title: "Islamic Cultural Center",
      category: "Cultural/Thesis",
      description:
        "Graduate thesis project designing a cultural center to bridge neighborhood gaps, featuring prayer space, library, and community facilities.",
      skills: [
        "Cultural Research",
        "Community Engagement",
        "Conceptual Design",
        "3D Visualization",
      ],
      metrics: {
        budget: "Academic Project",
        team: "Individual + Advisors",
        duration: "9 months",
      },
    },
    {
      title: "Purdue University Housing",
      category: "Educational",
      description:
        "Assisted with design and documentation for new student housing facilities, focusing on sustainable design and modern amenities.",
      skills: [
        "Residential Design",
        "Unit Planning",
        "Code Compliance",
        "BIM Coordination",
      ],
      metrics: {
        budget: "$30M",
        team: "12 professionals",
        duration: "15 months",
      },
    },
    {
      title: "Marymount School of New York",
      category: "Educational",
      description:
        "Contributed to renovation and expansion of historic educational facility with focus on preserving character while modernizing spaces.",
      skills: [
        "Historic Preservation",
        "Educational Design",
        "Sustainable Materials",
        "Documentation",
      ],
      metrics: {
        budget: "$25M",
        team: "10 professionals",
        duration: "12 months",
      },
    },
    {
      title: "The Laurel Residential Tower",
      category: "High-Rise Residential",
      description:
        "Worked on facade design and unit layouts for luxury residential tower in Chicago, optimizing views and natural light.",
      skills: [
        "Facade Design",
        "Unit Optimization",
        "Luxury Residential",
        "3D Modeling",
      ],
      metrics: {
        budget: "$200M",
        team: "8 professionals",
        duration: "10 months",
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
            Showcasing 7+ years of experience across educational, residential,
            and cultural projects
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
