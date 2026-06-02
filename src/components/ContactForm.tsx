"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

interface FormData {
  name: string;
  email: string;
  message: string;
}

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {isSuccess && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-300"
        >
          <i className="fas fa-check-circle mt-0.5 shrink-0" aria-hidden />
          <p>
            {t(
              portfolioData.contact.form.successMessage.vi,
              portfolioData.contact.form.successMessage.en
            )}
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="contact-field-label">
            {t("Tên", "Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t(
              portfolioData.contact.form.namePlaceholder.vi,
              portfolioData.contact.form.namePlaceholder.en
            )}
            className="contact-field-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="contact-field-label">
            {t("Email", "Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t(
              portfolioData.contact.form.emailPlaceholder.vi,
              portfolioData.contact.form.emailPlaceholder.en
            )}
            className="contact-field-input"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="contact-field-label">
          {t("Tin nhắn", "Message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t(
            portfolioData.contact.form.messagePlaceholder.vi,
            portfolioData.contact.form.messagePlaceholder.en
          )}
          className="contact-field-input min-h-[140px] resize-y"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-submit-btn disabled:cursor-not-allowed disabled:opacity-60"
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
          t(
            portfolioData.contact.form.submitButton.vi,
            portfolioData.contact.form.submitButton.en
          )
        )}
      </button>
    </form>
  );
};
