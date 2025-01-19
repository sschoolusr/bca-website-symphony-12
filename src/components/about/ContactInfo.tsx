import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactInfo = () => (
  <Card className="bg-gray-100 shadow-none border-t-4 border-orange-500">
    <CardHeader>
      <CardTitle>Contact Us</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            BCA Department,<br />
            College of Commerce, Arts & Science<br />
            Rajendra Nagar Terminal,<br />
            Patna-20
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+91-1234567890</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Office Hours</h3>
          <p className="text-gray-600">9:00 AM to 5:00 PM</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Email</h3>
          <a href="mailto:bca.department@college.edu" className="text-blue-600 hover:underline">
            bca.department@college.edu
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);