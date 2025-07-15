"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AnimatedWrapperProps extends MotionProps {
  children: React.ReactNode;
  as?: React.ElementType;
  animationKey?: string | number;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  as: Tag = "div",
  animationKey,
  className,
  ...motionProps
}: AnimatedWrapperProps) {
  return React.createElement(
    motion(Tag),
    { key: animationKey, className, ...motionProps },
    children
  );
}