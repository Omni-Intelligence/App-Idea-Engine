import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useEdnaMembership = () => {
  const [loading, setLoading] = useState(false);

  const checkMembershipAndRedirect = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("edna-sso", {
        body: {},
      });

      if (error) {
        console.error("Error getting SSO params:", error);
        window.open("https://app.enterprisedna.co/app", "_blank");
        return;
      }

      if (data?.success && data.sso && data.sig) {
        const loginUrl = `https://app.enterprisedna.co/supabase/login?sso=${encodeURIComponent(data.sso)}&sig=${
          data.sig
        }`;
        window.open(loginUrl, "_blank");
      } else {
        window.open("https://app.enterprisedna.co/app", "_blank");
      }
    } catch (error) {
      console.error("Error checking EDNA membership:", error);
      window.open("https://app.enterprisedna.co/app", "_blank");
    } finally {
      setLoading(false);
    }
  };

  const checkMembership = async (): Promise<boolean> => {
    try {
      const { data, error } = await supabase.functions.invoke("edna-sso", {
        body: {},
      });

      if (error || !data?.success || !data.sso || !data.sig) {
        return false;
      }

      const checkUrl = `https://app.enterprisedna.co/api/v1/supabase/check?sso=${encodeURIComponent(data.sso)}&sig=${
        data.sig
      }`;
      const response = await fetch(checkUrl);

      if (!response.ok) {
        return false;
      }

      const result = await response.json();
      return result.has_access === true;
    } catch (error) {
      console.error("Error checking membership:", error);
      return false;
    }
  };

  const removeSSOLoadingScreen = () => {
    const loadingScreen = document.getElementById("sso-loading-screen");
    if (loadingScreen) {
      loadingScreen.remove();
    }
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.style.display = "";
    }
    // Clean up SSO params from URL without triggering a reload
    const url = new URL(window.location.href);
    url.searchParams.delete("sso");
    url.searchParams.delete("sig");
    window.history.replaceState({}, "", url.toString());
  };

  const processAutoSSO = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ssoPayload = urlParams.get("sso");
    const signature = urlParams.get("sig");

    if (!ssoPayload || !signature) {
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("sso-login", {
        body: {
          sso: ssoPayload,
          sig: signature,
        },
      });

      if (error) {
        console.error("SSO login error:", error);
        removeSSOLoadingScreen();
        return;
      }

      if (data?.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        // SSO didn't return a redirect URL, show the normal app
        removeSSOLoadingScreen();
      }
    } catch (error) {
      console.error("Auto SSO processing error:", error);
      removeSSOLoadingScreen();
    }
  };

  return { checkMembershipAndRedirect, checkMembership, processAutoSSO, loading };
};
