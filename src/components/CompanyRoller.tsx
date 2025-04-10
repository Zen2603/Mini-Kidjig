import React from "react";
import Image from "next/image";

type Company = {
  name: string;
  logo: string;
};

const companies: Company[] = [
  {
    name: "Mistral",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Mistral_AI_logo.png",
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Anthropic_logo.svg",
  },
  {
    name: "Google DeepMind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/DeepMind_logo.png",
  },
  {
    name: "DeepSeek",
    logo: "https://seeklogo.com/images/D/deepseek-logo-FBBF1A3296-seeklogo.com.png",
  },
  {
    name: "Open",
    logo: "https://www.open.com/assets/images/logo.png", // Placeholder
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Meta_Platforms_Inc._logo.svg",
  },
];

const CompanyRoller: React.FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <div className="flex space-x-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="min-w-[180px] flex flex-col items-center justify-center bg-white border rounded-2xl shadow-md p-4"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={64}
              height={64}
              className="h-16 object-contain mb-2"
            />
            <div className="text-center font-semibold text-base">
              {company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyRoller;
