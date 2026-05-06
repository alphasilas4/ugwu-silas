import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ugwu Silas
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Software Engineer | Cybersecurity Specialist
        </p>
        <p className="max-w-2xl mx-auto text-gray-400">
          Building secure systems, identity platforms, and monitoring solutions with a focus on backend engineering and cybersecurity.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a Software Engineer and Cybersecurity Specialist with experience building secure applications including attendance systems, identity verification platforms, and communication systems. I combine backend development with security principles to deliver reliable and scalable solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Secure Chat Application",
              desc: "A privacy-focused messaging system with authentication and secure session handling.",
            },
            {
              title: "Cadet Attendance System",
              desc: "A role-based attendance and monitoring system with reporting features.",
            },
            {
              title: "Identity Verification System",
              desc: "Face detection and identity matching using OpenCV.",
            },
            {
              title: "Medical Scan System",
              desc: "Secure system for managing patient scan records and data.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "PHP",
            "Python",
            "MySQL",
            "Cybersecurity",
            "API Development",
            "OpenCV",
            "System Design",
            "Agile",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together? Let’s connect.
        </p>
        <Button>Email Me</Button>
      </section>
    </div>
  );
}
