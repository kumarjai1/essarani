import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "jablu",
  description: "Small Business, Big Benefits",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "distribution",
    "wholesale",
    "convenient stores",
    "gas stations",
    "retailers",
    "delivery",
    "jablu",
    "beverages",
    "chips",
  ],
  links: {
    email: "hello@essarani.com",
    // twitter: "https://twitter.com/magicuidesign",
    // discord: "https://discord.gg/87p2vpsat5",
    // github: "https://github.com/magicuidesign/magicui",
    // instagram: "https://instagram.com/magicuidesign/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Best Deals Delivered to Your Door",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description: "Automate repetitive tasks and save time.",
          },
          {
            href: "#",
            title: "Workflow Optimization",
            description: "Optimize your processes with AI-driven insights.",
          },
          {
            href: "#",
            title: "Intelligent Scheduling",
            description: "AI-powered scheduling for maximum efficiency.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Tailored automation solutions for growing companies.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Scalable AI automation for large organizations.",
          },
          {
            title: "Developers",
            href: "#",
            description: "API access and integration tools for developers.",
          },
          {
            title: "Healthcare",
            href: "#",
            description: "Specialized automation for healthcare workflows.",
          },
          {
            title: "Finance",
            href: "#",
            description: "AI-driven process automation for financial services.",
          },
          {
            title: "Education",
            href: "#",
            description:
              "Streamline administrative tasks in educational institutions.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    // {
    //   name: "BASIC",
    //   href: "#",
    //   price: "$19",
    //   period: "month",
    //   yearlyPrice: "$16",
    //   features: [
    //     "1 User",
    //     "5GB Storage",
    //     "Basic Support",
    //     "Limited API Access",
    //     "Standard Analytics",
    //   ],
    //   description: "Perfect for individuals and small projects",
    //   buttonText: "Subscribe",
    //   isPopular: false,
    // },
    {
      name: "BASIC",
      href: "#",
      price: "$25",
      period: "month",
      yearlyPrice: "$22",
      features: [
        "Lower price on your essential services (e.g. insurance, internet, utilities)",
        "Exclusive discounts on groceries, beverages and supplies",
        "Delivery and pickup services",
        "Vetted tech professionals",
        "Dedicated support team",
        "Community access",
      ],
      description: "Ideal for small businesses with one store",
      buttonText: "Subscribe",
      isPopular: true,
      isAvailable: true,
    },
    {
      name: "PRO",
      href: "#",
      price: "$80",
      period: "month",
      yearlyPrice: "$68",
      features: [
        "Everything in BASIC plus",
        "Inventory management",
        "Community events and meetups",
        "Exclusive new products access",
        "Broker sale and purchase of new busineseses",
        "AI-Powered insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
      IsAvailable: false,
    },
  ],
  faqs: [
    {
      question: "What is Jablu?",
      answer: (
        <span>
          Jablu is a membership program that provides exlusive discounts and
          services to small businesses via our exclusive network. It is a great
          way to save money on essentials to run a store and focus on growing
          your business without the hassle of maintaing all relationships
          yourself.
        </span>
      ),
    },
    {
      question: "How can I get started with Jablu?",
      answer: (
        <span>
          You can get started with Jablu by submitting your information on our
          form below.
        </span>
      ),
    },
    {
      question: "What kind of products does Jablu offer?",
      answer: (
        <span>
          Jablu currently offers discounts on mexican chips and snacks,
          beverages, smoking products, and more. We plan to expand our product
          offerings via our distributors to include everything you need to run a
          store, including liquor.
        </span>
      ),
    },
    {
      question:
        "Is Jablu suitable for stores that already has distributor relationships?",
      answer: (
        <span>
          Yes, our program guarantees better rates than your current vendor
          prices and passes our exclusive manafacturer prices to you without any
          disruption to your existing business.
        </span>
      ),
    },
    {
      question: "What kind of support does Jablu provide?",
      answer: (
        <span>
          Beyond our current offerings, we help you obtain dedicated tech
          support and get you better prices for any prodcuts or services you are
          considering.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
