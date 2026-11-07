import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
} from 'lucide-react';
import { IMAGE_ASSET_SOURCES } from '../data/coaData';

interface ContactFooterProps {
  selectedInquiryTopic: string;
}

const CANONICAL_URL = 'https://purnaturekbulk.com/';
const SHARE_TITLE =
  'PUR NATUREK — Premium Kratom Powder & Extract Wholesale and Bulk Supply';

export const ContactFooterSection: React.FC<ContactFooterProps> = ({
  selectedInquiryTopic,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [inquiryCategory, setInquiryCategory] = useState(
    selectedInquiryTopic || 'Kratom Powder (Wholesale Inquiry)'
  );
  const [messageBody, setMessageBody] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showImageSources, setShowImageSources] = useState(false);

  useEffect(() => {
    if (selectedInquiryTopic) {
      setInquiryCategory(selectedInquiryTopic);
    }
  }, [selectedInquiryTopic]);

  const handleComposeWholesaleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[PurNatureK B2B Inquiry] ${inquiryCategory}${companyName ? ` — ${companyName}` : ''}`
    );
    const bodyLines = [
      'Hello PurNatureK Wholesale Team,',
      '',
      `Inquiry Topic: ${inquiryCategory}`,
      companyName ? `Company / Organization: ${companyName}` : '',
      contactPerson ? `Contact Name / Role: ${contactPerson}` : '',
      '',
      'Commercial Inquiry Details:',
      messageBody ||
        'We would like to request wholesale product information, specifications, and applicable batch documentation.',
      '',
      '---',
      'Submitted via PurNatureK Corporate Bulk Landing Page (https://purnaturekbulk.com/)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:wholesales@purnaturek.com?subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;
  };

  const handleCopyPageUrl = async () => {
    const urlToCopy =
      typeof window !== 'undefined' && window.location.href
        ? window.location.href
        : CANONICAL_URL;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // Fallback textarea copy
      const textArea = document.createElement('textarea');
      textArea.value = urlToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('wholesales@purnaturek.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // ignore
    }
  };

  const encodedUrl = encodeURIComponent(CANONICAL_URL);
  const encodedTitle = encodeURIComponent(SHARE_TITLE);

  const linkedInShareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const facebookShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const whatsAppShareHref = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-cream-50 text-botanical-900 border-b border-botanical-800/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Verified Company Contact Info */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-earth-500" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-botanical-600">
                  Wholesale Contact
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.14] text-botanical-950 mb-5">
                Connect with PurNatureK Commercial Trade Desk.
              </h2>

              <p className="text-sm sm:text-base text-botanical-700 leading-relaxed mb-8">
                For wholesale inquiries regarding bulk <em>Mitragyna speciosa</em> powder and extract products, batch specifications, or commercial partnership discussions, contact our US commercial team at{' '}
                <strong className="font-semibold text-botanical-900">
                  Purnature Khatulistiwa LLC
                </strong>{' '}
                directly or sign in to the Wholesale Member Portal.
              </p>

              {/* Verified Contact Details List */}
              <div className="space-y-5 bg-cream-100 p-6 sm:p-7 rounded-sm border border-botanical-800/15">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-botanical-800 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-botanical-600 block">
                      Wholesale Inquiry Email
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a
                        href="mailto:wholesales@purnaturek.com"
                        className="text-sm font-semibold text-botanical-950 hover:underline"
                      >
                        wholesales@purnaturek.com
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-mono bg-cream-200 hover:bg-cream-300 text-botanical-800 rounded-sm transition-colors"
                        title="Copy email address"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-botanical-800/10">
                  <Phone className="w-5 h-5 text-botanical-800 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-botanical-600 block">
                      Commercial Telephone
                    </span>
                    <a
                      href="tel:+17734256646"
                      className="text-sm font-semibold text-botanical-950 hover:underline mt-0.5 block"
                    >
                      +1 (773) 425-6646
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-botanical-800/10">
                  <MapPin className="w-5 h-5 text-botanical-800 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-botanical-600 block">
                      US Commercial Office
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-botanical-900 mt-0.5 leading-relaxed">
                      505 N Lake Shore Dr, Suite 3404, Chicago, IL 60611, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-botanical-800/10">
                  <Globe className="w-5 h-5 text-botanical-800 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-botanical-600 block">
                      Official Digital Channels
                    </span>
                    <div className="flex flex-col gap-1 text-xs font-medium">
                      <a
                        href="https://members.purnaturekbulk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-botanical-900 hover:underline font-semibold"
                      >
                        <span>Wholesale Member Portal (members.purnaturekbulk.com)</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.purnaturek.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-botanical-700 hover:underline"
                      >
                        <span>Primary Corporate Site (www.purnaturek.com)</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Wholesale Inquiry Email Composer */}
            <div className="lg:col-span-7">
              <div className="bg-cream-100 p-7 sm:p-10 rounded-sm border border-botanical-800/15 shadow-editorial">
                <div className="mb-6 pb-4 border-b border-botanical-800/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-botanical-600 block">
                      Direct B2B Dispatch
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 mt-0.5">
                      Prepare a Wholesale Inquiry
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-botanical-700 bg-cream-200 px-3 py-1 rounded-sm">
                    Age Restricted • 21+ Commercial Only
                  </span>
                </div>

                <form onSubmit={handleComposeWholesaleEmail} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="inquiry-company"
                        className="block text-xs font-mono uppercase tracking-wider text-botanical-800 mb-2"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="inquiry-company"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Your business entity name"
                        className="w-full px-3.5 py-2.5 bg-cream-50 border border-botanical-800/25 rounded-sm text-sm text-botanical-950 placeholder:text-botanical-600/50 focus:outline-none focus:border-botanical-800"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-person"
                        className="block text-xs font-mono uppercase tracking-wider text-botanical-800 mb-2"
                      >
                        Contact Name &amp; Title
                      </label>
                      <input
                        id="inquiry-person"
                        type="text"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="Procurement / Commercial Lead"
                        className="w-full px-3.5 py-2.5 bg-cream-50 border border-botanical-800/25 rounded-sm text-sm text-botanical-950 placeholder:text-botanical-600/50 focus:outline-none focus:border-botanical-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-topic"
                      className="block text-xs font-mono uppercase tracking-wider text-botanical-800 mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="inquiry-topic"
                      value={inquiryCategory}
                      onChange={(e) => setInquiryCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-botanical-800/25 rounded-sm text-sm text-botanical-950 focus:outline-none focus:border-botanical-800"
                    >
                      <option value="Kratom Powder (Wholesale Inquiry)">
                        Kratom Powder (Wholesale Inquiry)
                      </option>
                      <option value="Kratom Extract (Specifications & Wholesale Inquiry)">
                        Kratom Extract (Specifications &amp; Wholesale Inquiry)
                      </option>
                      <option value="Batch SBT4 (Cambium Analytica COA Verification)">
                        Batch SBT4 — Cambium Analytica COA Documentation Request
                      </option>
                      <option value="Batch SBT4 (PharmLabs San Diego COA Verification)">
                        Batch SBT4 — PharmLabs San Diego COA Documentation Request
                      </option>
                      <option value="Wholesale Supply Partnership Discussion">
                        Wholesale Supply Partnership Discussion
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-mono uppercase tracking-wider text-botanical-800 mb-2"
                    >
                      Commercial Inquiry Notes
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      placeholder="Specify the product category, documentation requirements, destination market, or partnership questions..."
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-botanical-800/25 rounded-sm text-sm text-botanical-950 placeholder:text-botanical-600/50 focus:outline-none focus:border-botanical-800"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Compose Wholesale Email</span>
                    </button>

                    <a
                      href="https://members.purnaturekbulk.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-botanical-800 hover:text-botanical-950 underline underline-offset-4"
                    >
                      <span>Existing Member? Go to Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL SHARING & CORPORATE FOOTER */}
      <footer className="bg-botanical-950 text-cream-100">
        {/* Lightweight Social Sharing Bar */}
        <div className="border-b border-cream-100/10 bg-botanical-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Share2 className="w-4 h-4 text-earth-400" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-cream-200">
                Share Corporate Overview with Commercial Colleagues
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={linkedInShareHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-cream-100/8 hover:bg-cream-100/15 text-cream-100 border border-cream-100/15 rounded-sm transition-colors"
              >
                LinkedIn
              </a>

              <a
                href={facebookShareHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-cream-100/8 hover:bg-cream-100/15 text-cream-100 border border-cream-100/15 rounded-sm transition-colors"
              >
                Facebook
              </a>

              <a
                href={whatsAppShareHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-cream-100/8 hover:bg-cream-100/15 text-cream-100 border border-cream-100/15 rounded-sm transition-colors"
              >
                WhatsApp
              </a>

              <button
                type="button"
                onClick={handleCopyPageUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-earth-500/25 hover:bg-earth-500/35 text-cream-50 border border-earth-400/40 rounded-sm transition-colors"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-earth-400" aria-hidden="true" />
                    <span>URL Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-earth-400" aria-hidden="true" />
                    <span>Copy Page URL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream-100/12">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="mb-4">
                <a
                  href="#home"
                  className="inline-flex items-center bg-[#F7F4EC] hover:bg-[#FCFBF8] px-4 py-2.5 rounded-sm border border-cream-200/30 shadow-sm transition-colors"
                  aria-label="PurNatureK Bulk — Purnature Khatulistiwa LLC"
                >
                  <img
                    src="/images/logo-purnaturek-transparent.png"
                    alt="PurNatureK Bulk Official Logo"
                    loading="lazy"
                    className="h-9 sm:h-10 w-auto object-contain select-none"
                  />
                </a>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-cream-300 block mt-2.5">
                  Purnature Khatulistiwa LLC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-md mb-5">
                US-based wholesale supplier of premium <em>Mitragyna speciosa</em> (kratom) powder and concentrated botanical extract products for commercial buyers, distributors, and qualified business partners.
              </p>

              {/* Required Age Restriction Notice */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-botanical-800 border border-earth-400/40 text-xs font-mono uppercase tracking-[0.18em] text-cream-50">
                <span>Age restricted. 21+ only.</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-earth-400 mb-4">
                Site Navigation
              </h3>
              <ul className="space-y-2.5 text-xs text-cream-200/85">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Products &amp; Supply
                  </a>
                </li>
                <li>
                  <a href="#quality" className="hover:text-white transition-colors">
                    Quality &amp; Documentation
                  </a>
                </li>
                <li>
                  <a href="#partnership" className="hover:text-white transition-colors">
                    Wholesale Partnership
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Portals & Contact */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-earth-400 mb-4">
                Wholesale Channels
              </h3>
              <ul className="space-y-3 text-xs text-cream-200/85">
                <li>
                  <a
                    href="https://members.purnaturekbulk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cream-50 font-semibold hover:underline"
                  >
                    <span>Wholesale Member Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="block text-[11px] text-cream-300/70">
                    https://members.purnaturekbulk.com/
                  </span>
                </li>
                <li>
                  <a
                    href="https://purnaturekbulk.com/"
                    className="inline-flex items-center gap-1.5 text-cream-100 hover:underline"
                  >
                    <span>Corporate Bulk Website</span>
                  </a>
                  <span className="block text-[11px] text-cream-300/70">
                    https://purnaturekbulk.com/
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.purnaturek.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cream-100 hover:underline"
                  >
                    <span>Primary Reference Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="block text-[11px] text-cream-300/70">
                    https://www.purnaturek.com/
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal, Regulatory & Non-Medical Safeguards */}
          <div className="pt-8 space-y-4 text-[11.5px] text-cream-300/75 leading-relaxed">
            <p>
              <strong className="text-cream-100 font-semibold">
                Regulatory &amp; Commercial Notice:
              </strong>{' '}
              This website is presented exclusively for international business-to-business (B2B) wholesale information. Nothing on this website constitutes a retail offer to the general public. Products derived from{' '}
              <em>Mitragyna speciosa</em> (kratom) are subject to varying national, federal, state, provincial, and municipal laws and import regulations. PurNatureK / Purnature Khatulistiwa LLC does not represent or warrant that its products are legal for import, distribution, or possession in every jurisdiction. Prospective commercial buyers are solely responsible for verifying compliance with all applicable laws and regulatory requirements in their respective jurisdictions.
            </p>
            <p>
              <strong className="text-cream-100 font-semibold">
                No Medical or Therapeutic Claims:
              </strong>{' '}
              Information and analytical summaries provided on this website are for commercial ingredient evaluation only. Statements on this site have not been evaluated by the U.S. Food and Drug Administration (FDA) or any international health authority. PurNatureK products are not marketed or intended to diagnose, treat, cure, or prevent any disease or medical condition.
            </p>

            {/* Expandable Image Asset Source & Attribution Notice */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowImageSources((prev) => !prev)}
                className="text-[11px] font-mono uppercase tracking-wider text-cream-200/80 hover:text-cream-50 underline underline-offset-4"
              >
                {showImageSources
                  ? 'Hide Visual Asset & Photography Attribution'
                  : 'View Visual Asset & Photography Attribution'}
              </button>

              {showImageSources && (
                <div className="mt-3 p-4 rounded-sm bg-botanical-900/80 border border-cream-100/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  {IMAGE_ASSET_SOURCES.map((asset) => (
                    <div key={asset.file} className="border-b border-cream-100/10 pb-2">
                      <span className="font-mono text-cream-100 block">{asset.section}</span>
                      <span className="text-cream-300/80 block">{asset.description}</span>
                      <span className="italic text-cream-400/70 block mt-0.5">
                        {asset.source}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-cream-100/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-cream-300/70">
              <span>
                &copy; {new Date().getFullYear()} Purnature Khatulistiwa LLC (PurNatureK). All rights reserved.
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cream-200">
                Age restricted. 21+ only. • B2B Wholesale Only
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

