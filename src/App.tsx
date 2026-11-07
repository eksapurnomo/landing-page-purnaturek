import React, { useState } from 'react';
import {
  AgeVerificationModal,
  checkInitialAgeVerification,
} from './components/AgeVerificationModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { QualityDocumentationSection } from './components/QualityDocumentationSection';
import { WholesalePartnershipSection } from './components/WholesalePartnershipSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export const App: React.FC = () => {
  // Synchronous sessionStorage read during initial state initialization prevents any interactive flash
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(() =>
    checkInitialAgeVerification()
  );
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState<string>(
    'Kratom Powder (Wholesale Inquiry)'
  );

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-botanical-900 relative">
      {/* Mandatory Compact Centered 21+ Age Verification Modal */}
      <AgeVerificationModal
        isVerified={isAgeVerified}
        onVerifySuccess={() => setIsAgeVerified(true)}
      />

      {/* Underlying Landing Page — Visible as background preview, completely inert until verified */}
      <div
        aria-hidden={!isAgeVerified}
        // @ts-expect-error inert is supported in modern browsers to block focus and pointer interaction
        inert={!isAgeVerified ? '' : undefined}
        className={
          !isAgeVerified
            ? 'pointer-events-none select-none overflow-hidden'
            : undefined
        }
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection
            onSelectProductInquiry={(topic) => setSelectedInquiryTopic(topic)}
          />
          <QualityDocumentationSection
            onRequestDocumentation={(topic) => setSelectedInquiryTopic(topic)}
          />
          <WholesalePartnershipSection
            onSelectPartnershipInquiry={(topic) => setSelectedInquiryTopic(topic)}
          />
        </main>
        <ContactFooterSection selectedInquiryTopic={selectedInquiryTopic} />
      </div>
    </div>
  );
};

export default App;

