"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlusIcon from "@/svgComponents/PlusIcon";
import { Separator } from "@/components/ui/separator";

export default function FaqAccordion({ faqs = [] }) {
  const [openItem, setOpenItem] = React.useState("item-0");

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="max-w-4xl w-full">
      <div>
        <Accordion
          type="single"
          value={openItem}
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`}>
              <div className="bg-neutral-0 rounded-t-md flex items-center justify-between">
                <AccordionTrigger
                  onClick={() => handleToggle(`item-${index}`)}
                  className="md:py-5 md:px-6 p-5 text-left font-semibold text-neutral-800 hover:text-brand-primary flex-1"
                >
                  {faq.question}
                </AccordionTrigger>
                <button
                  onClick={() => handleToggle(`item-${index}`)}
                  className="p-5 text-brand-primary focus:outline-none"
                >
                  <motion.div
                    animate={{ rotate: openItem === `item-${index}` ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <PlusIcon className="h-5 w-5" />
                  </motion.div>
                </button>
              </div>
              <AccordionContent className="md:px-6 md:pb-5 p-5 pt-0 text-neutral-600 bg-neutral-0 rounded-b-md">
                {openItem === `item-${index}` && (
                  <div className="px-5 -mx-5 mb-4">
                    <Separator className="bg-neutral-200" />
                  </div>
                )}
                <p className="text-body-lg">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
