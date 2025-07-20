import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono">
          <span className="text-green-400">&gt;</span> Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-mono">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 flex hover:cursor-pointer items-center gap-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105">
                  <a
                  href="mailto:deveshshukla1603@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 "
                >
                  <Mail className="w-5 h-5 text-green-400" />
                </a>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:deveshshukla1603@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    deveshshukla1603@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 flex hover:cursor-pointer items-center gap-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                  <a
                  href="https://linkedin.com/in/imdeveshshukla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 "
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
                </div>
                <div>
                  <p className="font-semibold">Linkedin</p>
                  <a 
                    href="https://linkedin.com/in/imdeveshshukla"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    imdeveshshukla
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Mirzapur, UP, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 flex hover:cursor-pointer items-center gap-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-pink-400 transition-all duration-300 hover:scale-105">
                  <a
                  href="https://www.instagram.com/imdev6sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 "
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                </a>
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a 
                    href="https://www.instagram.com/imdev6sh/"
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  >
                    imdev6sh
                  </a>
                </div>
              </div>
            </div>

            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;