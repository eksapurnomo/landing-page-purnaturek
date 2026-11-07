import React from 'react';
import { ArrowRight, FileCheck2, Globe2, Leaf } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between bg-botanical-950 text-cream-50 overflow-hidden"
    >
      {/* Background Editorial Photography with Split Atmospheric Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-kratom-botanical.jpg"
          alt="Fresh Mitragyna speciosa leaves arranged beside wholesale kratom botanical powder and concentrated extract on warm limestone"
          className="w-full h-full object-cover object-center scale-[1.01]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(12, 26, 19, 0.92) 0%, rgba(19, 42, 31, 0.80) 48%, rgba(19, 42, 31, 0.42) 100%)',
          }}
        />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Editorial Overline */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-cream-100/10 border border-cream-100/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-earth-400" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cream-100">
                Purnature Khatulistiwa LLC • International Botanical Trade
              </span>
            </div>

            {/* Suggested Headline from Brief */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[1.08] tracking-[-0.01em] text-cream-50 mb-6">
              Indonesian Botanical Ingredients.{' '}
              <span className="italic font-normal text-cream-200">
                Global Wholesale Partnerships.
              </span>
            </h1>

            {/* Supporting Text from Brief */}
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-cream-100/90 max-w-2xl mb-9 font-normal">
              PurNatureK connects Indonesian botanical sourcing with international wholesale markets through kratom powder and extract products, product documentation, and business partnerships.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-cream-100 hover:bg-white text-botanical-950 text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-all duration-200 shadow-sm"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#partnership"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-botanical-800/80 hover:bg-botanical-800 text-cream-50 border border-cream-100/30 text-xs font-semibold tracking-[0.16em] uppercase rounded-sm backdrop-blur-sm transition-all duration-200"
              >
                <span>Wholesale Partnership</span>
              </a>
            </div>
          </div>

          {/* Right Editorial Botanical Spec Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#F7F4EC]/95 backdrop-blur-md text-botanical-900 p-6 sm:p-8 rounded-sm border border-cream-300 shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-botanical-800/15">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-botanical-600 block">
                    Botanical Classification
                  </span>
                  <p className="font-serif text-2xl italic font-semibold text-botanical-900 mt-0.5">
                    Mitragyna speciosa
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-botanical-800/10 flex items-center justify-center text-botanical-800">
                  <Leaf className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              <dl className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-botanical-800/10">
                  <dt className="font-mono uppercase tracking-wider text-botanical-600">
                    Origin Region
                  </dt>
                  <dd className="font-semibold text-botanical-900 text-right">
                    West Kalimantan, Indonesia
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-botanical-800/10">
                  <dt className="font-mono uppercase tracking-wider text-botanical-600">
                    Supply Categories
                  </dt>
                  <dd className="font-semibold text-botanical-900 text-right">
                    Kratom Powder &amp; Kratom Extract
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-botanical-800/10">
                  <dt className="font-mono uppercase tracking-wider text-botanical-600">
                    Commercial Model
                  </dt>
                  <dd className="font-semibold text-botanical-900 text-right">
                    B2B Wholesale Supply Only
                  </dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="font-mono uppercase tracking-wider text-botanical-600">
                    Documentation
                  </dt>
                  <dd className="font-semibold text-botanical-900 text-right">
                    Batch-Specific COA Available
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-botanical-800/15 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-botanical-700">
                  Age Restricted • 21+ Only
                </span>
                <a
                  href="#quality"
                  className="text-xs font-semibold text-botanical-800 hover:text-botanical-950 underline underline-offset-4"
                >
                  View Analytical Scope
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Trade Pillars Bar */}
      <div className="relative z-10 bg-[#132A1F]/90 backdrop-blur-md border-t border-cream-100/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <Leaf className="w-5 h-5 text-earth-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-cream-50 font-semibold">
                Indonesian Botanical Sourcing
              </h2>
              <p className="text-xs text-cream-200/80 mt-1">
                Rooted in Pontianak, West Kalimantan, connecting regional botanical harvesting with export preparation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <FileCheck2 className="w-5 h-5 text-earth-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-cream-50 font-semibold">
                Analytical Documentation
              </h2>
              <p className="text-xs text-cream-200/80 mt-1">
                Independent third-party laboratory Certificates of Analysis (COA) for documented product lots.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Globe2 className="w-5 h-5 text-earth-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-cream-50 font-semibold">
                Dedicated B2B Trade Focus
              </h2>
              <p className="text-xs text-cream-200/80 mt-1">
                Structured exclusively for commercial buyers, importers, and wholesale partners—not public retail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
