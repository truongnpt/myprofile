"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const fieldClassName =
  "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3.5 text-base text-white shadow-inner shadow-black/5 placeholder:text-white/45 backdrop-blur-sm transition-all focus:border-white/70 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/25 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3 sm:text-sm";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIsSuccess(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate form submission — replace with API / email service later
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
      {isSuccess && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-emerald-300/40 bg-emerald-500/15 px-4 py-3 text-sm text-white"
        >
          <i
            className="fas fa-check-circle mt-0.5 shrink-0 text-emerald-300"
            aria-hidden
          />
          <p>
            {t(
              portfolioData.contact.form.successMessage.vi,
              portfolioData.contact.form.successMessage.en
            )}
          </p>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white/90">
          {t(
            portfolioData.contact.form.namePlaceholder.vi,
            portfolioData.contact.form.namePlaceholder.en
          )}
        </label>
        <div className="relative">
          <i
            className="fas fa-user pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40"
            aria-hidden
          />
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t("Nguyễn Văn A", "John Doe")}
            className={`${fieldClassName} pl-11`}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white/90">
          {t(
            portfolioData.contact.form.emailPlaceholder.vi,
            portfolioData.contact.form.emailPlaceholder.en
          )}
        </label>
        <div className="relative">
          <i
            className="fas fa-envelope pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40"
            aria-hidden
          />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email@example.com"
            className={`${fieldClassName} pl-11`}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/90"
        >
          {t(
            portfolioData.contact.form.messagePlaceholder.vi,
            portfolioData.contact.form.messagePlaceholder.en
          )}
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t(
              "Nội dung tin nhắn của bạn...",
              "Write your message here..."
            )}
            className={`${fieldClassName} min-h-[140px] resize-y sm:resize-none`}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/15 transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60 sm:py-3 sm:text-sm"
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin text-sm" aria-hidden />
            {t(
              portfolioData.contact.form.sendingButton.vi,
              portfolioData.contact.form.sendingButton.en
            )}
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane text-sm" aria-hidden />
            {t(
              portfolioData.contact.form.submitButton.vi,
              portfolioData.contact.form.submitButton.en
            )}
          </>
        )}
      </button>
    </form>
  );
};
