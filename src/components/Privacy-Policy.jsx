import React from 'react'

function PrivacyPolicy() {
    return (
        <div className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20 mt-10">
            <div className="max-w-4xl mx-auto space-y-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <p className="text-gray-600 leading-relaxed">
                    At <strong>GiftinGuru</strong>, we are committed to safeguarding your privacy and ensuring that your personal
                    information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect,
                    use, disclose, and protect your information when you access our website, interact with our services,
                    or make a purchase. By using our platform, you agree to the practices described in this policy.
                </p>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may collect and process various types of personal information, including but not limited to your
                        full name, contact number, email address, billing and shipping address, and payment-related details.
                        Additionally, we may automatically collect certain technical information such as IP address,
                        browser type, device information, and browsing behavior through cookies and similar technologies
                        to enhance user experience and improve our services.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The information we collect is used for legitimate business purposes, including processing and
                        fulfilling your orders, managing transactions, providing customer support, improving our website
                        functionality, and personalizing your shopping experience. We may also use your contact details
                        to send important updates, promotional offers, or service-related notifications, subject to your
                        preferences and applicable laws.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">3. Sharing and Disclosure of Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We do not sell, rent, or trade your personal information to third parties. However, we may share
                        your data with trusted third-party service providers, including logistics partners, payment
                        gateways, and technical service providers, strictly for the purpose of delivering our services.
                        These parties are obligated to maintain the confidentiality and security of your information.
                        We may also disclose information if required by law or to protect our legal rights.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal
                        data against unauthorized access, alteration, disclosure, or destruction. While we strive to use
                        commercially acceptable means to safeguard your information, please note that no method of
                        transmission over the internet or electronic storage is completely secure, and we cannot guarantee
                        absolute security.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our website uses cookies and similar tracking technologies to enhance your browsing experience,
                        analyze website traffic, and understand user behavior. Cookies help us remember your preferences
                        and improve site performance. You have the option to disable cookies through your browser settings;
                        however, this may affect certain functionalities of the website.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or your personal
                        data, you may contact us at:
                        <br />
                        <strong>Email:</strong> Giftinguru@gmail.com
                    </p>
                </div>

            </div>
        </div>
    )
}

export default PrivacyPolicy