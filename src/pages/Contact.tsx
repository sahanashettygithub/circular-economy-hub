
import { useState } from "react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import MapComponent from "@/components/contact/MapComponent";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Support</h1>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-md">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 80 2345 6789</p>
                <p className="text-gray-600">Monday-Friday, 9am-5pm IST</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">support@wastetoworth.com</p>
                <p className="text-gray-600">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600">Available on our website</p>
                <p className="text-gray-600">24/7 support</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-secondary">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
              <MapComponent />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Support Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I reset my password?</h3>
                <p className="text-gray-600">
                  You can reset your password by clicking on the "Forgot Password" link on the login page.
                  You'll receive an email with instructions to create a new password.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">I can't find my donation listing. What should I do?</h3>
                <p className="text-gray-600">
                  Check your profile dashboard under "My Donations". If you still can't find it, 
                  it may have been removed due to our listing policies. Please contact our support team for assistance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I report a problem with a user?</h3>
                <p className="text-gray-600">
                  You can report a user by visiting their profile and clicking on the "Report" button. 
                  Alternatively, you can contact our support team directly with details about the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
