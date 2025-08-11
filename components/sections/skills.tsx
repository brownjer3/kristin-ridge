"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Layout,
  Calendar,
  Code,
  Palette,
  GitBranch,
  BookOpen,
  Settings,
  CheckCircle,
  Target,
  Brain,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "BIM & Technical Documentation",
      icon: FileText,
      skills: [
        "Revit/BIM Modeling",
        "Construction Documentation",
        "Detail Drawing Production",
        "Specification Coordination",
        "As-Built Documentation",
        "Code Compliance Review",
      ],
      relevantRoles: [
        "Technical Writer",
        "BIM Coordinator",
        "Documentation Specialist",
      ],
    },
    {
      title: "Project Management & Coordination",
      icon: Calendar,
      skills: [
        "Multi-disciplinary Coordination",
        "Consultant Management",
        "Construction Administration",
        "Client Presentations",
        "Permit Submission",
        "Timeline Management",
      ],
      relevantRoles: [
        "Project Manager",
        "Program Coordinator",
        "Product Manager",
      ],
    },
    {
      title: "Design Software & Visualization",
      icon: Layout,
      skills: [
        "Revit Architecture",
        "AutoCAD",
        "Rhino 3D",
        "3DS Max + V-Ray",
        "Adobe Creative Suite",
        "Bluebeam Revu",
      ],
      relevantRoles: [
        "UX Designer",
        "Product Designer",
        "Technical Illustrator",
      ],
    },
    {
      title: "Stakeholder Collaboration",
      icon: Users,
      skills: [
        "Client Communication",
        "Consultant Coordination",
        "Team Leadership",
        "Public Presentations",
        "Cross-functional Teams",
        "Remote Collaboration",
      ],
      relevantRoles: [
        "Customer Success Manager",
        "Business Analyst",
        "Account Manager",
      ],
    },
    {
      title: "Technical & Problem-Solving",
      icon: Code,
      skills: [
        "Building Code Analysis",
        "Sustainable Design (LEED)",
        "Space Planning",
        "Systems Integration",
        "Quality Control",
        "Detail-Oriented Analysis",
      ],
      relevantRoles: [
        "Business Analyst",
        "QA Specialist",
        "Technical Consultant",
      ],
    },
    {
      title: "Specialized Experience",
      icon: Brain,
      skills: [
        "Educational Facilities",
        "Mixed-Use Development",
        "Historic Preservation",
        "Campus Master Planning",
        "International Projects",
        "Sustainable Architecture",
      ],
      relevantRoles: [
        "Product Manager",
        "Strategy Consultant",
        "Program Manager",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transferable Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Architecture has equipped me with a unique blend of technical,
            creative, and management skills that translate directly to tech
            roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-2 mb-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Relevant for:</span>{" "}
                  {category.relevantRoles.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-card rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Revit",
              "AutoCAD",
              "Rhino",
              "3DS Max",
              "V-Ray",
              "Archicad",
              "Bluebeam Revu",
              "Adobe Suite",
              "Microsoft Office",
              "Google Workspace",
              "SketchUp",
              "Enscape",
            ].map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-muted rounded-md text-center text-sm font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
