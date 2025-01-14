import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="relative h-10 w-10 bg-[#032A2C] rounded-full flex items-center justify-center">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gradient ml-2">
                Faztro
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Affordable Delivery Partner in{" "}
              <span className="text-gradient">Puducherry</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get anything delivered from anywhere within Puducherry at the most
              competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="gradient-primary px-8 py-4 rounded-xl shadow-lg">
                <div className="text-white text-center">
                  <span className="text-lg font-semibold block mb-1">
                    Launching Soon
                  </span>
                  <span className="text-2xl font-bold">February 14</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#00AFA1]/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Why Choose Faztro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Most Affordable",
                description:
                  "Lower prices than any other delivery service in Puducherry",
                icon: "💰",
              },
              {
                title: "Quick Delivery",
                description: "Fast and reliable delivery across Puducherry",
                icon: "⚡",
              },
              {
                title: "Multiple Pickups",
                description:
                  "Get items from multiple locations in a single delivery",
                icon: "📦",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#00AFA1]/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#032A2C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Place Order",
                description: "Tell us what you need and from where",
              },
              {
                step: "2",
                title: "Confirm Details",
                description: "We'll confirm the pickup and delivery locations",
              },
              {
                step: "3",
                title: "Track Delivery",
                description: "Real-time updates on your delivery status",
              },
              {
                step: "4",
                title: "Receive Items",
                description: "Get your items delivered to your doorstep",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#032A2C]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Be Among the First to Experience Faztro
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Coming soon to make deliveries affordable and accessible in
            Puducherry!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032A2C] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <span className="text-2xl font-bold text-[#00AFA1]">Faztro</span>
            <p className="mt-4 max-w-md">
              Your trusted delivery partner in Puducherry. Making deliveries
              affordable and accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@faztro.com</li>
                <li>+91 XXXXXXXXXX</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
