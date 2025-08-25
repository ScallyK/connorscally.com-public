import BackButton from './BackButton';
import Cats from './Cats';
import './assets/css/ScoreceryPrivacy.css';
import { motion } from "framer-motion";
import React, { JSX } from 'react';

export default function ScoreceryPrivacy(): JSX.Element {
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
                src="/Project-Bar-Outline.svg"
                alt="Background of the terms and conditions menu bar"
                className="tac-bar-background"
            />
            <div className="tac-bar-contents">
                <span className="tac-bar-text">scorecery privacy policy</span>
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
                src="/Glass-Pane.svg"
                alt="Glass pane effect for center content"
                className="tac-background"
            />
            <div className="toc-text">
                <p>
                    <strong>Last Updated:</strong> 05/28/2025
                </p>
                <hr />
                <Section title="Privacy Policy Overview">
                    <p>
                        This Privacy Policy applies to the Scorecery app (the "Application") for mobile devices created by
                        Connor Scally (the "Service Provider") and offered as a Free service. The Application is intended
                        for use "AS IS".
                    </p>
                </Section>
                <hr />
                <Section title="Information Collection and Use">
                    <p>
                        The Application does not collect or retain any personal information from users. Registration is not
                        required to use the Application, and no user data is gathered during usage. The application collects data like score information, but this data is not stored or transmitted to any server. The Application does not use cookies or similar tracking technologies. All data is stored locally on the user's device and is not shared with any third parties. Apple may provide certain anonymized usage data to the Service Provider, but this data does not include any personally identifiable information.
                    </p>
                </Section>
                <hr />
                <Section title="Location Information">
                    <p>
                        The Application does not collect precise real-time location information from your mobile device.
                    </p>
                </Section>
                <hr />
                <Section title="Third-Party Access">
                    <p>
                        Since no user data is collected, no information is shared with or accessed by third parties.
                    </p>
                </Section>
                <hr />
                <Section title="Opt-Out Rights">
                    <p>
                        Users can stop all information collection by uninstalling the Application. This can be done through
                        standard uninstall procedures provided by your mobile device or app marketplace.
                    </p>
                </Section>
                <hr />
                <Section title="Children's Privacy">
                    <p>
                        The Application does not knowingly collect personal information from children under the age of 13.
                        The Service Provider encourages parents and guardians to monitor their children's use of digital
                        services and to help enforce this Privacy Policy by instructing children to never submit personal
                        information without permission.
                    </p>
                    <p>
                        If you believe a child has provided personal information, please contact the Service Provider at{' '}
                        <a href="mailto:me@connorscally.com">me@connorscally.com</a> to initiate necessary action.
                    </p>
                    <p>
                        You must be at least 16 years old to consent to processing of personal data in your country (or have
                        a parent/guardian consent on your behalf where applicable).
                    </p>
                </Section>
                <hr />
                <Section title="Security">
                    <p>
                        The Service Provider takes data security seriously. However, since no user data is collected, there
                        is no risk of unauthorized access to personal information.
                    </p>
                </Section>
                <hr />
                <Section title="Policy Changes">
                    <p>
                        This Privacy Policy may be updated from time to time. Users are encouraged to review this page
                        periodically for any changes. Continued use of the Application signifies acceptance of any changes
                        to the Privacy Policy.
                    </p>
                </Section>
                <hr />
                <Section title="Consent">
                    <p>
                        By using the Application, you consent to the practices outlined in this Privacy Policy, as updated
                        from time to time.
                    </p>
                </Section>
                <hr />
                <Section title="Contact Us">
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:me@connorscally.com">me@connorscally.com</a>.
                    </p>
                </Section>
                <hr />
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
