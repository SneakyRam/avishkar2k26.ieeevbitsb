import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to our privacy policy.");
      return;
    }
    if (!formRef.current) return;

    setStatus("loading");
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
      formRef.current,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
    )
    .then(() => {
      setStatus("success");
      formRef.current?.reset();
      setAgreed(false);
      setTimeout(() => setStatus("idle"), 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus("error");
    });
  };

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>

        <div className="max-w-4xl mx-auto bg-[#CBD5F5] rounded-3xl p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Info */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <p className="text-sm text-muted-foreground text-left">
              Email, call, or complete the form to resolve queries about Avishkar
            </p>
            <p className="text-left">
              <a href="mailto:avishkar2k26.ieeevbitsb@gmail.com" className="text-primary text-sm underline">avishkar2k26.ieeevbitsb@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground text-left">Sai Krishna - 9032348479</p>
            <p className="text-sm text-muted-foreground text-left">Gokul - 7207232672</p>

            <div className="pt-4 space-y-3">
              <div>
                <h3 className="font-bold text-sm text-foreground text-left">Help Desk Support</h3>
                <p className="text-xs text-muted-foreground text-left mt-1">Our support team is available from 3:30 PM - 4:20 PM to address any concerns or queries at Pratham Block</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground text-left">Event Inquiries</h3>
                <p className="text-xs text-muted-foreground text-left mt-1">For Event-related questions or press inquiries, please contact us at given numbers</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground text-left">Feedback and Suggestions</h3>
                <p className="text-xs text-muted-foreground text-left mt-1">We value your feedback and are continuously working to improvise our work.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold font-display mb-6 text-foreground">You can reach us anytime</h2>
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">First name</label>
                  <Input name="firstName" placeholder="First name" required />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Last name</label>
                  <Input name="lastName" placeholder="Last name" />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                <Input name="email" type="email" placeholder="Your email" required />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Phone number</label>
                <Input name="phone" placeholder="Phone number" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Message</label>
                <Textarea name="message" placeholder="How can we help?" rows={4} required />
              </div>
              <Button className="w-full" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && <p className="text-green-500 text-sm text-center">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>}
              <div className="flex items-center gap-2">
                <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} required />
                <span className="text-xs text-muted-foreground">You agree to our friendly privacy policy.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
