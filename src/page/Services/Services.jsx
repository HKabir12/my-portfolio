import React from "react";
import {
  Globe,
  Smartphone,
  Archive,
  Palette,
  Database,
  Cloud,
  Gauge,
  Search,
  Wrench,
  PenTool,
  Headphones,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Full-stack web applications using modern frameworks like React, Next.js, TypeScript, Express.js, Node.js and MongoDB.",
    features: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
      "Server-Side Rendering",
    ],
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
  },
  {
    id: 2,
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsive Design",
    description:
      "Mobile-first, responsive websites that work flawlessly across all devices.",
    features: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
      "Adaptive Layouts",
    ],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
  },
  {
    id: 3,
    icon: <Archive className="h-6 w-6" />,
    title: "Frontend Development",
    description:
      "Interactive and responsive user interfaces built with modern web technologies.",
    features: [
      "React.js, Next.js & Modern JavaScript (ES6+)",
      "Tailwind CSS, HTML5, CSS3, TypeScript",
      "Axios & localStorage Integration",
      "State Management (useState, useEffect, useContext)",
    ],
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-500",
  },
  {
    id: 4,
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation of modern designs using React and Tailwind CSS, based on tools like Figma or Pixso.",
    features: [
      "Figma to React",
      "Design System Creation",
      "Component Libraries",
      "Responsive Layouts & Animations",
    ],
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
  },
  {
    id: 5,
    icon: <Database className="h-6 w-6" />,
    title: "Backend Development",
    description:
      "Scalable backend solutions using Node.js, Express.js, MongoDB and integrating third-party services.",
    features: [
      "Express API Development",
      "MongoDB Schema Design",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-500",
  },
  {
    id: 6,
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Deployment",
    description:
      "Deploy & manage full-stack applications seamlessly using platforms like Vercel, Firebase and other cloud platforms.",
    features: [
      "Vercel, Netlify & Railway Deployment",
      "CI/CD Workflow Setup",
      "Environment Variable Management",
      "Production Optimization",
    ],
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-500",
  },
];

const additionalServices = [
  {
    id: 1,
    icon: (
      <Gauge className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and SEO",
  },
  {
    id: 2,
    icon: (
      <Search className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "SEO Implementation",
    description: "On-page SEO optimization for better search rankings",
  },
  {
    id: 3,
    icon: (
      <Wrench className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "Maintenance & Support",
    description: "Ongoing support and updates for your applications",
  },
  {
    id: 4,
    icon: (
      <PenTool className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
    ),
    title: "Code Review & Refactoring",
    description: "Improve code quality and maintainability",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding  pt-16 ">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 opacity-100 transform-none">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(
            ({
              id,
              icon,
              title,
              description,
              features,
              gradientFrom,
              gradientTo,
            }) => (
              <div
                key={id}
                className="glass-card group relative overflow-hidden opacity-100 transform-none"
              >
                {/* Gradient hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 p-6">
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white mb-4`}
                  >
                    {icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {description}
                  </p>

                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm`}>
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${gradientFrom} ${gradientTo} mt-1.5`}
                        ></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>

        {/* Additional services */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map(({ id, icon, title, description }) => (
              <div
                key={id}
                className="glass-card text-center group opacity-100 transform-none p-6 rounded-lg"
              >
                {icon}
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 opacity-100 transform-none">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lets discuss your requirements and create something amazing
              together
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              tabIndex={0}
            >
              <Headphones className="h-5 w-5" />
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
