import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from("contact_submissions")
      .insert([formData]);

    if (error) {
      setError("Failed to submit. Please try again later.");
    } else {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          Have questions or want to learn more? Reach out to us and we&apos;ll get
          back to you soon.
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-100 text-center">
            <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
            <p>Thank you for reaching out. We will get back to you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-semibold underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-800 transition duration-200 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
