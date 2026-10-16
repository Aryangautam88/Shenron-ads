import React from "react";
import "./Forex-Section.css";
import ring from "../assets/ring.webp";

const plans = [
    {
        name: "BASIC SERVICES",
        account: "$500",
        price: "$2299",
        billing: "Annually or $699 Quarterly",
        features: [
            "Daily 2–3 signals",
            "RR 1:1/1.5",
            "Access to Experts Panel",
            "Live monitoring",
            "Major Economic updates",
            "Important News",
            "Risk profiling",
            "24/7 Assistance",
        ],
        featured: false,
    },
    {
        name: "PREMIUM SERVICES",
        account: "$5000",
        price: "$2899",
        billing: "Annually or $1099 Quarterly",
        features: [
            "Premium services",
            "Daily 3–4 signals",
            "Newsletter",
            "Weekly calendar",
            "RR 1:1.5/2",
            "Access to Experts Panel",
            "Real-time global news stream",
            "Major Economic updates",
            "Risk profiling",
            "24/7 Assistance",
            "Dedicated Relationship manager",
        ],
        featured: true,
    },
    {
        name: "ELITE SERVICES",
        account: "$10000",
        price: "$6999",
        billing: "Annually or $1999 Quarterly",
        features: [
            "Daily 4–6 signals",
            "Newsletter",
            "Weekly calendar",
            "RR 1:2/4",
            "Sniper entries",
            "Access to Experts Panel",
            "Real-time global news stream",
            "Major Economic updates",
            "Accuracy Level Is Very High.",
            "Pre-session briefing",
            "Risk profiling",
            "24/7 Assistance",
            "Dedicated Relationship manager",
            "Dynamic Market strategies",
        ],
        featured: false,
    },
];

export default function ForexSection() {
    return (

        <>
            <section className="forex-section" aria-labelledby="forex-title">
                <div className="forex-hero">
                    <img className="forex-rings" src={ring} alt="" aria-hidden="true" />
                    <div className="forex-hero-content">
                        <p className="forex-eyebrow">BILLARE BEACONS · TRADING SUPPORT</p>
                        <h1 id="forex-title">Forex Services</h1>
                        <p className="forex-description">
                            We ensure that we can serve all of our clients by offering signals in both major and minor
                            currency pairs. These customized signals are sent straight from our researchers’ desks
                            following a thorough review of each trader’s profile and the creation of their unique
                            trading portfolio. This allows our team to assess each trader’s risk tolerance and provide
                            them signals that are appropriately managed.
                        </p>
                    </div>
                </div>

                <div className="forex-plans" aria-label="Forex service plans">
                    {plans.map((plan) => (
                        <article
                            className={`forex-plan${plan.featured ? " forex-plan--featured" : ""}`}
                            key={plan.name}
                        >
                            <header className="forex-plan-header">
                                <h2>{plan.name}</h2>
                                <p className="forex-account">
                                    Recommended account size - {plan.account}
                                </p>
                                <div className="forex-price-row">
                                    <p className="forex-price">
                                        <span className="forex-currency">$</span>
                                        {plan.price.replace("$", "")}
                                    </p>
                                    <span className="forex-billing">/{plan.billing}</span>
                                </div>
                            </header>

                            <div className="forex-plan-body">
                                <ul>
                                    {plan.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <a className="forex-cta" href="/exclusive-deals/">
                                    Get Started <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/*-------------------------------------------------- Second image------------------------------------ */}

            <section className="forex-overview">
                <div className="forex-container">

                    {/* TOP SECTION */}
                    <div className="forex-top">

                        <div className="forex-content">
                            <h2>Forex Overview</h2>

                            <p>
                                We prioritize our trader's needs with every trade
                                and maintain a balanced risk-reward ratio across
                                our trades, providing the best forex signals.
                                Our signals are carefully analyzed to cater to
                                clients operating in different time zones and
                                trading sessions using technical, fundamental,
                                and sentimental analysis.
                            </p>

                            <a href="#subscribe" className="forex-btn">
                                Subscribe Services <span>→</span>
                            </a>
                        </div>

                        {/* TOP RIGHT IMAGE */}
                        <div className="forex-visual forex-visual-top">
                            <img
                                src="../assets/right-recent-Transaction.webp"
                                alt="Recent forex transactions dashboard"
                            />
                        </div>

                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="forex-bottom">

                        {/* BOTTOM LEFT IMAGE */}
                        <div className="forex-visual forex-visual-bottom">
                            <img
                                src="../assets/left-img-forex.webp"
                                alt="Forex trading dashboard overview"
                            />
                        </div>

                        <div className="forex-content forex-bottom-content">
                            <h2>How to Start Trading</h2>

                            <p>
                                The cornerstones of successful trading are
                                discipline, trust, patience, and consistent
                                analysis. Our experienced team combines technical
                                expertise with market insights to help traders
                                understand capital and commodity markets and
                                make informed trading decisions.
                            </p>

                            <a href="#support" className="forex-btn">
                                Contact Support <span>→</span>
                            </a>
                        </div>

                    </div>

                </div>
            </section>


        </>
    );
}
