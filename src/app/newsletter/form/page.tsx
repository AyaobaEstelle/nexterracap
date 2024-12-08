"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      console.log("Form submitted:", formData);
      alert("Subscription successful!");
    } else {
      alert("Please provide consent to proceed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
      <div className={styles.formGroup}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <p className={styles.privacyMessage}>
        Nexterra Capital values your privacy and will never send irrelevant
        information. If you consent to us contacting you for this purpose,
        please tick below.
      </p>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
