import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lightbulb, FileText, Loader2 } from "lucide-react";
import { HeroTitle } from "@/components/ui/typography";
import { AuthModal } from "@/components/auth/AuthModal";
import { useCallback } from "react";

interface IdeaFormSectionProps {
  idea: string;
  setIdea: (value: string) => void;
  isGenerating: boolean;
  onSubmit: (e: React.FormEvent) => void;
  inspirationOpen: boolean;
  setInspirationOpen: (value: boolean) => void;
  templatesOpen: boolean;
  setTemplatesOpen: (value: boolean) => void;
  selectedIndustry: string;
  setSelectedIndustry: (value: string) => void;
  selectedFunction: string;
  setSelectedFunction: (value: string) => void;
  isGeneratingIdeas: boolean;
  generatedIdeas: string[];
  onGenerateIdeas: () => void;
  onGenerateOutlineFromTemplate: (template: string) => void;
  appTemplates: Record<string, string[]>;
  showAuthModal: boolean;
  onCloseAuthModal: () => void;
  onAuthSuccess: () => void;
}

export default function IdeaFormSection({
  idea,
  setIdea,
  isGenerating,
  onSubmit,
  inspirationOpen,
  setInspirationOpen,
  templatesOpen,
  setTemplatesOpen,
  selectedIndustry,
  setSelectedIndustry,
  selectedFunction,
  setSelectedFunction,
  isGeneratingIdeas,
  generatedIdeas,
  onGenerateIdeas,
  onGenerateOutlineFromTemplate,
  appTemplates,
  showAuthModal,
  onCloseAuthModal,
  onAuthSuccess,
}: IdeaFormSectionProps) {
  const scrollToStart = useCallback(() => {
    const el = document.getElementById("get-started");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const hasSelection = Boolean(selectedIndustry || selectedFunction);
  const selectedIndustryTemplates = selectedIndustry
    ? appTemplates[selectedIndustry as keyof typeof appTemplates]
    : undefined;

  return (
    <div id="get-started" className=" flex flex-col ">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <p className="mt-2 max-w-md mx-auto text-base  sm:text-lg md:text-xl md:max-w-3xl mb-10 brand-text-gradient">
            Transform your app ideas into reality with our AI-powered development assistant.
          </p>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-3xl p-[1px] brand-gradient">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-purple-100 p-6 md:p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="idea"
                    className="block text-lg font-semibold text-primary mb-2 text-left"
                  >
                    What do you want to build?
                  </label>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Please be as detailed as possible about all the key aspects of your application.
                    The more specific you are, the more useful the documents will be for outlining your app.
                  </p>
                  <div className="relative">
                    <Textarea
                      id="idea"
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      placeholder="Describe your app idea here..."
                      className="min-h-[250px] text-base bg-white/80 ring-offset-white border-purple-200 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
                      disabled={isGenerating}
                    />
                    {isGenerating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-md">
                        <div className="flex items-center space-x-2 text-purple-600">
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span className="text-sm font-medium">Generating outline...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    type="submit"
                    className=" w-full sm:w-1/2 brand-gradient text-white shadow-md hover:brightness-110 hover:shadow-lg"
                    disabled={isGenerating}
                  >
                    Submit Idea
                  </Button>
                  <div className="flex gap-2 w-full sm:w-auto sm:ml-auto">
                    <Dialog open={inspirationOpen} onOpenChange={setInspirationOpen}>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex items-center gap-2 border-purple-300 hover:bg-primary/10"
                          disabled={isGenerating}
                        >
                          <Lightbulb className="w-4 h-4" />
                          Need inspiration?
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[550px] max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Find App Ideas</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Select Industry</label>
                            <Select
                              value={selectedIndustry}
                              onValueChange={setSelectedIndustry}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose an industry" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.keys(appTemplates).map((industry) => (
                                  <SelectItem key={industry} value={industry}>
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Select Business Function</label>
                            <Select
                              value={selectedFunction}
                              onValueChange={setSelectedFunction}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose a function" />
                              </SelectTrigger>
                              <SelectContent>
                                {["Sales","Marketing","Human Resources","Operations","Customer Service","Finance","IT","Research & Development"].map((func) => (
                                  <SelectItem key={func} value={func}>
                                    {func}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
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
                      </DialogContent>
                    </Dialog>

                    <Dialog open={templatesOpen} onOpenChange={setTemplatesOpen}>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex items-center gap-2 border-purple-300 hover:bg-primary/10"
                          disabled={isGenerating}
                        >
                          <FileText className="w-4 h-4" />
                          Templates
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>App Templates</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["E-commerce Platform", "Project Management Tool", "Social Media App", "Fitness Tracking App"].map((template) => (
                              <div
                                key={template}
                                className="p-4 border rounded-lg hover:bg-primary/10 cursor-pointer transition-colors"
                                onClick={() => onGenerateOutlineFromTemplate(template)}
                              >
                                <h3 className="font-semibold text-primary mb-2">{template}</h3>
                                <p className="text-sm text-gray-600">Click to generate a detailed outline.</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={onCloseAuthModal}
        onSuccess={onAuthSuccess}
        flatCard={true}
        titleSingIn="Please Log In"
        titleSignUp="Create an Account"
        additionalText="Your app idea will be saved and you can continue working on it later."
      />
    </div>
  );
}


