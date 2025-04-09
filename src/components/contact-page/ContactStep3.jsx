import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactStep3 = ({ onSubmit }) => {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [intake, setIntake] = useState("");
  const [examType, setExamType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinations = [
    { id: "uk", label: "UK" },
    { id: "ireland", label: "Ireland" },
    { id: "usa", label: "USA" },
    { id: "germany", label: "Germany" },
    { id: "canada", label: "Canada" },
    { id: "australia", label: "Australia" },
    { id: "newZealand", label: "New Zealand" },
    { id: "others", label: "Others" },
  ];

  const intakeOptions = [
    { id: "2025", label: "2025" },
    { id: "2026", label: "2026" },
    { id: "2027+", label: "2027 & Later" },
    { id: "notDecided", label: "Not Decided" },
  ];

  const examOptions = [
    { id: "ielts", label: "IELTS" },
    { id: "gmat", label: "GMAT" },
    { id: "gre", label: "GRE" },
    { id: "toefl", label: "TOEFL" },
    { id: "pte", label: "PTE" },
    { id: "duolingo", label: "Duo Lingo" },
    { id: "none", label: "None" },
  ];

  const toggleDestination = (id) => {
    if (selectedDestinations.includes(id)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== id));
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      onSubmit({
        destinations: selectedDestinations,
        intake,
        examType,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-neutral-700 text-body-lg font-medium">
            Choose your target destination{" "}
            <span className="text-body-lg text-neutral-500">
              (You can choose multiple)
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {destinations.slice(0, 5).map((destination) => (
              <button
                key={destination.id}
                className={`px-4 py-2 rounded-[6px] border text-neutral-900 ${
                  selectedDestinations.includes(destination.id)
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-neutral-0  border-neutral-200"
                }`}
                onClick={() => toggleDestination(destination.id)}
                type="button"
              >
                {destination.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {destinations.slice(5).map((destination) => (
              <button
                key={destination.id}
                className={`px-4 py-2 rounded-[6px] border text-neutral-900 ${
                  selectedDestinations.includes(destination.id)
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-neutral-0  border-neutral-200"
                }`}
                onClick={() => toggleDestination(destination.id)}
                type="button"
              >
                {destination.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-neutral-700 text-body-lg font-medium">
            What is your preferred intake?
          </label>
          <div className="flex flex-wrap gap-2">
            {intakeOptions.map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-[6px] border text-neutral-900 ${
                  intake === option.id
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-neutral-0  border-neutral-200"
                }`}
                onClick={() => setIntake(option.id)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-neutral-700 text-body-lg font-medium">
            Which admission test have you taken or are planning to take?
          </label>
          <div className="flex flex-wrap gap-2">
            {examOptions.slice(0, 6).map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-[6px] border text-neutral-900 ${
                  examType === option.id
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-neutral-0  border-neutral-200"
                }`}
                onClick={() => setExamType(option.id)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {examOptions.slice(6).map((option) => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-[6px] border text-neutral-900 ${
                  examType === option.id
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-neutral-0  border-neutral-200"
                }`}
                onClick={() => setExamType(option.id)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        className="w-full"
        onClick={handleSubmit}
        disabled={
          isSubmitting ||
          selectedDestinations.length === 0 ||
          !intake ||
          !examType
        }
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
};

export default ContactStep3;
