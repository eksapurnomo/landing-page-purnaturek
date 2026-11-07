import React from 'react';
import { ArrowRight, ArrowUpRight, FlaskConical, Leaf } from 'lucide-react';

interface ProductSelectHandlerProps {
  onSelectProductInquiry?: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductSelectHandlerProps> = ({
  onSelectProductInquiry,
}) => {
  const handleInquireClick = (productName: string) => {
    if (onSelectProductInquiry) {
      onSelectProductInquiry(productName);
    }
  };

  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-cream-50 text-botanical-900 border-b border-botanical-800/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-earth-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-botanical-600">
              Products &amp; Wholesale Supply
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-botanical-950 mb-5">
            <em>Mitragyna speciosa</em> Ingredient Categories for Commercial Buyers.
          </h2>

          <p className="text-sm sm:text-base text-botanical-700 leading-relaxed">
            PurNatureK supplies two core botanical product categories derived from Indonesian{' '}
            <em>Mitragyna speciosa</em>. All products are offered strictly for business-to-business wholesale inquiries. Detailed commercial terms and current inventory are managed through direct inquiry and our private Wholesale Member Portal.
          </p>
        </div>

        {/* Two Visually Distinctive Product Presentations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* PRODUCT 1: KRATOM POWDER */}
          <article className="group flex flex-col bg-cream-100 rounded-sm border border-botanical-800/15 overflow-hidden shadow-editorial transition-all duration-300 hover:border-botanical-800/35">
            <div className="relative aspect-[4/3] overflow-hidden bg-botanical-900">
              <img
                src="/images/product-kratom-powder.jpg"
                alt="Fine green Mitragyna speciosa kratom botanical powder in a wide-mouth laboratory glass jar with stainless scoop and bulk wholesale pouches"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-botanical-950/85 backdrop-blur-sm text-cream-50 text-[10.5px] font-mono uppercase tracking-[0.18em]">
                <Leaf className="w-3.5 h-3.5 text-earth-400" aria-hidden="true" />
                <span>Category 01 • Milled Botanical Leaf</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-botanical-600">
                    Mitragyna speciosa
                  </span>
                  <span className="text-[11px] font-mono text-botanical-600">
                    Indonesian Origin
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-botanical-950 mb-4">
                  Kratom Powder
                </h3>

                {/* Exact Required Description */}
                <p className="text-base font-medium text-botanical-900 leading-relaxed mb-4">
                  Botanical powder derived from <em>Mitragyna speciosa</em>, presented for wholesale business inquiries.
                </p>

                <p className="text-xs sm:text-sm text-botanical-700 leading-relaxed mb-6">
                  Prepared from selected Indonesian <em>Mitragyna speciosa</em> leaves (spanning traditional Green, Red, and White vein botanical classifications) milled for wholesale bulk supply and commercial distribution partners.
                </p>

                <dl className="grid grid-cols-2 gap-3 pt-4 border-t border-botanical-800/15 text-xs mb-7">
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[10.5px] text-botanical-600">
                      Botanical Form
                    </dt>
                    <dd className="font-semibold text-botanical-900 mt-0.5">
                      Milled Leaf Powder
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[10.5px] text-botanical-600">
                      Commercial Channel
                    </dt>
                    <dd className="font-semibold text-botanical-900 mt-0.5">
                      Wholesale B2B Inquiry
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => handleInquireClick('Kratom Powder (Wholesale Inquiry)')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
                >
                  <span>Inquire About Kratom Powder</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href="https://members.purnaturekbulk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-botanical-800 hover:text-botanical-950 border border-botanical-800/25 hover:border-botanical-800 rounded-sm transition-colors"
                >
                  <span>Member Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {/* PRODUCT 2: KRATOM EXTRACT */}
          <article className="group flex flex-col bg-cream-100 rounded-sm border border-botanical-800/15 overflow-hidden shadow-editorial transition-all duration-300 hover:border-botanical-800/35">
            <div className="relative aspect-[4/3] overflow-hidden bg-botanical-900">
              <img
                src="/images/product-kratom-extract.jpg"
                alt="Concentrated Mitragyna speciosa salt-based botanical extract powder in a laboratory glass dish beside sealed amber sample vials"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-botanical-950/85 backdrop-blur-sm text-cream-50 text-[10.5px] font-mono uppercase tracking-[0.18em]">
                <FlaskConical className="w-3.5 h-3.5 text-earth-400" aria-hidden="true" />
                <span>Category 02 • Concentrated Extract</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-botanical-600">
                    Mitragyna speciosa
                  </span>
                  <span className="text-[11px] font-mono text-botanical-600">
                    Batch-Documented Supply
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-botanical-950 mb-4">
                  Kratom Extract
                </h3>

                {/* Exact Required Description */}
                <p className="text-base font-medium text-botanical-900 leading-relaxed mb-4">
                  Concentrated botanical extract products with product-specific specifications and documentation available for qualified business inquiries.
                </p>

                <p className="text-xs sm:text-sm text-botanical-700 leading-relaxed mb-6">
                  Includes documented botanical extract preparations—such as salt-based extract lot{' '}
                  <span className="font-mono font-medium text-botanical-900">SBT4</span>—supported by independent laboratory Certificates of Analysis covering alkaloid quantification and residual solvent screening.
                </p>

                <dl className="grid grid-cols-2 gap-3 pt-4 border-t border-botanical-800/15 text-xs mb-7">
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[10.5px] text-botanical-600">
                      Documented Matrix
                    </dt>
                    <dd className="font-semibold text-botanical-900 mt-0.5">
                      Botanical Extract (incl. Salt Base)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[10.5px] text-botanical-600">
                      Documentation
                    </dt>
                    <dd className="font-semibold text-botanical-900 mt-0.5">
                      Lot-Specific COA Records
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => handleInquireClick('Kratom Extract (Specifications & Wholesale Inquiry)')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
                >
                  <span>Inquire About Kratom Extract</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href="#quality"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-botanical-800 hover:text-botanical-950 border border-botanical-800/25 hover:border-botanical-800 rounded-sm transition-colors"
                >
                  <span>View Lot SBT4 COA Summary</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Wholesale Catalog Separation Notice */}
        <div className="mt-12 p-6 sm:p-7 rounded-sm bg-botanical-900 text-cream-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-earth-400 block mb-1">
              Registered Wholesale Partners
            </span>
            <p className="font-serif text-xl sm:text-2xl text-cream-50">
              Looking for active wholesale catalog access and account-specific ordering?
            </p>
            <p className="text-xs text-cream-200/80 mt-1">
              Public pages do not display wholesale pricing or private member inventory. Approved commercial accounts can sign in directly through our Wholesale Member Portal.
            </p>
          </div>

          <a
            href="https://members.purnaturekbulk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cream-100 hover:bg-white text-botanical-950 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
          >
            <span>Wholesale Member Portal</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

