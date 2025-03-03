import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-4 mt-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-br from-pink-600 via-emerald-800 to-pink-700 text-transparent bg-clip-text">
              HAIRLYTIC
            </h3>
            <p className="text-slate-600">
              Transform your look with AI-powered hair transformations in seconds.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-600 hover:text-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-pink-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Features Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Photo Upload</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Style Library</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">AI Generation</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Share Results</span></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Resources</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Documentation</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Blog</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">Tutorials</span></li>
              <li><span className="text-slate-600 hover:text-pink-600 transition-colors">FAQs</span></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-600" />
                <a href="mailto:hello@hairstyleai.com" className="text-slate-600 hover:text-pink-600 transition-colors">
                  hello@hairstyleai.com
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <a 
                href="#" 
                className="px-5 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300 shadow-md hover:shadow-lg border border-purple-100"
              >
                Contact Support
              </a>
            </div>
          </div> */}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-purple-100/50 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Hairlytic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-500 text-sm hover:text-pink-600 transition-colors">Privacy Policy</span>
            <span className="text-slate-500 text-sm hover:text-pink-600 transition-colors">Terms of Service</span>
            <span className="text-slate-500 text-sm hover:text-pink-600 transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;