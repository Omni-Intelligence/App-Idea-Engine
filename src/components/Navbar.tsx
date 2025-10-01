import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { LogOut } from "lucide-react";

export const Navbar = () => {
  const [session, setSession] = useState<boolean | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <SiteLogo />
          <div className="flex items-center space-x-4">
            {!session && (
              <Button
                variant="ghost"
                onClick={() => window.open("https://enterprisedna.co/pricing", "_blank")}
                className="text-black hover:bg-gray-100"
              >
                Pricing
              </Button>
            )}
            {session && (
              <Button
                onClick={() => navigate("/projects")}
                className="bg-gradient-to-r from-[#6654f5] via-[#ca5a8b] to-[#f2b347] text-white hover:opacity-90 transition-opacity"
              >
                My Projects
              </Button>
            )}
            {session ? (
              <div className="relative flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate("/profile")}
                  className="gap-2 border-transparent text-white bg-gradient-to-r from-[#6654f5] via-[#ca5a8b] to-[#f2b347] hover:opacity-90 transition-opacity"
                >
                  Profile
                </Button>
                <Button variant="white" size="icon" onClick={handleSignOut} className="ml-2">
                  <LogOut className="size-5" />
                </Button>
              </div>
            ) : (
              <Button asChild className="bg-gradient-to-r from-[#f2b347] via-[#b84d8f] to-[#6654f5] text-white hover:opacity-90 transition-opacity">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
