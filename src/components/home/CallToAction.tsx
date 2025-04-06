
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  background?: 'primary' | 'light' | 'white';
}

const CallToAction = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = 'primary'
}: CallToActionProps) => {
  const bgClasses = {
    primary: 'bg-eco-primary',
    light: 'bg-eco-light',
    white: 'bg-white'
  };
  
  const textClasses = {
    primary: 'text-white',
    light: 'text-gray-800',
    white: 'text-gray-800'
  };
  
  const primaryBtnClasses = {
    primary: 'bg-white text-eco-primary hover:bg-gray-100',
    light: 'bg-eco-primary text-white hover:bg-eco-secondary',
    white: 'bg-eco-primary text-white hover:bg-eco-secondary'
  };
  
  const secondaryBtnClasses = {
    primary: 'border-white text-white hover:bg-white/10',
    light: 'border-eco-primary text-eco-primary hover:bg-eco-primary/10',
    white: 'border-eco-primary text-eco-primary hover:bg-eco-primary/10'
  };
  
  return (
    <section className={`py-16 ${bgClasses[background]}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClasses[background]}`}>{title}</h2>
          <p className={`text-lg mb-8 ${background === 'primary' ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className={`px-8 py-6 text-lg ${primaryBtnClasses[background]}`} asChild>
              <Link to={primaryCta.link}>{primaryCta.text}</Link>
            </Button>
            
            {secondaryCta && (
              <Button variant="outline" className={`px-8 py-6 text-lg ${secondaryBtnClasses[background]}`} asChild>
                <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
