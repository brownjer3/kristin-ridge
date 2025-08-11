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
      title: "Documentation & Technical Writing",
      icon: FileText,
      skills: [
        "Technical Documentation",
        "API Documentation",
        "User Manuals",
        "Process Documentation",
        "Construction Drawings",
        "Specification Writing",
      ],
      relevantRoles: ["Technical Writer", "Documentation Specialist"],
    },
    {
      title: "Project & Task Management",
      icon: Calendar,
      skills: [
        "Project Coordination",
        "Stakeholder Management",
        "Timeline Development",
        "Resource Planning",
        "Budget Management",
        "Risk Assessment",
      ],
      relevantRoles: ["Project Manager", "Scrum Master", "Program Manager"],
    },
    {
      title: "Design & Visual Communication",
      icon: Layout,
      skills: [
        "AutoCAD",
        "Revit/BIM",
        "SketchUp",
        "Adobe Creative Suite",
        "3D Visualization",
        "Diagramming",
      ],
      relevantRoles: [
        "UX Designer",
        "UI Designer",
        "Data Visualization Specialist",
      ],
    },
    {
      title: "Collaboration & Communication",
      icon: Users,
      skills: [
        "Cross-functional Teams",
        "Client Relations",
        "Vendor Management",
        "Presentation Skills",
        "Conflict Resolution",
        "Remote Collaboration",
      ],
      relevantRoles: [
        "Customer Success",
        "Business Analyst",
        "Solutions Architect",
      ],
    },
    {
      title: "Technical & Analytical",
      icon: Code,
      skills: [
        "Systems Thinking",
        "Problem Solving",
        "Code Compliance",
        "Quality Assurance",
        "Data Analysis",
        "Process Improvement",
      ],
      relevantRoles: [
        "QA Analyst",
        "Business Intelligence",
        "Technical Consultant",
      ],
    },
    {
      title: "Learning & Adapting",
      icon: Brain,
      skills: [
        "Quick Learner",
        "Self-Directed Learning",
        "Technology Adoption",
        "Industry Research",
        "Continuous Improvement",
        "Agile Methodologies",
      ],
      relevantRoles: ["All Tech Roles"],
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
              "AutoCAD",
              "Revit",
              "SketchUp",
              "Adobe Creative Suite",
              "Microsoft Office",
              "Google Workspace",
              "Slack",
              "Asana",
              "Notion",
              "Figma",
              "Miro",
              "Zoom",
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
