/**
 * Financial Planning Dashboard - Centralized Constants
 * All 2026 tax brackets, limits, and financial parameters
 * Source: RBC Wealth Management Key Numbers 2026
 * Updated: January 2026
 */

const FinancialConstants = {
    currentYear: 2026,

    // ===========================================
    // FEDERAL INCOME TAX BRACKETS 2026
    // ===========================================
    federalBrackets: {
        single: [
            { min: 0, max: 12400, rate: 0.10 },
            { min: 12400, max: 50400, rate: 0.12 },
            { min: 50400, max: 105700, rate: 0.22 },
            { min: 105700, max: 201775, rate: 0.24 },
            { min: 201775, max: 256225, rate: 0.32 },
            { min: 256225, max: 640600, rate: 0.35 },
            { min: 640600, max: Infinity, rate: 0.37 }
        ],
        mfj: [
            { min: 0, max: 24800, rate: 0.10 },
            { min: 24800, max: 100800, rate: 0.12 },
            { min: 100800, max: 211400, rate: 0.22 },
            { min: 211400, max: 403550, rate: 0.24 },
            { min: 403550, max: 512450, rate: 0.32 },
            { min: 512450, max: 768700, rate: 0.35 },
            { min: 768700, max: Infinity, rate: 0.37 }
        ],
        mfs: [
            { min: 0, max: 12400, rate: 0.10 },
            { min: 12400, max: 50400, rate: 0.12 },
            { min: 50400, max: 105700, rate: 0.22 },
            { min: 105700, max: 201775, rate: 0.24 },
            { min: 201775, max: 256225, rate: 0.32 },
            { min: 256225, max: 384350, rate: 0.35 },
            { min: 384350, max: Infinity, rate: 0.37 }
        ],
        hoh: [
            { min: 0, max: 17700, rate: 0.10 },
            { min: 17700, max: 67450, rate: 0.12 },
            { min: 67450, max: 105700, rate: 0.22 },
            { min: 105700, max: 201750, rate: 0.24 },
            { min: 201750, max: 256200, rate: 0.32 },
            { min: 256200, max: 640600, rate: 0.35 },
            { min: 640600, max: Infinity, rate: 0.37 }
        ]
    },

    // ===========================================
    // STANDARD DEDUCTIONS 2026
    // ===========================================
    standardDeduction: {
        single: 16100,
        mfj: 32200,
        mfs: 16100,
        hoh: 24150,
        dependent: 1350,
        // Additional for blind or aged (65+)
        additionalSingleHOH: 2050,
        additionalMFJ: 1650,
        // New senior deduction (age 65+)
        seniorDeduction: 6000,  // Reduced by 6% of income over $75K single / $150K MFJ
        seniorPhaseoutSingle: 75000,
        seniorPhaseoutMFJ: 150000
    },

    // ===========================================
    // CAPITAL GAINS TAX BRACKETS 2026
    // ===========================================
    capitalGainsBrackets: {
        single: [
            { min: 0, max: 49450, rate: 0.00 },
            { min: 49450, max: 545500, rate: 0.15 },
            { min: 545500, max: Infinity, rate: 0.20 }
        ],
        mfj: [
            { min: 0, max: 98900, rate: 0.00 },
            { min: 98900, max: 613700, rate: 0.15 },
            { min: 613700, max: Infinity, rate: 0.20 }
        ],
        mfs: [
            { min: 0, max: 49450, rate: 0.00 },
            { min: 49450, max: 306850, rate: 0.15 },
            { min: 306850, max: Infinity, rate: 0.20 }
        ],
        hoh: [
            { min: 0, max: 66200, rate: 0.00 },
            { min: 66200, max: 579600, rate: 0.15 },
            { min: 579600, max: Infinity, rate: 0.20 }
        ]
    },

    // ===========================================
    // FICA / PAYROLL TAXES 2026
    // ===========================================
    fica: {
        socialSecurityRate: 0.062,
        socialSecurityWageBase: 184500,  // Updated per RBC 2026
        medicareRate: 0.0145,
        medicareAdditionalRate: 0.009,
        medicareAdditionalThreshold: { single: 200000, mfj: 250000, mfs: 125000 }
    },

    // ===========================================
    // RETIREMENT CONTRIBUTION LIMITS 2026
    // ===========================================
    retirementLimits: {
        // 401(k), 403(b), 457(b), SAR-SEPs
        elective401k: 24500,
        catchUp401k: 8000,           // Age 50+
        catchUp401kSuper: 11250,     // Ages 60-63 (SECURE 2.0)

        // SIMPLE 401(k) and SIMPLE IRA
        simple: 17000,
        simpleCatchUp: 4000,         // Age 50+
        simpleCatchUpSuper: 5250,    // Ages 60-63

        // Traditional and Roth IRA (combined)
        iraContribution: 7500,
        iraCatchUp: 1100,            // Age 50+ (Updated to $1,100)

        // IRA deduction phaseouts (covered by employer plan)
        iraDeductionPhaseout: {
            single: { start: 81000, end: 91000 },
            mfj_covered: { start: 129000, end: 149000 },
            mfj_spouse_covered: { start: 242000, end: 252000 },
            mfs: { start: 0, end: 10000 }
        },

        // Roth IRA contribution phaseouts
        rothPhaseout: {
            single: { start: 153000, end: 168000 },
            mfj: { start: 242000, end: 252000 },
            mfs: { start: 0, end: 10000 }
        }
    },

    // ===========================================
    // HEALTH CARE 2026
    // ===========================================
    healthcare: {
        // FSA
        fsaHealthcare: 3400,

        // HSA
        hsaIndividual: 4400,
        hsaFamily: 8750,
        hsaCatchUp: 1000,  // Age 55+

        // HDHP minimums/maximums
        hdhpMinDeductibleIndividual: 1700,
        hdhpMinDeductibleFamily: 3400,
        hdhpMaxOOPIndividual: 8500,
        hdhpMaxOOPFamily: 17000
    },

    // ===========================================
    // SOCIAL SECURITY 2026
    // ===========================================
    socialSecurity: {
        maxTaxableEarnings: 184500,  // Updated per RBC 2026
        taxRate: 0.062,
        fullRetirementAge: 67,
        claimingFactors: {
            62: 0.700, 63: 0.750, 64: 0.800, 65: 0.867,
            66: 0.933, 67: 1.000, 68: 1.080, 69: 1.160, 70: 1.240
        },
        taxationThresholds: {
            single: { lower: 25000, upper: 34000 },
            mfj: { lower: 32000, upper: 44000 }
        }
    },

    // ===========================================
    // ESTATE & GIFT TAX 2026
    // ===========================================
    estateTax: {
        federalExemption: 15000000,      // Updated to $15M per RBC 2026
        gstExemption: 15000000,          // GST exemption (not portable)
        topRate: 0.40,
        annualGiftExclusion: 19000,
        noncitizenSpouseGift: 194000,    // Updated per RBC 2026
        // State estate tax thresholds
        stateThresholds: {
            'CT': 13610000, 'DC': 4528800, 'HI': 5490000,
            'IL': 4000000, 'ME': 6800000, 'MD': 5000000,
            'MA': 2000000, 'MN': 3000000, 'NY': 6940000,
            'OR': 1000000, 'RI': 1774583, 'VT': 5000000, 'WA': 2193000
        }
    },

    // ===========================================
    // AMT PARAMETERS 2026
    // ===========================================
    amt: {
        exemption: {
            single: 90100,
            hoh: 90100,
            mfj: 140200,
            mfs: 70100
        },
        phaseoutThreshold: {
            single: 500000,
            hoh: 500000,
            mfj: 1000000,
            mfs: 500000
        },
        // 26% up to $244,500 ($122,250 MFS), 28% above
        breakpoint: 244500,
        breakpointMFS: 122250
    },

    // ===========================================
    // EDUCATION 2026
    // ===========================================
    education: {
        lifetimeLearningCredit: {
            max: 2000,
            phaseout: {
                single: { start: 80000, end: 90000 },
                mfj: { start: 160000, end: 180000 }
            }
        },
        americanOpportunityCredit: {
            max: 2500,
            phaseout: {
                single: { start: 80000, end: 90000 },
                mfj: { start: 160000, end: 180000 }
            }
        },
        studentLoanInterestDeduction: {
            max: 2500,
            phaseout: {
                single: { start: 85000, end: 100000 },
                mfj: { start: 175000, end: 205000 }
            }
        },
        savingsBondExclusion: {
            phaseout: {
                single: { start: 101800, end: 116800 },
                mfj: { start: 152650, end: 182650 }
            }
        }
    },

    // ===========================================
    // RMD FACTORS (Uniform Lifetime Table - IRS Pub 590-B)
    // ===========================================
    rmdFactors: {
        72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9,
        78: 22.0, 79: 21.1, 80: 20.2, 81: 19.4, 82: 18.5,
        83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4,
        88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8,
        93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8,
        98: 7.3, 99: 6.8, 100: 6.4, 101: 6.0, 102: 5.6,
        103: 5.2, 104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1,
        108: 3.9, 109: 3.7, 110: 3.5, 111: 3.4, 112: 3.3,
        113: 3.1, 114: 3.0, 115: 2.9, 116: 2.8, 117: 2.7,
        118: 2.5, 119: 2.3, 120: 2.0
    },
    rmdStartAge: 73,

    // Helper: Get RMD start age based on birth year (SECURE 2.0)
    getRMDStartAge: function (birthYear) {
        return birthYear >= 1960 ? 75 : 73;
    },

    // ===========================================
    // SELF-EMPLOYMENT TAX 2026
    // ===========================================
    selfEmployment: {
        ssTaxRate: 0.124,           // 12.4% Social Security
        medicareTaxRate: 0.029,      // 2.9% Medicare
        totalRate: 0.153,            // 15.3% combined
        netEarningsFactor: 0.9235,   // 92.35% of gross is taxable
        deductionFactor: 0.5         // 50% of SE tax is deductible
    },

    // ===========================================
    // NIIT (Net Investment Income Tax)
    // ===========================================
    niit: {
        rate: 0.038,
        threshold: { single: 200000, mfj: 250000, mfs: 125000, hoh: 200000 }
    },

    // ===========================================
    // MILEAGE RATES 2026
    // ===========================================
    mileage: {
        business: null,     // TBD per RBC
        medical: null,      // TBD per RBC
        charitable: 0.14,
        moving: null        // TBD per RBC
    },

    // ===========================================
    // SALT DEDUCTION LIMITS (OBBBA 2026)
    // ===========================================
    salt: {
        limit: 40400,           // Standard SALT cap
        limitMFS: 20200,        // Married Filing Separately
        phasedownThreshold: 500000,
        phasedownRate: 0.30,
        phasedownFloor: 10000
    },

    // ===========================================
    // CHILD TAX CREDIT (OBBBA 2026)
    // ===========================================
    childTaxCredit: {
        amount: 2200,
        phaseoutThresholdMFJ: 400000,   // Statutory, not indexed
        phaseoutThresholdOther: 200000, // Statutory, not indexed
        phaseoutRatePer1000: 50
    },

    // ===========================================
    // IRMAA THRESHOLDS 2026 (Medicare Part B)
    // ===========================================
    irmaa: {
        standardPremium: 202.90,
        thresholds: {
            single: [
                { magiMax: 109000, surcharge: 0.0, totalPremium: 202.9 },
                { magiMax: 137000, surcharge: 81.2, totalPremium: 284.1 },
                { magiMax: 171000, surcharge: 202.9, totalPremium: 405.8 },
                { magiMax: 205000, surcharge: 324.6, totalPremium: 527.5 },
                { magiMax: 500000, surcharge: 446.3, totalPremium: 649.2 },
                { magiMax: Infinity, surcharge: 487.0, totalPremium: 689.9 }
            ],
            mfj: [
                { magiMax: 218000, surcharge: 0.0, totalPremium: 202.9 },
                { magiMax: 274000, surcharge: 81.2, totalPremium: 284.1 },
                { magiMax: 342000, surcharge: 202.9, totalPremium: 405.8 },
                { magiMax: 410000, surcharge: 324.6, totalPremium: 527.5 },
                { magiMax: 750000, surcharge: 446.3, totalPremium: 649.2 },
                { magiMax: Infinity, surcharge: 487.0, totalPremium: 689.9 }
            ],
            mfs: [
                { magiMax: 109000, surcharge: 0.0, totalPremium: 202.9 },
                { magiMax: 391000, surcharge: 446.3, totalPremium: 649.2 },
                { magiMax: Infinity, surcharge: 487.0, totalPremium: 689.9 }
            ]
        }
    },

    // ===========================================
    // SOCIAL SECURITY EARNINGS TEST 2026
    // ===========================================
    ssEarningsTest: {
        underFRALimit: 24480,       // Earnings limit for full year under FRA
        fraYearLimit: 65160,        // Earnings limit in year reaching FRA
        reductionRateUnderFRA: 2,   // $1 withheld per $2 over limit
        reductionRateFRAYear: 3     // $1 withheld per $3 over limit
    },

    // ===========================================
    // OBBBA DEDUCTIONS 2026 (One Big Beautiful Bill Act)
    // ===========================================
    obbba: {
        // Senior (65+) Additional Deduction
        senior65Plus: {
            amount: 6000,
            phaseoutThresholdSingle: 75000,
            phaseoutThresholdMFJ: 150000,
            phaseoutRate: 0.06
        },
        // Tips Deduction
        tips: {
            maxDeduction: 25000,
            phaseoutThresholdSingleHOH: 150000,
            phaseoutThresholdMFJ: 300000,
            phaseoutRate: 0.10
        },
        // Overtime Deduction
        overtime: {
            maxSingleHOH: 12500,
            maxMFJ: 25000,
            phaseoutThresholdSingleHOH: 150000,
            phaseoutThresholdMFJ: 300000,
            phaseoutRate: 0.10
        },
        // Auto Loan Interest Deduction
        autoLoanInterest: {
            maxDeduction: 10000,
            phaseoutThresholdSingle: 100000,
            phaseoutThresholdMFJ: 200000,
            phaseoutRate: 0.20
        }
    },

    // ===========================================
    // SECTION 415 LIMITS 2026
    // ===========================================
    section415: {
        totalDCLimit: 72000,        // 415(c) total defined contribution limit
        compensationLimit: 360000   // 401(a)(17) compensation limit
    },

    // ===========================================
    // TAX CALCULATION CONSTANTS
    // ===========================================
    taxCalculationRates: {
        medicalExpenseAGIFloor: 0.075,      // 7.5% of AGI
        charitableContributionLimit: 0.60,  // 60% of AGI max
        seNetEarningsFactor: 0.9235,        // 92.35% of gross SE income
        seDeductionFactor: 0.5,             // 50% of SE tax deductible
        sepIraContributionRate: 0.20,       // 20% of net earnings
        amtPhaseoutRate: 0.25               // 25 cents per dollar over threshold
    },

    // ===========================================
    // QBI DEDUCTION (Section 199A) 2026
    // ===========================================
    qbi: {
        deductionRate: 0.20,  // 20% deduction
        thresholds: {
            single: { min: 201750, max: 276750 },
            mfj: { min: 403500, max: 553500 },
            mfs: { min: 201775, max: 276775 },
            hoh: { min: 201750, max: 276750 }
        }
    },

    // ===========================================
    // PASSIVE ACTIVITY LOSS LIMITS (Statutory)
    // ===========================================
    passiveActivityLoss: {
        agiPhaseout: { min: 100000, max: 150000 },
        maxDeduction: 25000
    }
};

