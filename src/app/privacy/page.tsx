export default function PrivacyPolicy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto flex-1">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Policy</span></h1>
      
      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email address, phone number, postal address, profile picture, payment method, financial and credit card information, and other information you choose to provide.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide, maintain, and improve our Services.</li>
            <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
            <li>Respond to your comments, questions, and requests and provide customer service.</li>
            <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by AkalloverServices and others.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:akshay@akalloverservice.online" className="text-purple-400 hover:underline">akshay@akalloverservice.online</a></p>
        </section>
      </div>
    </div>
  );
}
