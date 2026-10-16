
import React from "react";
import "./Crypto-Section.css";
import ring from "../assets/ring.webp";
import transactionImage from "../assets/right-recent-Transaction.webp";

const cryptoFeatures = [
    "2-3 Elite signals daily",
    "2500 pips monthly",
    "RR 1: 2/3",
    "Scalpings, Day trades, swing trades",
    "SMC Sniper Signals",
    "Live chart analysis & market updates with newsletter/reports",
    "Real-time global news stream and economic data",
    "Dedicated Research Analyst",
];

const CryptoSection = () => {
    return (
        <>
            <section className="crypto-section">
                {/* Heading and Ring Image */}
                <div className="crypto-heading">
                    <img
                        src={ring}
                        alt=""
                        aria-hidden="true"
                        className="crypto-ring-image"
                    />

                    <h2>Crypto Services</h2>
                </div>

                {/* Premium Services Card */}
                <div className="crypto-container">
                    <div className="crypto-card">
                        <div className="crypto-card-header">
                            <h3>PREMIUM SERVICES</h3>

                            <p>Recommended account size - $5000</p>

                            <div className="crypto-price">
                                <strong>$5099</strong>
                                <span>
                                    /Annually or $2699 Half yearly or $1349 Quarterly
                                </span>
                            </div>
                        </div>

                        <div className="crypto-card-body">
                            <ul className="crypto-features">
                                {cryptoFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            <a href="#contact" className="crypto-button">
                                Get Started <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------------------------------- Second Page------------------------------- */}

            <section className="crypto-overview-section">
                <div className="crypto-overview-container">

                    {/* LEFT CONTENT */}
                    <div className="crypto-overview-content">
                        <h2>Crypto Overview</h2>

                        <p>
                            Cryptocurrency trading involves speculating on price
                            movements via a CFD trading account, or buying and
                            selling the underlying coins via an exchange. Here
                            you’ll find more information about cryptocurrency
                            trading, how it works and what moves the markets.
                        </p>

                        <a href="#subscribe" className="crypto-overview-btn">
                            Subscribe Services
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="crypto-overview-visual">
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

export default CryptoSection;
