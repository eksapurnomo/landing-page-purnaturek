export interface AlkaloidResult {
  analyte: string;
  valuePercent: string;
  valueMgPerG: string;
  lod: string;
  loq: string;
  methodNote?: string;
}

export interface SolventSummaryItem {
  analyte: string;
  result: string;
  lod: string;
  loq: string;
  limit?: string;
}

export interface CoaReportData {
  id: string;
  fileName: string;
  laboratoryName: string;
  laboratoryLocation: string;
  accreditation: string;
  clientName: string;
  sampleName: string;
  sampleCode: string;
  matrixName: string;
  batchId: string;
  receivedDate: string;
  reportedDate: string;
  sampleSizeOrUncertainty: string;
  primaryMethod: string;
  secondaryMethod?: string;
  solventMethod: string;
  summaryHighlights: {
    label: string;
    value: string;
    subtext: string;
  }[];
  alkaloidsHigh: AlkaloidResult[];
  alkaloidsLow?: AlkaloidResult[];
  solventsNotable: SolventSummaryItem[];
  solventsNonDetectedCount: number;
  solventsNonDetectedList: string[];
  reproductionNotice: string;
}

export const DOCUMENTED_COA_REPORTS: CoaReportData[] = [
  {
    id: 'cambium-sbt4',
    fileName: 'COA_SBT4_102226.pdf',
    laboratoryName: 'Cambium Analytica',
    laboratoryLocation: '1230 Woodmere Ave, Traverse City, MI 49686, USA',
    accreditation: 'ISO/IEC 17025:2017 – #108157',
    clientName: 'Purnature Khatulistiwa LLC',
    sampleName: 'Kratom Extract - Satl Base',
    sampleCode: 'DTS-261015-001',
    matrixName: 'Botanical Extract - Salt',
    batchId: 'SBT4',
    receivedDate: 'Oct 16, 2026',
    reportedDate: 'Oct 22, 2026',
    sampleSizeOrUncertainty: 'Batch Size: 4mg/g | Sample Size: 4g',
    primaryMethod: 'ALKU — ANA-TM-052 (Determination of Kratom Alkaloid Content by UPLC-DAD)',
    secondaryMethod: 'ALKL — ANA-TM-047 (Determination of Kratom Alkaloid Content by LC-TQ)',
    solventMethod: 'SOLHM — ANA-TM-053 (Determination of Residual Solvents — USP <467>)',
    summaryHighlights: [
      {
        label: 'Mitragynine (UPLC-DAD)',
        value: '82.9789 %',
        subtext: '829.7890 mg/g (Lot SBT4)',
      },
      {
        label: 'Total Major Alkaloids',
        value: '91.6926 %',
        subtext: '916.9257 mg/g combined major profile',
      },
      {
        label: 'Total Minor Alkaloids (LC-TQ)',
        value: '0.00499 %',
        subtext: '0.04989 mg/g (7-Hydroxymitragynine)',
      },
      {
        label: 'Residual Solvents Panel',
        value: 'USP <467>',
        subtext: 'ANA-TM-053 (29 analytes/groups evaluated)',
      },
    ],
    alkaloidsHigh: [
      {
        analyte: 'Mitragynine',
        valuePercent: '82.9789 %',
        valueMgPerG: '829.7890 mg/g',
        lod: '4.1068 mg/g',
        loq: '8.2136 mg/g',
      },
      {
        analyte: 'Paynantheine',
        valuePercent: '4.2603 %',
        valueMgPerG: '42.6026 mg/g',
        lod: '4.1068 mg/g',
        loq: '8.2136 mg/g',
      },
      {
        analyte: 'Speciogynine',
        valuePercent: '2.9791 %',
        valueMgPerG: '29.7909 mg/g',
        lod: '4.1068 mg/g',
        loq: '8.2136 mg/g',
      },
      {
        analyte: 'Speciociliatine',
        valuePercent: '1.4743 %',
        valueMgPerG: '14.7432 mg/g',
        lod: '4.1068 mg/g',
        loq: '8.2136 mg/g',
      },
      {
        analyte: 'Total Major Alkaloids *',
        valuePercent: '91.6926 %',
        valueMgPerG: '916.9257 mg/g',
        lod: 'N/A',
        loq: 'N/A',
        methodNote: 'Calculated as the sum of Mitragynine, Paynantheine, Speciociliatine, and Speciogynine.',
      },
    ],
    alkaloidsLow: [
      {
        analyte: '7-Hydroxymitragynine',
        valuePercent: '0.00499 %',
        valueMgPerG: '0.04989 mg/g',
        lod: '1.99601 ug/g',
        loq: '3.99202 ug/g',
      },
      {
        analyte: 'Mitraphylline',
        valuePercent: 'ND',
        valueMgPerG: 'N/A',
        lod: '3.99202 ug/g',
        loq: '7.98403 ug/g',
      },
      {
        analyte: 'Total Minor Alkaloids *',
        valuePercent: '0.00499 %',
        valueMgPerG: '0.04989 mg/g',
        lod: 'N/A',
        loq: 'N/A',
        methodNote: 'Calculated as the sum of 7-Hydroxymitragynine and Mitraphylline.',
      },
    ],
    solventsNotable: [
      {
        analyte: 'Ethanol',
        result: '216.468 ug/g',
        lod: '5.021 ug/g',
        loq: '10.042 ug/g',
        limit: 'N/A',
      },
      {
        analyte: 'Methanol',
        result: '<LOQ',
        lod: '5.021 ug/g',
        loq: '10.042 ug/g',
        limit: 'N/A',
      },
      {
        analyte: 'Total Butanes / Total Hexanes / Total Pentanes',
        result: '0.000 ug/g',
        lod: 'N/A',
        loq: 'N/A',
        limit: 'N/A',
      },
    ],
    solventsNonDetectedCount: 24,
    solventsNonDetectedList: [
      '1,1-Dichloroethene',
      '1,2-Dichloroethane',
      '2-Methylbutane',
      '2-Methylpentane',
      '2,2-Dimethylbutane',
      '2,3-Dimethylbutane',
      '3-Methylpentane',
      'Acetone',
      'Acetonitrile',
      'Benzene',
      'Butane',
      'Chloroform',
      'Ethyl Acetate',
      'Ethyl Ether',
      'Ethylene Oxide',
      'Heptane',
      'Hexane',
      'Isobutane',
      'Isopropyl Alcohol',
      'Methylene Chloride',
      'Neopentane',
      'Pentane',
      'Propane',
      'Toluene',
      'Total Xylenes',
      'Trichloroethylene',
    ],
    reproductionNotice:
      'This report may not be reproduced except in full without approval from Cambium Analytica. The results herein relate only to the sample & batch identified in this report.',
  },
  {
    id: 'pharmlabs-sbt4',
    fileName: 'COA_SBT4_102026Pharmlab.pdf',
    laboratoryName: 'PharmLabs San Diego',
    laboratoryLocation: '6696 Mesa Ridge Rd #A, San Diego, CA 92121, USA',
    accreditation: 'ISO/IEC 17025:2017 Acc. 85368 | PJLA Testing Acc. #85368',
    clientName: 'Purnature Khatulistiwa LLC',
    sampleName: 'Salt Based Extract- SBT4',
    sampleCode: 'SD261020-068 (147738)',
    matrixName: 'Extract',
    batchId: 'SBT4',
    receivedDate: 'Oct 20, 2026',
    reportedDate: 'Oct 23, 2026',
    sampleSizeOrUncertainty: 'Expanded Uncertainty (KTM): approx. ±7.81% at 95% Confidence Level',
    primaryMethod: 'Kratom (KTM) — Instrument HPLC VWD | Method SOP-KTM (Analyzed Oct 22, 2026)',
    solventMethod: 'Residual Solvents (RES) — Instrument GC/FID with Headspace Analyzer | Method SOP-006 (Analyzed Oct 21, 2026)',
    summaryHighlights: [
      {
        label: 'Mitragynine (MITG)',
        value: '83.06 %',
        subtext: '830.63 mg/g (HPLC VWD)',
      },
      {
        label: 'Speciociliatine (SPCL)',
        value: '5.59 %',
        subtext: '55.90 mg/g (HPLC VWD)',
      },
      {
        label: '7-Hydroxy Mitragynine (7HMG)',
        value: 'ND',
        subtext: 'Not Detected (LOD 0.008 ppm / LOQ 0.025 ppm)',
      },
      {
        label: 'Residual Solvents (RES)',
        value: '20 Analytes',
        subtext: 'GC/FID Headspace Method SOP-006',
      },
    ],
    alkaloidsHigh: [
      {
        analyte: 'Mitragynine (MITG)',
        valuePercent: '83.06 %',
        valueMgPerG: '830.63 mg/g',
        lod: '0.018 ppm',
        loq: '0.054 ppm',
      },
      {
        analyte: 'Speciociliatine (SPCL)',
        valuePercent: '5.59 %',
        valueMgPerG: '55.90 mg/g',
        lod: '0.004 ppm',
        loq: '0.011 ppm',
      },
      {
        analyte: '7-hydroxy Mitragynine (7HMG)',
        valuePercent: 'ND',
        valueMgPerG: 'ND',
        lod: '0.008 ppm',
        loq: '0.025 ppm',
      },
      {
        analyte: 'MGM-15 (MGM)',
        valuePercent: 'ND',
        valueMgPerG: 'ND',
        lod: '0.186 ppm',
        loq: '0.562 ppm',
      },
      {
        analyte: 'Speciogynine (SPEG)',
        valuePercent: 'ND',
        valueMgPerG: 'ND',
        lod: '0.007 ppm',
        loq: '0.02 ppm',
      },
    ],
    solventsNotable: [
      {
        analyte: 'Methanol (Metha)',
        result: '<LOQ',
        lod: '1.176 ug/g',
        loq: '3.92 ug/g',
        limit: '3000 ug/g',
      },
      {
        analyte: 'Ethanol (Ethan)',
        result: '<LOQ',
        lod: '0.048 ug/g',
        loq: '0.4 ug/g',
        limit: '5000 ug/g',
      },
      {
        analyte: 'Ethylene Oxide (EthOx)',
        result: '1.5 ug/g',
        lod: '0.08 ug/g',
        loq: '0.4 ug/g',
        limit: '1 ug/g',
      },
    ],
    solventsNonDetectedCount: 17,
    solventsNonDetectedList: [
      'Propane (Prop)',
      'Butane (But)',
      'Pentane (Pen)',
      'Ethyl Ether (EthEt)',
      'Acetone (Acet)',
      'Isopropanol (2-Pro)',
      'Acetonitrile (Acetonit)',
      'Methylene Chloride (MetCh)',
      'Hexane (Hex)',
      'Ethyl Acetate (EthAc)',
      'Chloroform (Clo)',
      'Benzene (Ben)',
      '1-2-Dichloroethane (12-Dich)',
      'Heptane (Hep)',
      'Trichloroethylene (TriClEth)',
      'Toluene',
      'Xylenes (Xyl)',
    ],
    reproductionNotice:
      'This report shall not be reproduced, except in full, without the prior written approval of PharmLabs. This COA may not be used in whole or in part for marketing, advertising, promotional, or labeling purposes without the prior written consent of PharmLabs.',
  },
];

