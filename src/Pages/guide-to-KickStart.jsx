
import React, { useEffect, useRef, useState } from "react";
import "./guide-to-KickStart.css";
import guideHeroImg from "../assets/guide-hero-img.webp";
import ring from "../assets/ring.webp";

const testimonials = [
    {
        quote:
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
        name: "AXEL FARROW",
        role: "Senior Team Executive",
    },
    {
        quote:
            "Curabitur fermentum nulla non justo aliquet, quis vehicula quam consequat. Duis ut hendrerit tellus, elementum lacinia elit. Maecenas at consectetur ex, vitae consequat augue. Vivamus eget dolor vel quam condimentum sodales. In bibendum dolor urna, sit amet fermentum purus venenatis amet.",
        name: "RENESMEE THOMAS",
        role: "Senior Data Engineer",
    },
    {
        quote:
            "Aliquet nisl. Nulla tempor mauris sed pretium egestas. Ut mi lacus, tincidunt ac quam quis, ultricies laoreet purus. Donec tincidunt scelerisque lacus, vel convallis augue interdum ac. Etiam eget tortor ac odio aliquam lobortis quis at augue.",
        name: "KASON ESPINOSA",
        role: "Direct Communications Designer",
    },
];

const services = [
    {
        title: "What Services We Provide?",
        color: "purple",
        items: [
            "Research Report",
            "Live Market Updates",
            "Live monitoring",
            "Forex, Crypto & Commodity Analysis",
            "Trading Tips and mentorship",
            "Account Management",
        ],
    },
    {
        title: "Why Choose Billare Beacons?",
        color: "orange",
        items: [
            "100% Genuine Services",
            "10+ Years of Experience Team",
            "Dedicated Mentorship",
            "24/7 Assistance",
            "Excellent Success rate",
        ],
    },
];

const statistics = [
    {
        target: 20,
        suffix: "+",
        label: "Market Analysts",
        format: "normal",
    },
    {
        target: 100000,
        suffix: "",
        label: "Satisfied Clients",
        format: "compact",
    },
    {
        target: 200000,
        suffix: " $",
        label: "Profit Made",
        format: "compact",
    },
];

/* =========================================
   ANIMATED COUNTER HOOK
========================================= */

function useCountUp(target, active, duration = 1800) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) {
            setCount(target);
            return;
        }

        let frameId;
        let startTime;

        const animate = (timestamp) => {
            if (startTime === undefined) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [target, active, duration]);

    return count;
}

/* =========================================
   STATISTIC CARD
========================================= */

function StatCard({ item, active }) {
    const count = useCountUp(item.target, active);

    let displayValue;

    if (item.format === "compact") {
        displayValue =
            count >= 1000
                ? `${Math.floor(count / 1000)}k`
                : count.toLocaleString("en-US");
    } else {
        displayValue = count.toLocaleString("en-US");
    }

    return (
        <div className="services-stats-card">
            <h3>
                {displayValue}
                {item.suffix}
            </h3>

            <p>{item.label}</p>
        </div>
    );
}

/* =========================================
   MAIN COMPONENT
========================================= */

const GuideToKickStart = () => {
    const statsRef = useRef(null);
    const [countStarted, setCountStarted] = useState(false);

    useEffect(() => {
        const element = statsRef.current;

        if (!element) return;

        // Start counting when statistics enter the viewport
        if (!("IntersectionObserver" in window)) {
            setCountStarted(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCountStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* =====================================
          SECTION 1: GUIDE HERO
      ===================================== */}

            <section className="guide-kickstart">
                <div className="guide-kickstart-container">
                    <div className="guide-kickstart-content">
                        <span className="guide-kickstart-eyebrow">
                            BEGINNER'S GUIDE TO START TRADING
                        </span>

                        <h2>How to Get Started</h2>

                        <p>
                            Download these PDFs to know how to get started
                            and learn from our analyses.
                        </p>

                        <a
                            href="#guide-downloads"
                            className="guide-kickstart-button"
                        >
                            Download Guide Now
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div className="guide-kickstart-visual">
                        <img
                            src={guideHeroImg}
                            alt="Trading dashboard and financial analytics illustration"
                            className="guide-kickstart-image"
                        />
                    </div>
                </div>
            </section>

            {/* =====================================
          SECTION 2: SERVICES + STATISTICS
      ===================================== */}

            <section className="services-stats-section">
                {/* Service information cards */}
                <div className="services-info-grid">
                    {services.map((service) => (
                        <article
                            className={`services-info-card ${service.color}`}
                            key={service.title}
                        >
                            <h2>{service.title}</h2>

                            <ul>
                                {service.items.map((item) => (
                                    <li key={item}>
                                        <span
                                            className="services-check"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Animated statistics */}
                <div
                    className="services-stats-grid"
                    ref={statsRef}
                >
                    {statistics.map((item) => (
                        <StatCard
                            key={item.label}
                            item={item}
                            active={countStarted}
                        />
                    ))}
                </div>
            </section>

            {/* ------------------------------------third Page=------------------------------------------  */}

            <section className="testimonials-section">
                <div className="testimonials-container">
                    <h2 className="testimonials-heading">Testimonials</h2>

                    <div className="testimonials-content">
                        <div className="testimonials-grid">
                            {testimonials.map((item) => (
                                <article
                                    className="testimonial-card"
                                    key={item.name}
                                >
                                    <span
                                        className="testimonial-quote-icon"
                                        aria-hidden="true"
                                    >
                                        “
                                    </span>

                                    <blockquote>{item.quote}</blockquote>

                                    <div className="testimonial-author">
                                        <span className="testimonial-author-name">
                                            {item.name}
                                        </span>

                                        <p>{item.role}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="testimonials-ring-wrap" aria-hidden="true">
                            <img
                                src={ring}
                                alt=""
                                className="testimonials-ring"
                            />
                        </div>
                    </div>

                    <div className="testimonials-bottom-line" />
                </div>
            </section>
        </>
    );
};

export default GuideToKickStart;
