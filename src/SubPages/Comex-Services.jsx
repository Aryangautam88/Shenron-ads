
import React from "react";
import "./Comex-Services.css";
import ring from "../assets/ring.webp";
import transactionImage from "../assets/right-recent-Transaction.webp";

const comexPlans = [
    {
        name: "BASIC SERVICES",
        account: "recommended account size $1000",
        price: "$3399",
        billing: "/Annually or $999 Quarterly",
        premium: false,
        features: [
            "2-3 Elite signals daily",
            "1500 pips monthly",
            "RR 1: 1/1.5",
            "Scalpings, Day trades",
            "Live chart analysis & market updates with newsletter/reports",
        ],
    },
    {
        name: "PREMIUM SERVICES",
        account: "Recommended account size - $5000",
        price: "$9999",
        billing: "/Annually or $2199 Quarterly",
        premium: true,
        features: [
            "2-3 Elite signals daily",
            "2500 pips monthly",
            "RR 1: 2/3",
            "Scalpings, Day trades, swing trades",
            "SMC Sniper Signals",
            "Live chart analysis & market updates with newsletter/reports",
            "Real-time global news stream and economic data",
            "Dedicated Research Analyst",
        ],
    },
];

const ComexServices = () => {
    return (
        <>
            <section className="comex-services">
                {/* Heading with ring image */}
                <div className="comex-heading">
                    <img
                        src={ring}
                        alt=""
                        aria-hidden="true"
                        className="comex-ring"
                    />
                    <h2>Comex Services</h2>
                </div>

                {/* Pricing cards */}
                <div className="comex-plans">
                    {comexPlans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`comex-card ${plan.premium ? "comex-card-premium" : "comex-card-basic"
                                }`}
                        >
                            <div className="comex-card-header">
                                <h3>{plan.name}</h3>
                                <p className="comex-account">{plan.account}</p>

                                <div className="comex-price">
                                    <strong>{plan.price}</strong>
                                    <span>{plan.billing}</span>
                                </div>
                            </div>

                            <div className="comex-card-body">
                                <ul className="comex-feature-list">
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                <a href="#contact" className="comex-button">
                                    Get Started
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/*----------------------------------------------- Second Page ------------------------------------------*/}


            <section className="comex-overview-section">
                <div className="comex-overview-container">

                    {/* LEFT CONTENT */}
                    <div className="comex-overview-content">
                        <h2>Crypto Overview</h2>

                        <p>
                            Cryptocurrency trading involves speculating on price
                            movements via a CFD trading account, or buying and
                            selling the underlying coins via an exchange. Here
                            you’ll find more information about cryptocurrency
                            trading, how it works and what moves the markets.
                        </p>

                        <a href="#subscribe" className="comex-overview-btn">
                            Subscribe Services
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="comex-overview-visual">
                        <img
                            src={transactionImage}
                            alt="Recent transaction and crypto trading overview dashboard"
                        />
                    </div>

                </div>
            </section>


        </>
    );
};

export default ComexServices;
