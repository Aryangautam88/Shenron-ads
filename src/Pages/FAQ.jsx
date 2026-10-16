
import React, { useState } from "react";
import "./FAQ.css";

const faqItems = [
  {
    question: "How can I join the VIP group?",
    answer: (
      <>
        <p>
          You can join the VIP group by choosing a subscription
          from the Services section. Review the available plans
          and pricing before completing your purchase.
        </p>
        <p>
          Once your payment is confirmed, follow the instructions
          provided in your confirmation email to access the group.
        </p>
        <p>
          Lifetime subscriptions, where offered, are subject to
          the terms and conditions of the selected plan.
        </p>
      </>
    ),
  },
  {
    question: "What payment methods can I use?",
    answer: (
      <p>
        Available payment methods are displayed during checkout.
        Please check the payment page for the currently supported
        options and contact support if you experience any issues.
      </p>
    ),
  },
  {
    question: "Where can I see all the RESULTS?",
    answer: (
      <p>
        Visit the relevant results or performance section of our
        website to review the information provided. Past results
        do not guarantee future trading performance.
      </p>
    ),
  },
  {
    question: "I am NEW and I want to learn from zero",
    answer: (
      <p>
        Beginners can start with our educational guides and
        introductory resources. Learn the basics of the markets,
        risk management and trading terminology before trading
        with real money.
      </p>
    ),
  },
  {
    question: "Is there a Free trial period?",
    answer: (
      <p>
        Trial availability depends on the current subscription
        offers. Please check the Services section or contact our
        support team for the latest information.
      </p>
    ),
  },
  {
    question: "Which broker do you recommend (Forex)?",
    answer: (
      <p>
        Choose a broker that is properly regulated in your
        jurisdiction and review its fees, trading conditions
        and withdrawal policies. Always conduct your own research
        before opening an account.
      </p>
    ),
  },
  {
    question: "What platforms should I use?",
    answer: (
      <p>
        The appropriate trading platform depends on your broker
        and preferred markets. Check platform compatibility,
        available tools and supported devices before choosing.
      </p>
    ),
  },
  {
    question: "What time do you send the alerts?",
    answer: (
      <p>
        Alert timings may vary depending on market conditions,
        trading sessions and available opportunities. Check your
        membership information for the applicable alert schedule.
      </p>
    ),
  },
  {
    question: "How can I trust your group?",
    answer: (
      <p>
        Review the service details, published information,
        subscription terms and support options before joining.
        Trading involves risk, and no group can guarantee profits.
      </p>
    ),
  },
  {
    question: "How can I change my subscription?",
    answer: (
      <p>
        Contact the support team with your subscription details
        to ask about available plan changes. Any change will be
        subject to the applicable subscription terms.
      </p>
    ),
  },
  {
    question: "How can I cancel my subscription?",
    answer: (
      <p>
        Please review the cancellation and refund policy
        associated with your plan. Contact support for assistance
        with cancellation and confirmation of your request.
      </p>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* Heading */}
        <header className="faq-heading">
          <span className="faq-eyebrow">
            GOT QUESTIONS?
          </span>

          <h2>
            Frequently Asked
            <span>Questions</span>
          </h2>

          <p>
            Everything you need to know about our services.
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="faq-panel">
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="faq-question-text">
                      {item.question}
                    </span>

                    <span
                      className="faq-toggle"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="faq-answer"
                      id={answerId}
                    >
                      {item.answer}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
