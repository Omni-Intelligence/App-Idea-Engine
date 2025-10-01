import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
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
import { Lightbulb, FileText, Loader2, Sparkles, Clock, Users, PlayCircle, Shield, Star, Check, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AuthModal } from "@/components/auth/AuthModal";
import { HeroTitle } from "@/components/ui/typography";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import IdeaFormSection from "@/components/home/IdeaFormSection";
import SocialProofSection from "@/components/home/SocialProofSection";
// Removed unused sections per request
// import ExplorerSection from "@/components/home/ExplorerSection";
// import FinalCTASection from "@/components/home/FinalCTASection";
// import SecuritySection from "@/components/home/SecuritySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DeliverablesSection from "@/components/home/DeliverablesSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "Retail",
  "Manufacturing",
  "Technology",
  "Real Estate",
  "Transportation",
  "Hospitality",
];

const businessFunctions = [
  "Sales",
  "Marketing",
  "Human Resources",
  "Operations",
  "Customer Service",
  "Finance",
  "IT",
  "Research & Development",
];

const appTemplates = {
  "Healthcare": [
    "Patient Appointment Scheduler",
    "Medical Records Management",
    "Telemedicine Platform",
  ],
  "Education": [
    "Learning Management System",
    "Student Progress Tracker",
    "Virtual Classroom Platform",
  ],
  // ... add more templates for other industries
};

const Index = () => {
  const [idea, setIdea] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedFunction, setSelectedFunction] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const [inspirationOpen, setInspirationOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const pendingIdea = localStorage.getItem('pendingIdea');
    if (pendingIdea) {
      setIdea(pendingIdea);

    }
  }, []);

  // Scroll to section if a hash is present (e.g., /#get-started)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idea.trim()) {
      toast({
        title: "Error",
        description: "Please enter your app idea",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        localStorage.setItem('pendingIdea', idea);
        setShowAuthModal(true);
        setIsGenerating(false);
        return;
      }

      // Generate title from description
      const { data: titleData, error: titleError } = await supabase.functions.invoke('generate-title', {
        body: { description: idea },
      });

      if (titleError) throw titleError;
      if (!titleData?.title) throw new Error('Failed to generate title');

      // Save to user_projects
      const { data: project, error: projectError } = await supabase
        .from('user_projects')
        .insert({
          title: titleData.title,
          description: idea,
          project_idea: idea,
          user_id: user.id,
          status: 'draft'
        })
        .select()
        .single();

      if (projectError) throw projectError;

      toast({
        title: "Success",
        description: "Your project has been saved!",
      });
      localStorage.removeItem('pendingIdea');
      // Navigate to questionnaire with the project data
      navigate('/questionnaire', {
        state: {
          appIdea: idea,
          projectId: project.id
        }
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to save your project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAuthSuccess = async () => {
    if (localStorage.getItem('pendingIdea')) {
      setShowAuthModal(false);
      setIdea(localStorage.getItem('pendingIdea') || "");
      // await handleSubmit(new Event('submit') as any);
    }
  };

  const generateAppIdeas = async () => {
    if (!selectedIndustry || !selectedFunction) {
      toast({
        title: "Selection Required",
        description: "Please select both an industry and a business function.",
        variant: "destructive",
      });
      return;
    }

    setIsGeneratingIdeas(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-app-ideas', {
        body: {
          industry: selectedIndustry,
          businessFunction: selectedFunction,
        },
      });

      if (error) throw error;

      if (data?.ideas) {
        setGeneratedIdeas(data.ideas);
      }
    } catch (error) {
      console.error('Error generating ideas:', error);
      toast({
        title: "Error",
        description: "Failed to generate ideas. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingIdeas(false);
    }
  };

  const generateOutlineFromTemplate = async (template: string) => {
    setIsGenerating(true);
    setInspirationOpen(false);
    setTemplatesOpen(false);

    try {
      const { data, error } = await supabase.functions.invoke('generate-app-outline', {
        body: {
          template,
          industry: selectedIndustry,
          businessFunction: selectedFunction,
        },
      });

      if (error) throw error;

      if (data?.outline) {
        setIdea(data.outline);
        toast({
          title: "Success",
          description: "Generated app outline from template!\n Feel free to modify it.",
          variant: "success",
        });
      }
    } catch (error) {
      console.error('Error generating outline:', error);
      toast({
        title: "Error",
        description: "Failed to generate outline. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // helper moved into modular components

  return (
    <>
      <HeroSection />
      <IdeaFormSection
        idea={idea}
        setIdea={setIdea}
        isGenerating={isGenerating}
        onSubmit={handleSubmit}
        inspirationOpen={inspirationOpen}
        setInspirationOpen={setInspirationOpen}
        templatesOpen={templatesOpen}
        setTemplatesOpen={setTemplatesOpen}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        selectedFunction={selectedFunction}
        setSelectedFunction={setSelectedFunction}
        isGeneratingIdeas={isGeneratingIdeas}
        generatedIdeas={generatedIdeas}
        onGenerateIdeas={generateAppIdeas}
        onGenerateOutlineFromTemplate={generateOutlineFromTemplate}
        appTemplates={appTemplates}
        showAuthModal={showAuthModal}
        onCloseAuthModal={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      <HowItWorksSection />
      <SocialProofSection />
      {/* ExplorerSection removed */}
      {/* FinalCTASection removed */}
      {/* SecuritySection removed */}
      <DeliverablesSection />
      <TemplatesSection onPickExample={(text) => {
        setIdea(text);
        const el = document.getElementById("get-started");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }} />
      <FinalCTASection />
    </>
  );
};

export default Index;