// ===========================================
// UTILITY FUNCTIONS
// ===========================================
const TaxCalculator = {
    calculateFederalTax: function (taxableIncome, filingStatus) {
        filingStatus = filingStatus || 'mfj';
        const brackets = FinancialConstants.federalBrackets[filingStatus] || FinancialConstants.federalBrackets.mfj;
        let tax = 0, remaining = taxableIncome;
        for (const bracket of brackets) {
            const taxableInBracket = Math.min(remaining, bracket.max - bracket.min);
            tax += taxableInBracket * bracket.rate;
            remaining -= taxableInBracket;
            if (remaining <= 0) break;
        }
        return tax;
    },

    getMarginalRate: function (taxableIncome, filingStatus) {
        filingStatus = filingStatus || 'mfj';
        const brackets = FinancialConstants.federalBrackets[filingStatus] || FinancialConstants.federalBrackets.mfj;
        for (const bracket of brackets) {
            if (taxableIncome <= bracket.max) return bracket.rate;
        }
        return 0.37;
    },

    calculateCapitalGainsTax: function (gain, ordinaryIncome, filingStatus) {
        filingStatus = filingStatus || 'mfj';
        const brackets = FinancialConstants.capitalGainsBrackets[filingStatus] || FinancialConstants.capitalGainsBrackets.mfj;
        let tax = 0, gainRemaining = gain;

        for (const bracket of brackets) {
            if (ordinaryIncome >= bracket.max) continue;
            const spaceInBracket = bracket.max - Math.max(ordinaryIncome, bracket.min);
            const taxableInBracket = Math.min(gainRemaining, spaceInBracket);
            tax += taxableInBracket * bracket.rate;
            gainRemaining -= taxableInBracket;
            if (gainRemaining <= 0) break;
        }
        return tax;
    },

    calculateFICA: function (wages, ytdWages) {
        ytdWages = ytdWages || 0;
        const fica = FinancialConstants.fica;
        const ssWages = Math.min(wages, Math.max(0, fica.socialSecurityWageBase - ytdWages));
        const ssTax = ssWages * fica.socialSecurityRate;
        const medicareTax = wages * fica.medicareRate;
        return { socialSecurity: ssTax, medicare: medicareTax, total: ssTax + medicareTax };
    },

    calculateRMD: function (age, balance) {
        if (age < FinancialConstants.rmdStartAge) return 0;
        const factor = FinancialConstants.rmdFactors[Math.min(age, 100)] || 6.4;
        return balance / factor;
    },

    adjustSSBenefit: function (fraBenefit, claimingAge) {
        const factor = FinancialConstants.socialSecurity.claimingFactors[claimingAge] || 1.0;
        return fraBenefit * factor;
    },

    getBracketRoom: function (taxableIncome, targetRate, filingStatus) {
        filingStatus = filingStatus || 'mfj';
        const brackets = FinancialConstants.federalBrackets[filingStatus] || FinancialConstants.federalBrackets.mfj;
        for (const bracket of brackets) {
            if (bracket.rate === targetRate) {
                return Math.max(0, bracket.max - taxableIncome);
            }
        }
        return 0;
    },

    getStandardDeduction: function (filingStatus, age65Plus, blind, numOver65) {
        filingStatus = filingStatus || 'mfj';
        numOver65 = numOver65 || (age65Plus ? 1 : 0);

        let deduction = FinancialConstants.standardDeduction[filingStatus] || FinancialConstants.standardDeduction.mfj;

        // Additional for age 65+ or blind
        const additional = (filingStatus === 'single' || filingStatus === 'hoh')
            ? FinancialConstants.standardDeduction.additionalSingleHOH
            : FinancialConstants.standardDeduction.additionalMFJ;

        deduction += additional * numOver65;
        if (blind) deduction += additional;

        return deduction;
    },

    calculateNIIT: function (magi, netInvestmentIncome, filingStatus) {
        filingStatus = filingStatus || 'mfj';
        const threshold = FinancialConstants.niit.threshold[filingStatus] || 250000;
        const excessMAGI = Math.max(0, magi - threshold);
        const taxableAmount = Math.min(excessMAGI, netInvestmentIncome);
        return taxableAmount * FinancialConstants.niit.rate;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.FinancialConstants = FinancialConstants;
    window.TaxCalculator = TaxCalculator;
}
