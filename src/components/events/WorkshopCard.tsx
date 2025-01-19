import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface WorkshopCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  style?: React.CSSProperties; // Added style prop
}

export const WorkshopCard = ({ title, description, icon, date, style }: WorkshopCardProps) => {
  return (
    <Card className="animate-fade-up" style={style}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-tech-gray">{description}</p>
        <Link 
          to={`/events/${title.toLowerCase().replace(/ /g, '_')}`}
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