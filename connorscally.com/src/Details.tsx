import BackButton from './BackButton';
import Cats from './Cats';
import tacBarBackground from './assets/images/Project-Bar-Outline.svg';
import tacBackground from './assets/images/Glass-Pane.svg';
import './assets/css/Details.css';
import { motion } from "framer-motion";
import React, { JSX } from 'react';

export default function Details(): JSX.Element {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="tac-container">
                <BackButton />
                <TermsAndConditionsBar />
                <CatsContainer />
                <TermsAndConditionsContent />
            </div>
        </motion.div>
    );
}

function TermsAndConditionsBar(): JSX.Element {
    return (
        <div className="tac-bar-container">
            <img
                src={tacBarBackground}
                alt="Background of the terms and conditions menu bar"
                className="tac-bar-background"
            />
            <div className="tac-bar-contents">
                <span className="tac-bar-text">terms and conditions</span>
            </div>
        </div>
    );
}

function CatsContainer(): JSX.Element {
    return (
        <div className="cats-container-details">
            <Cats />
        </div>
    );
}

function TermsAndConditionsContent(): JSX.Element {
    return (
        <div className="tac-contents">
            <img
                src={tacBackground}
                alt="Glass pane effect for center content"
                className="tac-background"
            />
            <div className="toc-text">
                <p>
                    <strong>Last Updated:</strong> [01/26/2024]
                </p>
                <p>
                    Please read these <strong>Terms of Use</strong> ("Terms") carefully before using{' '}
                    <strong>connorscally.com</strong> (the "Service") operated by Connor K. Scally ("us", "we", or
                    "our").
                </p>

                <Section title="Acceptance of Terms">
                    <p>
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with
                        any part of the terms, then you may not access the Service.
                    </p>
                </Section>

                <Section title="Distribution of Materials">
                    <p>
                        You may not redistribute materials (code, images, etc.) from connorscally.com for personal or
                        commercial use. Moreover, you may not modify, reproduce, distribute, or otherwise use any
                        material from the Service for commercial purposes without our prior written consent.
                    </p>
                </Section>

                <Section title="Use of Service">
                    <ul>
                        <li>
                            You agree to use the Service only for lawful purposes and in a way that does not infringe
                            on the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service.
                        </li>
                        <li>
                            You must not use the Service for any malicious, unlawful, or prohibited activity, including,
                            but not limited to:
                            <ul>
                                <li>Disrupting service of others (via DDoS or similar)</li>
                                <li>Attempting to gain access to connorscally.com without prior written consent</li>
                                <li>Injecting worms, viruses, malware, spyware, or malicious code</li>
                                <li>Impersonation of Connor K. Scally or others noted on the site</li>
                                <li>Committing crimes that violate United States federal law</li>
                                <li>Committing crimes that violate laws in any of the States within the United States</li>
                                <li>Committing any crimes that violate any existing laws in your country</li>
                            </ul>
                        </li>
                        <li>
                            By the (mis)use of any services offered/made available by Connor K. Scally, you agree to
                            hold us harmless from and against any and all claims, costs and expenses, and/or damages.
                        </li>
                    </ul>
                </Section>

                <Section title="Limitation of Liability">
                    <ul>
                        <li>
                            The Service is provided on an "as is" and "as available" basis. We do not warrant that the
                            Service will be uninterrupted, secure, or error-free.
                        </li>
                        <li>
                            In no event shall Connor K. Scally be liable for any indirect, incidental, special,
                            consequential, or punitive damages, including but not limited to lost profits, arising out
                            of or in connection with your use of the Service.
                        </li>
                        <li>
                            You agree to defend, indemnify, and hold Connor K. Scally and his affiliates harmless from
                            and against any and all damages, claims, and expenses, including attorneys' fees, arising
                            from or related to the (mis)use of our website or any services offered by us.
                        </li>
                        <li>Connor K. Scally shall not be liable for any content posted on the Service by users or third parties.</li>
                    </ul>
                </Section>

                <Section title="Changes to Terms">
                    <p>
                        We reserve the right to update or change these Terms at any time. Your continued use of the
                        Service after we post any modifications to the Terms on this page will constitute your
                        acknowledgment of the modifications and your consent to abide and be bound by the modified
                        Terms.
                    </p>
                </Section>

                <Section title="Governing Law">
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of The United States of
                        America, without regard to its conflict of law provisions.
                    </p>
                </Section>

                <Section title="Contact Us">
                    <p>
                        If you have any questions about these Terms, please contact us at{' '}
                        <a href="mailto:me@connorscally.com">me@connorscally.com</a>. Thank you for using
                        connorscally.com!
                    </p>
                </Section>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }): JSX.Element {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
}
