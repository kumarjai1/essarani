import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  DollarSignIcon,
  LockKeyholeIcon,
  Shield,
  TrendingUpIcon,
  UnplugIcon,
  Zap,
} from "lucide-react";

const problems = [
  {
    title: "High Operational Costs",
    description:
      "Small businesses struggle with high fixed expenses, including insurance premiums, internet services, and utilities, which cut into profitability",
    icon: DollarSignIcon,
  },
  {
    title: "Limited Access to Bulk Pricing",
    description:
      "Unlike large corporations, small retailers such as gas stations and convenience stores lack access to wholesale discounts on groceries, drinks, food, and other resale items",

    icon: LockKeyholeIcon,
  },
  {
    title: "Lack of Community and Support Networks",
    description:
      "Many small businesses operate in isolation, missing opportunities to collaborate, share insights, and leverage partnerships to drive growth and innovation",
    icon: UnplugIcon,
    // icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Businesses Struggle to Cut Costs and Grow"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