export interface ImageAssetInfo {
  file: string;
  section: string;
  description: string;
  source: string;
}

export const IMAGE_ASSET_SOURCES: ImageAssetInfo[] = [
  {
    file: '/images/hero-kratom-botanical.jpg',
    section: 'Hero Section',
    description: 'Mitragyna speciosa fresh leaves, fine green botanical powder jar, and sealed botanical extract container on limestone.',
    source: 'Original bespoke AI-generated editorial photography created for PurNatureK landing page (owned asset, royalty-free).',
  },
  {
    file: '/images/sourcing-indonesia.jpg',
    section: 'About PurNatureK / Indonesian Sourcing',
    description: 'Illustrative editorial photograph of Indonesian botanical leaf inspection on bamboo drying racks in West Kalimantan.',
    source: 'Original bespoke AI-generated editorial illustration (illustrative representation; does not depict actual employees).',
  },
  {
    file: '/images/product-kratom-powder.jpg',
    section: 'Products & Supply — Kratom Powder',
    description: 'Fine milled green Mitragyna speciosa botanical powder in laboratory jar with stainless scoop and wholesale barrier pouches.',
    source: 'Original bespoke AI-generated studio product photography created for PurNatureK landing page.',
  },
  {
    file: '/images/product-kratom-extract.jpg',
    section: 'Products & Supply — Kratom Extract',
    description: 'Concentrated botanical salt-based extract powder in borosilicate glass dish alongside amber laboratory vials.',
    source: 'Original bespoke AI-generated studio product photography modeled after Batch SBT4 extract matrix.',
  },
  {
    file: '/images/lab-documentation.jpg',
    section: 'Quality & Documentation',
    description: 'Analytical laboratory balance, autosampler vials, and chromatographic peak evaluation environment.',
    source: 'Original bespoke AI-generated analytical laboratory visual + workspace asset how-to-identify-lab-tested-kratom-phoenix-300x169.jpg.',
  },
  {
    file: '/images/wholesale-partnership.jpg',
    section: 'Wholesale Partnership',
    description: 'Illustrative international B2B commercial discussion examining botanical sample containers and documentation.',
    source: 'Original bespoke AI-generated editorial photography (illustrative representation; does not depict actual partners or customers).',
  },
];

