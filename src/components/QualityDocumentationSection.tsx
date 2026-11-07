import React, { useState } from 'react';
import {
  CheckCircle2,
  FileSpreadsheet,
  FlaskConical,
  Info,
  Microscope,
  ShieldAlert,
} from 'lucide-react';
import { DOCUMENTED_COA_REPORTS } from '../data/coaData';

interface QualityDocumentationProps {
  onRequestDocumentation?: (batchTopic: string) => void;
}

export const QualityDocumentationSection: React.FC<QualityDocumentationProps> = ({
  onRequestDocumentation,
}) => {
  const [selectedReportId, setSelectedReportId] = useState<string>(
    DOCUMENTED_COA_REPORTS[0].id
  );
  const [showAllNonDetected, setShowAllNonDetected] = useState<boolean>(false);

  const activeReport =
    DOCUMENTED_COA_REPORTS.find((r) => r.id === selectedReportId) ||
    DOCUMENTED_COA_REPORTS[0];

  return (
    <section
      id="quality"
      className="py-24 lg:py-32 bg-cream-100 text-botanical-900 border-b border-botanical-800/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Editorial Laboratory Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-earth-500" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-botanical-600">
                Quality &amp; Analytical Documentation
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-botanical-950 mb-5">
              Batch-Specific Analytical Documentation for Wholesale Evaluation.
            </h2>

            <p className="text-sm sm:text-base text-botanical-800/90 leading-relaxed mb-4">
              PurNatureK supports wholesale product inquiries with lot-specific analytical documentation prepared for{' '}
              <strong className="font-semibold text-botanical-950">
                Purnature Khatulistiwa LLC
              </strong>{' '}
              by independent third-party analytical laboratories.
            </p>

            <p className="text-sm text-botanical-700 leading-relaxed">
              Below is a factual summary of documented analytical records on file for{' '}
              <strong className="font-semibold text-botanical-900">
                Batch / Lot Code SBT4
              </strong>{' '}
              (Salt-Based Botanical Extract), evaluated independently by{' '}
              <span className="font-medium text-botanical-900">Cambium Analytica</span> and{' '}
              <span className="font-medium text-botanical-900">PharmLabs San Diego</span>.
            </p>
          </div>

          {/* Right Laboratory Imagery Collage */}
          <div className="lg:col-span-5">
            <div className="bg-cream-50 p-3.5 rounded-sm border border-botanical-800/15 shadow-editorial">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-botanical-900">
                <img
                  src="/images/lab-documentation.jpg"
                  alt="Analytical laboratory balance weighing botanical extract sample beside HPLC autosampler vials and chromatographic profile"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-3 flex items-center gap-3 pt-2 border-t border-botanical-800/10">
                <img
                  src="/images/how-to-identify-lab-tested-kratom-phoenix-300x169.jpg"
                  alt="Botanical powder sample jar, bulk pouch, and analytical test report sheet"
                  loading="lazy"
                  className="w-20 h-12 object-cover rounded-sm border border-botanical-800/15 shrink-0"
                />
                <p className="text-[11px] text-botanical-700 leading-snug">
                  <strong className="font-semibold text-botanical-900 block">
                    Chromatographic &amp; Headspace Analysis
                  </strong>
                  Documented evaluation via UPLC-DAD, LC-TQ, HPLC VWD, and USP &lt;467&gt; / GC-FID Headspace methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Laboratory Report Selector Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-botanical-800/15">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-botanical-600 block">
                Documented Batch Records On File (Client: Purnature Khatulistiwa LLC)
              </span>
              <h3 className="font-serif text-2xl font-semibold text-botanical-950 mt-0.5">
                Select Analytical Record to Inspect Factual Summary
              </h3>
            </div>

            <div className="inline-flex rounded-sm p-1 bg-cream-200 border border-botanical-800/15">
              {DOCUMENTED_COA_REPORTS.map((report) => {
                const isSelected = report.id === activeReport.id;
                return (
                  <button
                    key={report.id}
                    type="button"
                    onClick={() => {
                      setSelectedReportId(report.id);
                      setShowAllNonDetected(false);
                    }}
                    className={`px-4 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase rounded-sm transition-all ${
                      isSelected
                        ? 'bg-botanical-800 text-cream-50 shadow-sm'
                        : 'text-botanical-800 hover:bg-cream-100'
                    }`}
                  >
                    {report.laboratoryName} (Batch {report.batchId})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active COA Factual Summary Card */}
        <div className="bg-cream-50 rounded-sm border border-botanical-800/20 shadow-editorial overflow-hidden">
          {/* Top Metadata Banner */}
          <div className="bg-botanical-900 text-cream-50 px-6 py-6 sm:px-8 border-b border-botanical-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 text-[10.5px] font-mono uppercase tracking-widest bg-earth-500/25 text-cream-100 border border-earth-400/40 rounded-sm">
                    Batch / Lot: {activeReport.batchId}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10.5px] font-mono uppercase tracking-widest bg-cream-100/10 text-cream-200 rounded-sm">
                    Sample ID: {activeReport.sampleCode}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10.5px] font-mono uppercase tracking-widest bg-cream-100/10 text-cream-200 rounded-sm">
                    Record: {activeReport.fileName}
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-medium text-cream-50">
                  {activeReport.laboratoryName} — {activeReport.sampleName}
                </h4>
                <p className="text-xs text-cream-200/80 mt-1">
                  {activeReport.laboratoryLocation} • Documented Lab Accreditation:{' '}
                  <span className="font-mono text-cream-100">
                    {activeReport.accreditation}
                  </span>
                </p>
              </div>

              <div className="text-xs font-mono text-cream-200 space-y-1 lg:text-right shrink-0">
                <div>Client: {activeReport.clientName}</div>
                <div>Matrix: {activeReport.matrixName}</div>
                <div>
                  Received: {activeReport.receivedDate} | Reported: {activeReport.reportedDate}
                </div>
                <div className="text-[11px] text-cream-300">
                  {activeReport.sampleSizeOrUncertainty}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Key Factual Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-botanical-800/10 bg-cream-100/60 border-b border-botanical-800/15">
            {activeReport.summaryHighlights.map((item) => (
              <div key={item.label} className="p-5 sm:p-6">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-botanical-600 block">
                  {item.label}
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 mt-1 block">
                  {item.value}
                </span>
                <span className="text-[11px] text-botanical-700 mt-1 block">
                  {item.subtext}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Analytical Tables */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Cols: Alkaloid Determination */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical className="w-4 h-4 text-botanical-800" aria-hidden="true" />
                  <h5 className="text-xs font-mono uppercase tracking-[0.16em] font-semibold text-botanical-900">
                    Kratom Alkaloid Profile (Documented Results)
                  </h5>
                </div>
                <p className="text-xs font-mono text-botanical-600 mb-3">
                  {activeReport.primaryMethod}
                </p>

                <div className="overflow-x-auto border border-botanical-800/15 rounded-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-cream-200/70 text-botanical-800 font-mono uppercase text-[10.5px] border-b border-botanical-800/15">
                        <th className="py-2.5 px-3.5">Analyte</th>
                        <th className="py-2.5 px-3.5">Result (%)</th>
                        <th className="py-2.5 px-3.5">Result (mg/g)</th>
                        <th className="py-2.5 px-3.5">LOD</th>
                        <th className="py-2.5 px-3.5">LOQ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-botanical-800/10 bg-cream-50">
                      {activeReport.alkaloidsHigh.map((row) => (
                        <tr
                          key={row.analyte}
                          className={
                            row.analyte.includes('Total')
                              ? 'bg-botanical-800/5 font-semibold text-botanical-950'
                              : 'text-botanical-800'
                          }
                        >
                          <td className="py-2.5 px-3.5 font-medium">{row.analyte}</td>
                          <td className="py-2.5 px-3.5 font-mono">{row.valuePercent}</td>
                          <td className="py-2.5 px-3.5 font-mono">{row.valueMgPerG}</td>
                          <td className="py-2.5 px-3.5 font-mono text-botanical-600">
                            {row.lod}
                          </td>
                          <td className="py-2.5 px-3.5 font-mono text-botanical-600">
                            {row.loq}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Secondary Low-Level Alkaloids Table (present on Cambium COA) */}
              {activeReport.alkaloidsLow && (
                <div>
                  <p className="text-xs font-mono text-botanical-600 mb-2">
                    {activeReport.secondaryMethod}
                  </p>
                  <div className="overflow-x-auto border border-botanical-800/15 rounded-sm">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-cream-200/70 text-botanical-800 font-mono uppercase text-[10.5px] border-b border-botanical-800/15">
                          <th className="py-2 px-3.5">Low-Level Analyte</th>
                          <th className="py-2 px-3.5">Result (%)</th>
                          <th className="py-2 px-3.5">Result (mg/g)</th>
                          <th className="py-2 px-3.5">LOD</th>
                          <th className="py-2 px-3.5">LOQ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-botanical-800/10 bg-cream-50">
                        {activeReport.alkaloidsLow.map((row) => (
                          <tr
                            key={row.analyte}
                            className={
                              row.analyte.includes('Total')
                                ? 'bg-botanical-800/5 font-semibold text-botanical-950'
                                : 'text-botanical-800'
                            }
                          >
                            <td className="py-2 px-3.5 font-medium">{row.analyte}</td>
                            <td className="py-2 px-3.5 font-mono">{row.valuePercent}</td>
                            <td className="py-2 px-3.5 font-mono">{row.valueMgPerG}</td>
                            <td className="py-2 px-3.5 font-mono text-botanical-600">
                              {row.lod}
                            </td>
                            <td className="py-2 px-3.5 font-mono text-botanical-600">
                              {row.loq}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Cols: Residual Solvents Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Microscope className="w-4 h-4 text-botanical-800" aria-hidden="true" />
                  <h5 className="text-xs font-mono uppercase tracking-[0.16em] font-semibold text-botanical-900">
                    Residual Solvents Evaluation
                  </h5>
                </div>
                <p className="text-xs font-mono text-botanical-600 mb-3">
                  {activeReport.solventMethod}
                </p>

                <div className="overflow-x-auto border border-botanical-800/15 rounded-sm mb-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-cream-200/70 text-botanical-800 font-mono uppercase text-[10.5px] border-b border-botanical-800/15">
                        <th className="py-2 px-3">Analyte</th>
                        <th className="py-2 px-3">Result</th>
                        <th className="py-2 px-3">LOQ</th>
                        <th className="py-2 px-3">Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-botanical-800/10 bg-cream-50">
                      {activeReport.solventsNotable.map((s) => (
                        <tr key={s.analyte} className="text-botanical-800">
                          <td className="py-2 px-3 font-medium">{s.analyte}</td>
                          <td className="py-2 px-3 font-mono">{s.result}</td>
                          <td className="py-2 px-3 font-mono text-botanical-600">{s.loq}</td>
                          <td className="py-2 px-3 font-mono text-botanical-600">
                            {s.limit || 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Non-Detected Solvents Summary */}
                <div className="p-4 rounded-sm bg-cream-100 border border-botanical-800/15">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-botanical-900">
                      <CheckCircle2 className="w-4 h-4 text-botanical-700" aria-hidden="true" />
                      <span>
                        {activeReport.solventsNonDetectedCount} Additional Tested Solvents: ND (Not Detected)
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAllNonDetected((prev) => !prev)}
                      className="text-[11px] font-mono uppercase tracking-wider text-botanical-700 hover:text-botanical-950 underline"
                    >
                      {showAllNonDetected ? 'Hide List' : 'View Full List'}
                    </button>
                  </div>

                  {showAllNonDetected && (
                    <p className="mt-2 text-[11px] font-mono text-botanical-700 leading-relaxed">
                      {activeReport.solventsNonDetectedList.join(' • ')}
                    </p>
                  )}
                </div>
              </div>

              {/* Laboratory Reproduction Policy & Wholesale COA Request Box */}
              <div className="p-4 rounded-sm bg-cream-200/70 border border-botanical-800/20 text-xs space-y-2.5">
                <div className="flex items-start gap-2 text-botanical-900 font-semibold">
                  <ShieldAlert className="w-4 h-4 text-earth-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Third-Party Laboratory Distribution Notice</span>
                </div>
                <p className="text-[11.5px] text-botanical-800 leading-relaxed italic">
                  &ldquo;{activeReport.reproductionNotice}&rdquo;
                </p>
                <p className="text-[11.5px] text-botanical-700 leading-relaxed">
                  In accordance with third-party laboratory reproduction terms, public marketing pages present factual analytical data summaries rather than automated public PDF downloads. Complete, unaltered COA documents are furnished directly to verified B2B partners upon commercial inquiry.
                </p>
                <div className="pt-1">
                  <a
                    href="#contact"
                    onClick={() =>
                      onRequestDocumentation &&
                      onRequestDocumentation(
                        `Batch ${activeReport.batchId} (${activeReport.laboratoryName} COA Verification)`
                      )
                    }
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-[11px] font-semibold tracking-[0.14em] uppercase rounded-sm transition-colors"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Request Full Batch COA for Commercial Review</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scope Footnote */}
          <div className="px-6 py-3.5 sm:px-8 bg-cream-200/50 border-t border-botanical-800/10 flex items-center gap-2 text-[11px] text-botanical-700">
            <Info className="w-3.5 h-3.5 text-botanical-600 shrink-0" aria-hidden="true" />
            <span>
              Analytical values shown above apply strictly to the specific sample ({activeReport.sampleCode}) and batch ({activeReport.batchId}) identified on the respective laboratory report and do not represent other lots or unanalyzed batches.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

