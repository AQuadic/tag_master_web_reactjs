import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentStep: number;
  onPageChange: (page: number) => void;
  totalSteps: number;
}

const Pagination = ({
  currentStep,
  onPageChange,
  totalSteps,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentStep > 1) {
      onPageChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      onPageChange(currentStep + 1);
    }
  };

  const handleStepClick = (step: number) => {
    onPageChange(step);
  };

  // Calculate which steps to show (minimum 3 steps with sliding window)
  const getVisibleSteps = () => {
    if (totalSteps <= 3) {
      // If total steps is 3 or less, show all
      return Array.from({ length: totalSteps }, (_, i) => i + 1);
    }

    let startStep = currentStep - 1; // Start 1 step before current
    let endStep = currentStep + 1; // End 1 step after current

    // Adjust if we're at the beginning
    if (startStep < 1) {
      startStep = 1;
      endStep = 3;
    }

    // Adjust if we're at the end
    if (endStep > totalSteps) {
      endStep = totalSteps;
      startStep = totalSteps - 2;
    }

    const steps = [];
    for (let i = startStep; i <= endStep; i++) {
      steps.push(i);
    }

    return steps;
  };

  const visibleSteps = getVisibleSteps();
  return (
    <div className="flex items-center justify-center my-5 sm:my-8 gap-2">
      {/* Previous button - ChevronLeft in LTR, goes to previous page */}
      <button
        onClick={handleNext}
        disabled={currentStep === totalSteps}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rtl:order-3"
        aria-label="Previous page"
      >
        <ChevronRight size={20} className="rtl:rotate-180" />
      </button>

      {/* Page numbers */}
      <div className="flex gap-1 rtl:order-2">
        {visibleSteps.map((step) => (
          <button
            key={step}
            onClick={() => handleStepClick(step)}
            className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded transition-colors ${
              step === currentStep
                ? "bg-primary text-white border-2 border-primary"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label={`Go to page ${step}`}
            aria-current={step === currentStep ? "page" : undefined}
          >
            {step}
          </button>
        ))}
      </div>

      {/* Next button - ChevronRight in LTR, goes to next page */}
      <button
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rtl:order-1"
        aria-label="Next page"
      >
        <ChevronLeft size={20} className="rtl:rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
