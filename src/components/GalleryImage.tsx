import { Card, CardContent } from "./ui/card";

interface GalleryImageProps {
  item: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  };
}

const GalleryImage = ({ item }: GalleryImageProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryImage;