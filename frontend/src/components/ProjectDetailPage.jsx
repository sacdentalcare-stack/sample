import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Container from "../components/container";
import Footer from "../components/Footer";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-auto relative">
        <video
          src="https://ik.imagekit.io/67mog36hf/Smari%20sample/03_240223_Cencora_Casefilm_No-Audio_Small.mp4?updatedAt=1753717688072"
          autoPlay
          muted
          loop
          className="w-full object-cover"
        />
        <div className="absolute top-8 left-10 text-white text-4xl font-bold text-left">{project.title}</div>
        <button className="absolute top-8 right-8 text-white text-4xl font-bold">×</button>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="text-2xl text-zinc-600 text-left">
            <div className="mb-6">
              <strong className="block mb-2 text-zinc-900 text-3xl text-left">Sector</strong>
              <span className="text-2xl text-left">{project.category}</span>
            </div>
            <div>
              <strong className="block mb-2 text-zinc-900 text-3xl text-left">Services</strong>
              {project.services.map((service, i) => (
                <div key={i} className="text-xl text-left">{service}</div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <h1 className="text-6xl font-bold mb-4 text-left">{project.title}</h1>
            <h2 className="text-4xl text-zinc-700 mb-8 text-left font-semibold">{project.tagline}</h2>
            <p className="text-2xl text-zinc-700 leading-relaxed whitespace-pre-line text-left">
              {project.description}
            </p>
          </div>
        </div>
      </Container>

      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">Transformative Strategy</h2>
          <p className="text-2xl text-zinc-700 leading-relaxed text-left">
            The transformation of Cencora’s brand was guided by a clear vision: to simplify its complex business structure and reflect its leadership in healthcare innovation. MetaDesign’s strategic approach focused on aligning the brand’s visual and verbal identity with its purpose, while clarifying its structure to ensure a cohesive and unified presence.
          </p>
          <p className="text-2xl text-zinc-700 leading-relaxed mt-6 text-left">
            By emphasizing clarity, accessibility, and a consistent voice, the new strategy created a brand that resonates with diverse stakeholders — from investors and partners to employees and patients — while ensuring the company could continue to adapt and thrive in an evolving industry.
          </p>
        </div>
      </Container>

      <div className="w-full">
        <img
          src="https://ik.imagekit.io/67mog36hf/Smari%20sample/videoframe_7191.png?updatedAt=1753717566716"
          alt="business and brand"
          className="w-full"
        />
      </div>

      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">Transformative Branding</h2>
          <p className="text-2xl text-zinc-700 leading-relaxed text-left">
            The new Cencora brand is a vibrant, modular system that reflects the company’s inspiring purpose and ambition. Central to the design is the Cencora wordmark, which prioritizes simplicity and clarity while projecting confidence and approachability. The distinctive True Blue color is a trustworthy tone, and anchors a dynamic palette of energizing colors, complemented by dynamic gradients that convey a sense of progression and movement.
          </p>
        </div>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
        <img
          src="https://ik.imagekit.io/67mog36hf/smari%20creatives/cover_02.png?updatedAt=1753715072905"
          alt="Brand visuals - phones"
          className="w-full rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/67mog36hf/smari%20creatives/cover_02.png?updatedAt=1753715072905"
          alt="12% stock increase"
          className="w-full rounded-lg"
        />
      
        <div className="col-span-full">
          <img
            src="https://ik.imagekit.io/67mog36hf/smari%20creatives/INDOOR%20EVENT%202.png?updatedAt=1753715073993"
            alt="Color swatches"
            className="w-full rounded-lg"
          />
        </div>
      </Container>

   
    </>
  );
};

export default ProjectDetailPage;
