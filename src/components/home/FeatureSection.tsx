
import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: FeatureProps[];
  reversed?: boolean;
}

const FeatureSection = ({ title, subtitle, features, reversed = false }: FeatureSectionProps) => {
  return (
    <section className={`py-16 ${reversed ? 'bg-eco-light' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-4">
                <div className="text-eco-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
