import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { usePopup } from "./popup";
import { useLanguage } from "@/contexts/LanguageContext";

// Initialize EmailJS with environment variables
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
  "";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
  process.env.REACT_APP_EMAILJS_SERVICE_ID ||
  "";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
  "";
const EMAILJS_TEMPLATE_ID_TEXT =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_TEXT ||
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_TEXT ||
  "";

if (!EMAILJS_PUBLIC_KEY) {
  console.error("EmailJS public key is not configured");
}

emailjs.init(EMAILJS_PUBLIC_KEY || "");

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SUBMISSION_LIMIT = 2;

const ContactForm: React.FC = () => {
  const { showSuccess, showError } = usePopup();
  const { t } = useLanguage();

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remainingSubmissions, setRemainingSubmissions] =
    useState(SUBMISSION_LIMIT);

  const checkRateLimit = async (): Promise<boolean> => {
    try {
      const response = await fetch("/api/submit-limit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Rate limit response status:", response.status);
      const responseText = await response.text();
      console.log("Rate limit response text:", responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        alert(getTranslatedString("contactForm.serverError"));
        return false;
      }

      if (!response.ok) {
        if (response.status === 429) {
          alert(
            getTranslatedString("contactForm.rateLimit").replace(
              "{minutes}",
              data.remainingTime
            )
          );
          return false;
        }
        throw new Error(
          data.message || getTranslatedString("contactForm.error")
        );
      }

      setRemainingSubmissions(data.remainingSubmissions);
      return true;
    } catch (error) {
      console.error("Rate limit check error:", error);
      alert(getTranslatedString("contactForm.error"));
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check rate limit first
      const canSubmit = await checkRateLimit();
      if (!canSubmit) {
        setIsSubmitting(false);
        return;
      }

      if (
        !EMAILJS_SERVICE_ID ||
        !EMAILJS_TEMPLATE_ID_TEXT ||
        !EMAILJS_PUBLIC_KEY
      ) {
        console.error("Missing EmailJS configuration:", {
          serviceId: !EMAILJS_SERVICE_ID,
          templateId: !EMAILJS_TEMPLATE_ID_TEXT,
          publicKey: !EMAILJS_PUBLIC_KEY,
        });
        showError(getTranslatedString("contactForm.error"));
        return;
      }

      console.log("Attempting to send email with params:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID_TEXT,
        hasPublicKey: !!EMAILJS_PUBLIC_KEY,
        formData,
      });

      const adminTemplateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_TEXT,
        adminTemplateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Response:", response);
      alert(getTranslatedString("contactForm.success"));
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS detailed error:", error);
      showError(getTranslatedString("contactForm.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {remainingSubmissions < SUBMISSION_LIMIT && (
        <div className="text-yellow-600 mb-4">
          {getTranslatedString("contactForm.remainingSubmissions").replace(
            "{count}",
            remainingSubmissions.toString()
          )}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          {getTranslatedString("contactForm.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          {getTranslatedString("contactForm.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          {getTranslatedString("contactForm.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input resize-none"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting
          ? getTranslatedString("contactForm.sending")
          : getTranslatedString("contactForm.send")}
      </button>
    </form>
  );
};

export default ContactForm;
