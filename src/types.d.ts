declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.jpg?url" {
  const src: string;
  export default src;
}

declare module "*.jpeg?url" {
  const src: string;
  export default src;
}

declare module "*.png?url" {
  const src: string;
  export default src;
}

export type SinglePosition = Partial<{
  top: number | string;
  right: number | string;
  bottom: number | string;
  left: number | string;
}>;

export type ResponsivePosition = {
  tablet?: SinglePosition;
  desktop?: SinglePosition;
};

export type FaqCardProps = {
  question: string;
  answer: string[];
  position?: ResponsivePosition;
  isOpen: boolean;
  showAnswer: string;
  hideAnswer: string;
  onToggle: () => void;
};

export type FeedbackCardProps = {
  name: string;
  role: string;
  text: string;
};

export type PortfolioProp = { title: string; videoURL: string };

export type ServiceItemProp = { videoURL: string; title: string; list: string[] };

export type WhyListProp = { title: string; text: string };
