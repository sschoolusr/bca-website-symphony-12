import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FlagshipEventProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}

export const FlagshipEvent = ({ title, description, icon, date }: FlagshipEventProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-tech-gray">{description}</p>
        <Link 
          to={`/events/${title.toLowerCase().replace(/ /g, '_').replace(/'/g, '')}`}
          className="mt-4 w-full inline-block"
        >
          <Button className="w-full" variant="outline">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FlagshipEvent;