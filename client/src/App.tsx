import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import DivorceSettlement from "./pages/services/DivorceSettlement";
import MaintenanceAgreements from "./pages/services/MaintenanceAgreements";
import ParentingPlans from "./pages/services/ParentingPlans";
import VoiceOfChild from "./pages/services/VoiceOfChild";
import AdultDivorcPrep from "./pages/services/AdultDivorcePrep";
import IllnessDisability from "./pages/services/IllnessDisability";
import PalliativeCare from "./pages/services/PalliativeCare";
import HealthEducation from "./pages/services/HealthEducation";
import AdminDashboard from "./pages/AdminDashboard";
import ClientPortal from "./pages/ClientPortal";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/booking"} component={Booking} />
      <Route path={"/services/divorce-settlement"} component={DivorceSettlement} />
      <Route path={"/services/maintenance-agreements"} component={MaintenanceAgreements} />
      <Route path={"/services/parenting-plans"} component={ParentingPlans} />
      <Route path={"/services/voice-of-child"} component={VoiceOfChild} />
      <Route path={"/services/adult-divorce-prep"} component={AdultDivorcPrep} />
      <Route path={"/services/illness-disability"} component={IllnessDisability} />
      <Route path={"/services/palliative-care"} component={PalliativeCare} />
      <Route path={"/services/health-education"} component={HealthEducation} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/portal"} component={ClientPortal} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="fixed top-0 left-0 z-[9999] px-4 py-2 bg-[#5DBB63] text-white font-semibold rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform"
            aria-label="Skip to main content"
          >
            Skip to main content
          </a>
          <Toaster />
          <main id="main-content" role="main">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
