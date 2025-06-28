"use client";

export default function FounderStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-blue-100 p-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            My Founder Journey
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            From Vision to Reality: Building Software That Matters
          </p>
        </header>

        {/* Story Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Founder & Solo Builder</h2>
          <p className="text-gray-800 text-lg mb-3">
            I am the founder of a software company, and I have personally delivered more than <span className="font-bold text-blue-700">10 projects</span> from idea to deployment—single-handedly managing every step. My journey covers everything from understanding client requirements, architecting scalable solutions, designing intuitive UIs, hands-on development, to deployment and ongoing maintenance.
          </p>
          <p className="text-gray-700 mb-2">
            My approach is deeply collaborative with clients, ensuring every product is tailored to real business needs. I thrive on transforming ideas into robust, production-ready software.
          </p>
        </section>

        {/* SaaS Highlight */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-purple-700 mb-2">SaaS Success Story</h2>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 mb-2">
            <p className="text-lg text-gray-800">
              <span className="font-bold text-purple-700">RecruitPro</span> — a SaaS platform I designed, built, and scaled, now serving <span className="font-bold text-purple-700">750+ active users</span>. This project is a testament to my ability to deliver end-to-end solutions that scale and delight users.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 ml-2">
              <li>Requirement gathering & product vision</li>
              <li>System architecture & database design</li>
              <li>UI/UX with HTML, CSS, Bootstrap</li>
              <li>Backend with Node.js & Django</li>
              <li>AI-powered features for automation & analytics</li>
              <li>Cloud deployment & CI/CD</li>
              <li>Ongoing support & maintenance</li>
            </ul>
          </div>
        </section>

        {/* AI & Full Stack Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-700 mb-2">AI & Full-Stack Expertise</h2>
          <p className="text-gray-800 mb-2">
            I leverage AI and automation to solve real-world problems—integrating machine learning, natural language processing, and smart analytics into business workflows. My stack includes Node.js, Django, HTML, CSS, Bootstrap, and modern cloud platforms.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Node.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Django</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-semibold">HTML</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">CSS</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">Bootstrap</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-semibold">AI/ML</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-semibold">Cloud</span>
          </div>
        </section>

        {/* Personal Statement */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-pink-700 mb-2">My Promise</h2>
          <p className="text-gray-800 text-lg">
            I don't just write code—I build products that solve problems and create value. I am passionate about every stage of the software lifecycle, and I take pride in delivering quality, reliability, and innovation.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <div className="inline-block bg-gradient-to-r from-blue-200 to-purple-200 px-8 py-6 rounded-full border-4 border-dashed border-blue-300 shadow-lg">
            <div className="text-2xl mb-2">🚀</div>
            <p className="text-xl font-black text-gray-800 mb-1">Let's build something amazing together.</p>
            <p className="text-lg font-semibold text-gray-700">Contact: <a href="mailto:sanghvipranay17@gmail.com" className="underline text-blue-700">sanghvipranay17@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
} 