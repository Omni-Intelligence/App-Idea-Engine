import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface ExplorerSectionProps {
  selectedIndustry: string;
  setSelectedIndustry: (value: string) => void;
  selectedFunction: string;
  setSelectedFunction: (value: string) => void;
  isGeneratingIdeas: boolean;
  generatedIdeas: string[];
  onGenerateIdeas: () => void;
  onGenerateOutlineFromTemplate: (template: string) => void;
  appTemplates: Record<string, string[]>;
}

export default function ExplorerSection({
  selectedIndustry,
  setSelectedIndustry,
  selectedFunction,
  setSelectedFunction,
  isGeneratingIdeas,
  generatedIdeas,
  onGenerateIdeas,
  onGenerateOutlineFromTemplate,
  appTemplates,
}: ExplorerSectionProps) {
  const hasSelection = Boolean(selectedIndustry || selectedFunction);
  const selectedIndustryTemplates = selectedIndustry
    ? appTemplates[selectedIndustry as keyof typeof appTemplates]
    : undefined;

  return (
    <section id="explorer" className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Explore by industry and function</h2>
          <p className="mt-3 text-muted-foreground">Get tailored ideas and templates for your context.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Select Industry</label>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an industry" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(appTemplates).map((industry) => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Select Business Function</label>
              <Select value={selectedFunction} onValueChange={setSelectedFunction}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a function" />
                </SelectTrigger>
                <SelectContent>
                  {["Sales","Marketing","Human Resources","Operations","Customer Service","Finance","IT","Research & Development"].map((func) => (
                    <SelectItem key={func} value={func}>{func}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {hasSelection && (
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-primary">Generate Custom Ideas</h3>
                <Button
                  size="sm"
                  onClick={onGenerateIdeas}
                  disabled={isGeneratingIdeas || !selectedIndustry || !selectedFunction}
                >
                  {isGeneratingIdeas ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating...</span>
                    </div>
                  ) : (
                    "Generate Ideas"
                  )}
                </Button>
              </div>

              {isGeneratingIdeas ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
                </div>
              ) : generatedIdeas.length > 0 ? (
                <ul className="space-y-2">
                  {generatedIdeas
                    .filter((i) => i.length > 0)
                    .map((idea, index) => (
                      <li
                        key={index}
                        className="p-3 text-sm bg-primary/10 rounded-lg hover:bg-primary/20 cursor-pointer transition-colors"
                        onClick={() => onGenerateOutlineFromTemplate(idea)}
                      >
                        {idea}
                      </li>
                    ))}
                </ul>
              ) : null}

              {selectedIndustryTemplates && (
                <div className="mt-6 border-t pt-2">
                  <h3 className="font-medium  mb-2">Pre-made Templates:</h3>
                  <ul className="space-y-2">
                    {selectedIndustryTemplates.map((template, index) => (
                      <li
                        key={index}
                        className="p-3 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 cursor-pointer transition-colors"
                        onClick={() => onGenerateOutlineFromTemplate(template)}
                      >
                        {template}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


