"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
	return (
		<section
			id="contact"
			className="py-20 px-4"
		>
			<div className="container max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
					<p className="text-lg text-muted-foreground">
						Open to opportunities in technical writing, project management, UX
						design, and related roles
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="bg-card rounded-lg p-8 shadow-sm"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						<div className="space-y-4">
							<h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
							<div className="space-y-3">
								<a
									href="mailto:kristinridge@gmail.com"
									className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
								>
									<Mail className="h-5 w-5" />
									<span>kristinridge@gmail.com</span>
								</a>
								<a
									href="tel:+13173177471"
									className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
								>
									<Phone className="h-5 w-5" />
									<span>(561) 317-7471</span>
								</a>
								<a
									href="https://linkedin.com/in/kristin-ridge-54921268"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
								>
									<Linkedin className="h-5 w-5" />
									<span>linkedin.com/in/kristin-ridge-54921268</span>
								</a>
								<div className="flex items-center gap-3 text-muted-foreground">
									<MapPin className="h-5 w-5" />
									<span>Chicago, IL</span>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold mb-4">Open to Roles</h3>
							<ul className="space-y-2 text-muted-foreground">
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">•</span>
									<span>Project Manager (Construction to Tech)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">•</span>
									<span>BIM/Technical Documentation Specialist</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">•</span>
									<span>Product Manager (Built Environment)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">•</span>
									<span>UX Researcher (Spatial Design Background)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">•</span>
									<span>Business Analyst (Systems Thinking)</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="text-center pt-6 border-t">
						<p className="text-muted-foreground mb-6">
							I'm excited to bring my unique perspective from architecture to
							the tech industry. Let's discuss how my skills can contribute to
							your team's success.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								asChild
							>
								<a href="mailto:kristinridgar@gmail.com">
									<Mail className="mr-2 h-4 w-4" />
									Send Email
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
							>
								<a
									href="https://linkedin.com/in/kristin-ridge-54921268"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-4 w-4" />
									Connect on LinkedIn
								</a>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
