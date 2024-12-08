"use client";
import styles from "./styles.module.css";
import NewsletterForm from "./form/form";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.text}>
        <h2>Newsletter</h2>
        <div className={styles.textContent}>
          <p>
            If you&rsquo;re looking to stay up-to-date on the latest news, and
            exciting updates about us, we invite you to sign up for our
            newsletter below. Our newsletter is the perfect way to keep in touch
            with us and never miss out on the latest and greatest information.
          </p>
          <p>
            As a subscriber, you&rsquo;ll receive timely and relevant
            information about Nexterra Capital, delivered straight to your
            inbox. Nexterra Capital Newsletter is a great way to stay connected
            with us and never miss out on anything important. We promise to keep
            you informed, without overwhelming your inbox.
          </p>

          <p>We look forward to welcoming you to the community.</p>
        </div>

        <h3>Subscribe below to get the latest news and Updates.</h3>
        <NewsletterForm />
      </div>
      <Footer />
    </div>
  );
}
