import React from 'react'

function TermsConditions() {
    return (
        <div className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20 mt-10">
            <div className="max-w-4xl mx-auto space-y-8">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Terms & Conditions
                </h1>

                <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <p className="text-gray-600 leading-relaxed">
                    Welcome to <strong>GiftinGuru</strong>. By accessing, browsing, or using our website and services,
                    you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                    These terms govern your use of our platform, including all purchases, services, and interactions
                    carried out through our website.
                </p>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">1. Use of Website</h2>
                    <p className="text-gray-600 leading-relaxed">
                        You agree to use this website solely for lawful purposes and in a manner that does not violate
                        any applicable laws or regulations. You must not misuse the website, attempt unauthorized access,
                        or engage in any activity that may harm, disrupt, or interfere with the functionality,
                        security, or accessibility of the platform or its users.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">2. Product Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We strive to ensure that all product descriptions, images, pricing, and availability details
                        are accurate and up to date. However, minor variations, typographical errors, or inaccuracies
                        may occur. We reserve the right to correct any such errors, update information, or cancel orders
                        if any information is found to be incorrect, without prior notice.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
                    <p className="text-gray-600 leading-relaxed">
                        All orders placed through our website are subject to acceptance and availability. We reserve
                        the right to refuse or cancel any order at our sole discretion. Payments must be completed
                        successfully before an order is processed. In case of payment failure or suspicious activity,
                        the order may be declined or put on hold for verification.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">4. Shipping & Delivery</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Delivery timelines provided on our platform are estimates and may vary depending on location,
                        logistics, and unforeseen circumstances. While we make every effort to ensure timely delivery,
                        we shall not be held liable for delays caused by third-party courier services, natural events,
                        or other factors beyond our control.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">5. Exchange, Returns & Refund Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At <strong>GiftinGuru</strong>, we follow a strict policy regarding returns, refunds, and exchanges.
                        We do not accept returns or provide refunds under any circumstances once an order has been confirmed
                        and delivered.
                        <br /><br />
                        However, we do offer a limited exchange option only in specific cases where the product received is
                        damaged, defective, or incorrect at the time of delivery. Any request for exchange must be raised
                        within <strong>30 days (1 month)</strong> from the date of delivery.
                        <br /><br />
                        To be eligible for an exchange, the item must be unused, in its original condition, and returned
                        with all original packaging and proof of purchase. GiftinGuru reserves the right to inspect the
                        product before approving any exchange request.
                        <br /><br />
                        Once approved, the product will be exchanged with the same or similar item based on availability.
                        Under no circumstances will any monetary refund or return be processed.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
                    <p className="text-gray-600 leading-relaxed">
                        All content on this website, including but not limited to text, images, graphics, logos,
                        and design elements, is the exclusive property of GiftinGuru and is protected by applicable
                        intellectual property laws. Unauthorized use, reproduction, or distribution of any content
                        is strictly prohibited.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
                    <p className="text-gray-600 leading-relaxed">
                        GiftinGuru shall not be held liable for any direct, indirect, incidental, or consequential
                        damages arising from the use or inability to use our website, services, or products. This
                        includes, but is not limited to, loss of data, revenue, or business opportunities.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We reserve the right to update, modify, or replace these Terms and Conditions at any time
                        without prior notice. It is your responsibility to review this page periodically. Continued
                        use of the website after any changes constitutes acceptance of those changes.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed">
                        These Terms and Conditions shall be governed and interpreted in accordance with the laws of India.
                        Any disputes arising out of or relating to these terms shall be subject to the exclusive
                        jurisdiction of the courts located in Uttar Pradesh.
                    </p>
                </div>

                {/* Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions, concerns, or inquiries regarding these Terms and Conditions,
                        please feel free to contact us at:
                        <br />
                        <strong>Email:</strong> Giftinguru@gmail.com
                    </p>
                </div>

            </div>
        </div>
    )
}

export default TermsConditions