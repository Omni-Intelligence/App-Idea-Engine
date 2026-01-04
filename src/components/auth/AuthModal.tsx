import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user?: any) => void;
  flatCard?: boolean;
  additionalText?: string;
  titleSingIn?: string;
  titleSignUp?: string;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  useEffect(() => {
    if (isOpen) {
      window.location.href = "https://enterprisedna.co/login?edna=1";
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex items-center justify-center p-8">
          <p className="text-muted-foreground">Redirecting to login...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
