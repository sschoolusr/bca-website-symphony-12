import { LucideIcon } from "lucide-react";

interface ClubActivityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ClubActivity = ({ icon, title, description }: ClubActivityProps) => {
  return (
    <div className="p-4">
      <div className="h-8 w-8 mx-auto mb-4 text-tech-purple">
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-tech-gray">{description}</p>
    </div>
  );
};