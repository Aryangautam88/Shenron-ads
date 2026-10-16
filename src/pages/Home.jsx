
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import phone from "../assets/phone.webp";
import ring from "../assets/ringRight.webp";
import {
    FiTrendingUp,
    FiBarChart2,
    FiSend,
    FiSearch,
    FiClock,
    FiShield,
} from "react-icons/fi";
import { FaArrowRight, FaTelegramPlane } from "react-icons/fa";


const highlights = [
    {
        number: "01",
        title: "Expert Analysis",
        description: "Market insights backed by technical research and indicators.",
    },
    {
        number: "02",
        title: "Market Clarity",
        description: "Understand crypto and forex trends with greater confidence.",
    },
    {
        number: "03",
        title: "Informed Decisions",
        description: "Explore market opportunities with a research-led approach.",
    },
];

const benefits = [
    {
        title: "Experienced Market Analysts",
        description: "Research-led market perspectives.",
    },
    {
        title: "Research-Driven Insights",
        description: "Technical analysis and market reports.",
    },
    {
        title: "Responsive Client Support",
        description: "Guidance when you need assistance.",
    },
    {
        title: "A Growing Community",
        description: "Learn and explore markets together.",
    },
];

const features = [
    {
        icon: FiTrendingUp,
        number: "01",
        title: "Short-Term Market Reports",
        description:
            "Explore concise market reports backed by technical analysis and research.",
    },
    {
        icon: FiBarChart2,
        number: "02",
        title: "Daily Market Analysis",
        description:
            "Stay informed with regular crypto, forex, and commodity market insights.",
    },
    {
        icon: FiSend,
        number: "03",
        title: "Timely Market Updates",
        description:
            "Receive relevant market updates through our available communication channels.",
    },
    {
        icon: FiSearch,
        number: "04",
        title: "In-Depth Research",
        description:
            "Understand market movements through indicators, trends, and technical research.",
    },
    {
        icon: FiClock,
        number: "05",
        title: "Global Market Coverage",
        description:
            "Explore market developments across different trading sessions and regions.",
    },
    {
        icon: FiShield,
        number: "06",
        title: "Risk Awareness",
        description:
            "Learn about market risks and risk-management principles before making decisions.",
    },
];


