import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  FileSearch,
  Handshake,
  MessageSquare,
} from 'lucide-react';

interface WholesalePartnershipProps {
  onSelectPartnershipInquiry?: (topic: string) => void;
}

const PARTNERSHIP_TOPICS = [
  {
    icon: Building2,
    title: 'Wholesale Product Inquiries',
    description:
      'Direct commercial inquiries for bulk Mitragyna speciosa leaf powder and concentrated botanical extract supply.',
  },
  {
    icon: ClipboardCheck,
    title: 'Product Specifications',
    description:
      'Detailed discussions regarding botanical form, vein classification, and extract batch parameters for commercial alignment.',
  },
  {
    icon: FileSearch,
    title: 'Documentation Requests',
    description:
      'Access to lot-specific third-party laboratory Certificates of Analysis (COAs) and supporting batch documentation for qualified buyers.',
  },
  {
    icon: MessageSquare,
    title: 'Commercial Discussions',
    description:
      'Transparent B2B communication regarding order structure, export preparation from Indonesia, and international trade logistics.',
  },
  {
    icon: Handshake,
    title: 'Distributor & Business Partnerships',
    description:
      'Long-term wholesale collaboration opportunities for established international botanical ingredient buyers and distributors.',
  },
];

export const WholesalePartnershipSection: React.FC<WholesalePartnershipProps> = ({
  onSelectPartnershipInquiry,
}) => {
  return (
    <section
      id="partnership"
      className="py-24 lg:py-32 bg-botanical-900 text-cream-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative & CTAs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-earth-400" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-cream-200">
                International B2B Collaboration
              </span>
            </div>

            {/* Suggested Headline from Brief */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-cream-50 mb-6">
              Build Your Botanical Supply Partnership with PurNatureK.
            </h2>

            <p className="text-sm sm:text-base text-cream-100/90 leading-relaxed mb-8">
              PurNatureK works with international wholesale buyers, ingredient distributors, and commercial enterprises seeking a straightforward, documentation-supported supply bridge to Indonesian{' '}
              <em>Mitragyna speciosa</em> powder and extract products.
            </p>

            {/* Editorial Photography Card */}
            <figure className="bg-botanical-950/60 p-3.5 rounded-sm border border-cream-100/15 mb-8">
              <div className="aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src="/images/wholesale-partnership.jpg"
                  alt="International B2B wholesale buyers and Indonesian botanical sourcing professionals reviewing product samples and analytical documentation"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-cream-200/75">
                <span className="font-mono uppercase tracking-wider text-cream-100">
                  Indonesian Supply • International B2B Trade
                </span>
                <span className="italic">
                  Illustrative commercial photography; does not depict actual employees or clients
                </span>
              </figcaption>
            </figure>

            {/* Primary & Portal CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#contact"
                onClick={() =>
                  onSelectPartnershipInquiry &&
                  onSelectPartnershipInquiry('Wholesale Supply Partnership Discussion')
                }
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-cream-100 hover:bg-white text-botanical-950 text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors"
              >
                <span>Discuss Wholesale Opportunities</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="https://members.purnaturekbulk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-cream-100/10 text-cream-50 border border-cream-100/30 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
              >
                <span>Wholesale Member Portal</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: 5 Partnership Inquiry Topics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-earth-400">
                Commercial Inquiry Scope
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mt-1">
                How We Engage with Qualified Wholesale Buyers
              </h3>
            </div>

            {PARTNERSHIP_TOPICS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-sm bg-botanical-950/55 border border-cream-100/12 hover:border-cream-100/30 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-cream-100/10 border border-cream-100/15 flex items-center justify-center text-earth-400 shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif text-xl font-medium text-cream-50">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-cream-200/50">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

