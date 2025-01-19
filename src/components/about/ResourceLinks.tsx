import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceLinksProps {
  selectedResource: string;
  onResourceSelect: (resource: string) => void;
}

export const ResourceLinks = ({ selectedResource, onResourceSelect }: ResourceLinksProps) => {
  const resources = [
    { id: 'history', label: 'History' },
    { id: 'lifeAboutTown', label: 'Life About Town' },
    { id: 'directions', label: 'Directions' },
    { id: 'facilities', label: 'Computing Facilities' },
    { id: 'faq', label: 'Department FAQ' }
  ];

  return (
    <Card className="bg-gray-100 shadow-none border-t-4 border-orange-500">
      <CardHeader>
        <CardTitle>Additional Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-3">
          {resources.map((resource) => (
            <Button
              key={resource.id}
              variant={selectedResource === resource.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onResourceSelect(resource.id)}
            >
              {resource.label}
            </Button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};