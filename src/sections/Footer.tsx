import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import PhoneIcon from "@/assets/icons/phone_calling.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              AllHouseClean
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              专业的清洁服务，让您的家居环境整洁舒适。我们提供全方位的家居清洁解决方案。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">联系我们</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-400" />
                <a
                  href="tel:(780) 669-4879"
                  className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                >
                  (780) 669-4879
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <EmailIcon className="w-4 h-4 text-gray-400" />
                </div>
                <a
                  href="mailto:edmonton@maidpro.com"
                  className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                >
                  edmonton@maidpro.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                <address className="text-gray-600 text-sm not-italic">
                  18012 105 Ave NW #101
                  <br />
                  Edmonton, AB T5S 2P1
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">快速链接</h3>
            <nav className="space-y-3">
              <Link
                href="#home"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
              >
                首页
              </Link>
              <Link
                href="#about"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
              >
                关于我们
              </Link>
              <Link
                href="#services"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
              >
                服务项目
              </Link>
              <Link
                href="#contact"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
              >
                联系我们
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-8 px-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AllHouseClean. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
