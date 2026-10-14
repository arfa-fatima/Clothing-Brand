export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pb-24">
      <section className="pt-16 pb-12 text-center px-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">Client Services</span>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-neutral-900"> Get in Touch</h1>
        <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
          For styling consultations, custom orders, or general inquiries, our team is at your disposal.</p>
      </section>




      <section className="w-[92%] max-w-6xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
   
          <div className="lg:col-span-5 bg-[#faf8f5] p-8 sm:p-10 rounded-2xl border border-neutral-100/80">
            <h2 className="text-xl font-serif text-neutral-900 mb-6">Studio & Concierge</h2>

            <div className="space-y-6 text-sm text-neutral-600 font-light">
              <div>
                <p className="font-medium text-neutral-900 uppercase tracking-wider text-xs mb-1"> General Inquiries</p>
                <p className="hover:text-black transition-colors">info@faahclothing.com</p>
                <p className="hover:text-black transition-colors">+92 300 1234567</p>
              </div>

              <div>
                <p className="font-medium text-neutral-900 uppercase tracking-wider text-xs mb-1">Orders & Returns</p>
                <p>care@faahclothing.com</p>
                <p>Mon - Sat, 10:00 AM - 7:00 PM PKT</p>
              </div>

              <div>
                <p className="font-medium text-neutral-900 uppercase tracking-wider text-xs mb-1"> Design Studio</p>
                <p>Pak Arab, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-200/60">
              <p className="text-xs text-neutral-500 font-light leading-relaxed">Looking for immediate updates on your package? Please include your order number in your message.</p>
            </div>
          </div>







            {/* ------Right section----- */}
          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-2">First Name</label>
                  <input type="text" placeholder="Sparrow"className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all"/>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-2">Last Name</label>
                  <input type="text" placeholder="Ouchhh"
                    className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all"/>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-2">Email Address</label>
                <input type="email"placeholder="name@example.com"
                  className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-2"> Subject</label>
                <input type="text"placeholder="Order Inquiry / Custom Sizing"
                  className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-2">Message </label>
                <textarea rows={5} placeholder="How can we assist you today?"
                  className="w-full px-4 py-3 text-sm bg-neutral-50/50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all resize-none"/>
              </div>

              <button type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-black text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-sm shadow-sm">Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}