function Home() {
    return (
        <>
            <main className="home-hero">
                <div className="home-hero-inner">

                    {/* Left: Hero content */}
                    <div className="hero-left">
                        <span className="hero-eyebrow">
                            FEEL THE WEALTH
                        </span>

                        <h1 className="hero-title">
                            Improve Your Investment
                            <br className="desktop-break" />
                            Knowledge With Our
                            <br className="desktop-break" />
                            Expert Team.
                        </h1>

                        <Link
                            to="/services/forex"
                            className="hero-button"
                        >
                            Explore Our Services
                            <span aria-hidden="true">→</span>
                        </Link>

                        {/* Dashboard illustration */}
                        <div className="hero-dashboard">
                            <img
                                src={phone}
                                alt="Investment dashboard showing balance, transactions and market charts"
                            />
                        </div>
                    </div>

                    {/* Right: Decorative rings and description */}
                    <div className="hero-right">
                        <div className="hero-rings">
                            <img
                                src={ring}
                                alt=""
                                aria-hidden="true"
                            />
                        </div>

                        <p className="hero-description">
                            We offer daily Crypto and
                            Forex market insights based
                            on technical analysis and
                            relevant indicators.
                        </p>
                    </div>

                </div>
            </main>

            <section className="about-section">
                <div className="about-inner">
                    <div className="about-top">
                        <div className="about-heading">
                            <span className="about-eyebrow">
                                <span className="about-eyebrow-dot" />
                                WHO WE ARE
                            </span>

                            <h2>
                                Clarity in
                                <br />
                                every market.
                                <span className="about-heading-accent">
                                    Confidence in every move.
                                </span>
                            </h2>
                        </div>

                        <div className="about-copy">
                            <span className="about-side-label">
                                YOUR MARKET, BETTER UNDERSTOOD
                            </span>

                            <p>
                                Shenron Global helps you navigate the complexities
                                of crypto and forex markets through expert analysis,
                                meaningful insights, and research-driven market reports.
                            </p>

                            <p>
                                We turn market movements into clearer perspectives
                                so you can make more informed investment decisions.
                            </p>

                            <Link to="/guide-to-kickstart" className="about-link">
                                Discover our approach
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>

                    <div className="about-divider" />

                    <div className="about-highlights">
                        {highlights.map((item) => (
                            <article className="about-highlight" key={item.number}>
                                <div className="about-highlight-top">
                                    <span className="about-number">{item.number}</span>
                                    <span className="about-highlight-arrow" aria-hidden="true">
                                        ↗
                                    </span>
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="about-bottom-glow" aria-hidden="true" />
                </div>
            </section>

            <section className="company-section">
                <div className="company-panel">
                    <div className="company-left">
                        <span className="company-eyebrow">
                            <span className="company-eyebrow-dot" />
                            GET TO KNOW US
                        </span>

                        <h2 className="company-title">
                            Shenron Global
                            <br />
                            is here to help you
                            <br />
                            understand the
                            <br />
                            <span>markets better.</span>
                        </h2>

                        <div className="company-stat">
                            <span className="company-stat-number">100,000+</span>
                            <p>Happy Clients &amp; Still Counting...</p>
                        </div>

                        <div className="company-actions">
                            <Link to="/services/forex" className="company-btn primary">
                                Explore Services
                                <span aria-hidden="true">→</span>
                            </Link>

                            <Link
                                to="/contact"
                                className="company-btn secondary"
                            >
                                Get in Touch
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>

                    <div className="company-right">
                        <span className="company-side-label">
                            OUR PURPOSE &amp; APPROACH
                        </span>

                        <p className="company-description">
                            At Shenron Global, we help individuals better understand
                            the complexities of cryptocurrency and forex markets
                            through market analysis, technical insights, and
                            research-driven reports.
                        </p>

                        <p className="company-description">
                            Our focus is to make market information easier to
                            understand, helping you explore opportunities and
                            make more informed decisions.
                        </p>

                        <div className="company-benefits">
                            {benefits.map((benefit, index) => (
                                <div className="company-benefit" key={benefit.title}>
                                    <span className="company-benefit-icon" aria-hidden="true">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="company-benefit-copy">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>

                                    <span className="company-benefit-arrow" aria-hidden="true">
                                        ↗
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="company-orb orb-one" />
                    <div className="company-orb orb-two" />
                </div>
            </section>

            <section className="why-section">
                <div className="why-container">
                    <div className="why-header">
                        <span className="why-eyebrow">
                            <span className="why-eyebrow-dot" />
                            THE SHENRON ADVANTAGE
                        </span>

                        <h2>
                            Why Choose <span>Shenron Global?</span>
                        </h2>

                        <p>
                            Better market understanding starts with meaningful insights,
                            thoughtful research, and a clearer view of the opportunities
                            and risks ahead.
                        </p>
                    </div>

                    <div className="why-grid">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <article className="why-card" key={feature.number}>
                                    <div className="why-card-top">
                                        <div className="why-icon">
                                            <span className="why-icon-inner">
                                                <Icon aria-hidden="true" />
                                            </span>
                                        </div>

                                        <span className="why-number">{feature.number}</span>
                                    </div>

                                    <h3>{feature.title}</h3>

                                    <p>{feature.description}</p>

                                    <div className="why-card-line" />
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="manage-section">
      <div className="manage-container">
        {/* Left Content */}
        <div className="manage-content">
          <span className="manage-label">
            SMARTER FINANCIAL DECISIONS
          </span>

          <h2>
            Manage money.
            <br />
            <span>Invest with confidence.</span>
          </h2>

          <h3>We do the hard work for you.</h3>

          <p className="manage-description">
            Navigate the Forex and cryptocurrency markets with
            confidence. Our team delivers detailed market analysis,
            actionable insights, and risk-management strategies to
            help you make more informed investment decisions.
          </p>

          <div className="manage-features">
            <div className="manage-feature">
              <span className="feature-check">✓</span>
              Expert market analysis
            </div>

            <div className="manage-feature">
              <span className="feature-check">✓</span>
              Smarter risk management
            </div>

            <div className="manage-feature">
              <span className="feature-check">✓</span>
              Insights that matter
            </div>
          </div>

          <div className="manage-buttons">
            <a href="/contact" className="manage-primary-btn">
              Get Started Now <FaArrowRight />
            </a>

            <a
              href="https://t.me/yourgroup"
              target="_blank"
              rel="noreferrer"
              className="manage-secondary-btn"
            >
              Join Our Free Group <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Right Phone Illustration */}
        <div className="manage-visual">
          <div className="phone-glow"></div>

          <div className="phone">
            <div className="phone-frame">
              <div className="phone-notch"></div>

              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span>● ● ▰</span>
                </div>

                <div className="phone-heading">
                  <span>My Balance</span>
                  <span className="balance-menu">•••</span>
                </div>

                <div className="phone-balance">
                  $1,458.00
                </div>

                <div className="balance-change">
                  <span>↗</span> +12.8% this month
                </div>

                <div className="phone-chart">
                  <svg
                    viewBox="0 0 280 100"
                    role="img"
                    aria-label="Illustrative upward investment chart"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ffffff"
                          stopOpacity="0.32"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffffff"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 82 L30 67 L55 74 L85 43 L115 56 L145 31 L173 45 L207 18 L238 29 L280 5 L280 100 L0 100 Z"
                      fill="url(#chartFill)"
                    />

                    <path
                      d="M0 82 L30 67 L55 74 L85 43 L115 56 L145 31 L173 45 L207 18 L238 29 L280 5"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="phone-transactions">
                  <div className="transaction-title">
                    Recent Activity
                    <span>View all</span>
                  </div>

                  <div className="transaction-row">
                    <div className="transaction-icon purple">
                      ↗
                    </div>

                    <div className="transaction-info">
                      <strong>Investment return</strong>
                      <span>Today, 10:42 AM</span>
                    </div>

                    <strong className="transaction-amount">
                      +$358.00
                    </strong>
                  </div>

                  <div className="transaction-row">
                    <div className="transaction-icon pink">
                      ↘
                    </div>

                    <div className="transaction-info">
                      <strong>Market portfolio</strong>
                      <span>Yesterday</span>
                    </div>

                    <strong className="transaction-amount">
                      $1,458.00
                    </strong>
                  </div>
                </div>

                <div className="phone-bottom-nav">
                  <span className="active-nav">⌂</span>
                  <span>⌁</span>
                  <span>◷</span>
                  <span>◎</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="floating-card">
            <div className="floating-icon">↗</div>

            <div>
              <span>Portfolio growth</span>
              <strong>+12.8%</strong>
            </div>
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
        </div>
      </div>
    </section>
        </>
    );
}

export default Home;
