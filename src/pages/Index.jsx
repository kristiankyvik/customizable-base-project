import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function Index() {
  const [count, setCount] = useState(0);

  const capabilities = [
    { title: "Talk to PDF", description: "Interact with PDF documents using natural language." },
    { title: "Scrape a site", description: "Extract data from websites efficiently." },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {capabilities.map((capability, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{capability.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{capability.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Index;