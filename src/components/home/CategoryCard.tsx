
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  color: string;
}

const CategoryCard = ({ title, description, icon, link, color }: CategoryCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-t-4" style={{ borderTopColor: color }}>
      <CardContent className="pt-6">
        <div className="mb-4 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          <div className="text-2xl" style={{ color: color }}>{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" style={{ color: color, borderColor: color }} asChild>
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
