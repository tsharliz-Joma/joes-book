import * as React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "../ui/card";
import {Droplet, Coffee} from "lucide-react";

type ContentCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const equipmentList = {
  title: "Equipment setup",
  description:
    "Grinders, kettles, and espresso machines—checklists to dial-in your gear.",
  icon: <Coffee className="size-8 opacity-70" />,
};

const waterList = {
  title: "Water Matters",
  description:
    "Learn the basics of coffee water—hardness, alkalinity, and how to make simple mineral recipes at home.",
  icon: <Droplet className="size-8 text-muted-foreground" />,
};

const ContentCard = ({title, description, icon: Icon}: ContentCardProps) => {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        {Icon}
      </CardContent>
    </Card>
  );
};

const Equipment = ({...props}) => {
  return (
    <section {...props}>
      <div className="grid gap-4 md:grid-cols-2">
        <ContentCard {...waterList} />
        <ContentCard {...equipmentList} />
      </div>
    </section>
  );
};

export default Equipment;
