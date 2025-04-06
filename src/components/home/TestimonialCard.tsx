
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  image = "/placeholder.svg", 
  rating = 5 
}: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        {/* Star Rating */}
        <div className="flex mb-4">
          {Array(5).fill(0).map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="italic text-gray-700 mb-6">"{quote}"</p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
