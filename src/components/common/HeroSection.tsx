
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  overlay?: boolean;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  stats,
  overlay = true,
  children,
}: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {primaryCta && (
                <Button className="bg-eco-primary hover:bg-eco-secondary text-white px-8 py-6 text-lg" asChild>
                  <Link to={primaryCta.link}>{primaryCta.text}</Link>
                </Button>
              )}
              
              {secondaryCta && (
                <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
                  <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
          
          {children}
        </div>
        
        {stats && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
