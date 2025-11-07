const services = [
  {
    id: 'business-reconstruction',
    categoryId: 'financial-services',
    name: 'Business Reconstruction',
    description: 'Complete business restructuring solutions for your enterprise',
    subcategories: [
      'Change LLP Agreement',
      'Change Partnership Deed',
      'Close LLP',
      'Close Partnership Firm',
      'Convert OPC to Private Limited',
      'Convert Partnership to LLP',
      'Convert Partnership to Private Limited',
      'Convert Pvt Ltd to LLP',
      'Convert Pvt Ltd to Public Limited',
      'LLP to Private Limited Company',
      'Proprietorship to LLP',
      'Proprietorship to OPC',
      'Proprietorship to Partnership',
      'Proprietorship to Pvt Ltd',
      'Pvt Ltd Winding Up',
      'Winding Up OPC'
    ]
  },
  {
    id: 'funding',
    categoryId: 'financial-services',
    name: 'Funding',
    description: 'Business funding and investment solutions',
    subcategories: [
      'Main IPO',
      'SME IPO',
      'Pitch Deck & Financial Projections',
      'Project Report'
    ]
  },
  {
    id: 'gst',
    categoryId: 'financial-services',
    name: 'GST',
    description: 'Complete GST services and compliance',
    subcategories: [
      'GST Amendment',
      'GST Annual Return Filings',
      'GST Assessment & Litigation',
      'GST Audit',
      'GST Cancellation',
      'GST LUT (Letter of Undertaking)',
      'GST Notice Handling',
      'GST Refund',
      'GST Registration',
      'GST Return Filings',
      'Temporary GST Registration'
    ]
  },
  {
    id: 'income-tax',
    categoryId: 'financial-services',
    name: 'Income Tax',
    description: 'Income tax filing and consultancy services',
    subcategories: [
      '15CA / 15CB Filing',
      'Capital Gain Consultancy',
      'Income Tax Notice Handling',
      'ITR Filing (All Types)',
      'Lower TDS Certificate',
      'NRI Taxation Consultancy',
      'Tax Audit',
      'Tax Planning Consultancy',
      'TDS Return Filings',
      'Transaction Consultancy'
    ]
  },
  {
    id: 'ip',
    categoryId: 'financial-services',
    name: 'Intellectual Property (IP)',
    description: 'Complete IP protection and registration services',
    subcategories: [
      'Copyright Objection',
      'Copyright Registration',
      'Design Objection',
      'Design Registration',
      'International Trademark',
      'Logo Designing',
      'Patent Registration',
      'Series of Trademarks',
      'Trademark Hearing',
      'Trademark Infringement Notice',
      'Trademark Objection',
      'Trademark Opposition',
      'Trademark Rectification',
      'Trademark Registration',
      'Trademark Renewal',
      'Trademark Transfer',
      'USA Trademark Registration'
    ]
  },
  {
    id: 'iso',
    categoryId: 'financial-services',
    name: 'ISO',
    description: 'ISO certification and related services',
    subcategories: [
      'ISO Certification',
      'TCL Certification',
      'ISO 9001:2015 Quality Management System'
    ]
  },
  {
    id: 'startup',
    categoryId: 'financial-services',
    name: 'Startup',
    description: 'Complete startup registration and assistance',
    subcategories: [
      'Farmer Producer Company',
      'Film Producer Company',
      'Indian Subsidiary Registration',
      'LLP Registration',
      'Micro Finance Company',
      'NBFC Registration',
      'Nidhi Company Registration',
      'OPC Company Registration',
      'Partnership Firm Registration',
      'Private Limited Company Registration',
      'Proprietorship Registration',
      'Public Limited Company Registration',
      'Section 8 Company Registration',
      'Singapore Company Registration',
      'Society Registration',
      'Trust Registration',
      'UAE Company Registration',
      'UK Company Registration',
      'USA Company Registration'
    ]
  },
  {
    id: 'special-services',
    categoryId: 'financial-services',
    name: 'Special Services',
    description: 'Specialized business services',
    subcategories: [
      'Business Transformation Services',
      'Consultation',
      'Franchise Development & Expansion Services',
      'Franchisee Enquiry',
      'Process Audit & Improvement Service',
      'Smart Packages',
      'Standard Operating Procedure (SOP) Creation',
      'Virtual CFO Services',
      'Workflow Creation & Optimization Service'
    ]
  },
  {
    id: 'registration',
    categoryId: 'financial-services',
    name: 'Registration',
    description: 'Various registration services',
    subcategories: [
      '12A and 80G Registration',
      'Barcode Registration',
      'Darpan Registration',
      'Digital Signature (DSC)',
      'Drug License Registration',
      'ESIC Registration',
      'FSSAI Registration',
      'ICEGATE Registration',
      'IEC Registration',
      'ISI or BIS Registration',
      'NGO Registration',
      'Professional Tax Registration',
      'PSARA Registration',
      'RERA Registration',
      'Startup India Registration',
      'Trade License (Shop & Establishment)',
      'Udhyog Aadhar / MSME Registration'
    ]
  },
  {
    id: 'other-compliance',
    categoryId: 'financial-services',
    name: 'Other Compliance',
    description: 'Compliance services for businesses',
    subcategories: [
      'Bookkeeping & Accounting',
      'CA Certificate',
      'ESIC Return Filing',
      'FSSAI Renewal',
      'FSSAI Return Filing',
      'IEC Renewal',
      'PF Return Filing',
      'Professional Tax Return Filing'
    ]
  },
  {
    id: 'mca',
    categoryId: 'financial-services',
    name: 'MCA (Ministry of Corporate Affairs)',
    description: 'MCA compliance and services',
    subcategories: [
      'Appointment of Auditor (ADT-1)',
      'DIN KYC / DIN Reactivation',
      'Director Change / Director Resignation',
      'Increase Authorized Capital',
      'LLP Compliance / LLP Winding Up',
      'MOA / AOA Amendment',
      'Name Change',
      'New DIN',
      'OPC Compliance',
      'Pvt Ltd Compliance',
      'Pvt Ltd Winding Up',
      'Registered Office Change',
      'Remove Director',
      'Share Transfer'
    ]
  },
  {
    id: 'legal-documentation',
    categoryId: 'financial-services',
    name: 'Legal Documentation',
    description: 'Legal document preparation and services',
    subcategories: [
      'Appointment Letter 📄',
      'Agency Agreement 🤝',
      'Consultancy Agreement 📋',
      'Consumer Complaint Drafting 📝',
      'Founders Agreement 🤝',
      'Franchise Agreement 📋',
      'Freelancer Agreement 📄',
      'Gift Deed 🎁',
      'Joint Venture Agreement 🤝',
      'Lease Agreement 🏠',
      'Memorandum of Understanding (MOU) 📝',
      'Non-Disclosure Agreement (NDA) 🤐',
      'Offer Letter 📄',
      'Partnership Deed 🤝',
      'Promotion Letter 📈',
      'Resignation Letter 📤',
      'Share Purchase Agreement 📊',
      'Shareholders Agreement 🤝',
      'Term Sheet 📋'
    ]
  },
  {
    id: 'credit-repair',
    categoryId: 'credit-repair',
    name: 'Credit Repair Services',
    description: 'Improve your credit score and resolve financial issues',
    subcategories: [
      'Credit Score Analysis 📊',
      'Credit Report Review 📄',
      'Dispute Resolution for Incorrect Entries ⚖️',
      'Negotiation with Creditors 🤝',
      'Debt Management Plan 📋',
      'Credit Counseling 🗣️',
      'Credit Rebuilding Strategy 📈',
      'Identity Theft Resolution 🛡️'
    ]
  },
  // RTO Services
  {
    id: 'rto-services',
    categoryId: 'rto-services',
    name: 'RTO Services',
    description: 'Complete vehicle and driving license related services',
    subcategories: [
      'Address Update 🏠',
      'Mobile Number Update 📱',
      'Driving License Apply 🆕',
      'Driving License Renewal 🔁',
      'Learner License Apply 🆕',
      'License Slot Booking 📅',
      'Fitness Certificate 🏃',
      'NOC (No Objection Certificate) 📄',
      'Ownership / Transfer Certificate 🔄'
    ]
  },
  // Student Services
  {
    id: 'online-exam-applications',
    categoryId: 'student-services',
    name: 'All Online Exam Applications',
    description: 'Assistance with online exam applications for students',
    subcategories: [
      'Entrance Exams Application',
      'University Exam Registration',
      'Government Exam Applications',
      'Professional Certification Applications'
    ]
  },
  {
    id: 'hall-ticket-download',
    categoryId: 'student-services',
    name: 'Hall Ticket Download',
    description: 'Help with downloading hall tickets for various examinations',
    subcategories: [
      'University Hall Tickets',
      'Entrance Exam Admit Cards',
      'Government Exam Hall Tickets',
      'Professional Exam Admit Cards'
    ]
  },
  {
    id: 'scholarship-application',
    categoryId: 'student-services',
    name: 'Scholarship Application Assistance',
    description: 'Guidance and assistance with scholarship applications',
    subcategories: [
      'Government Scholarships',
      'Private Scholarships',
      'International Scholarships',
      'Merit-Based Scholarships',
      'Need-Based Scholarships'
    ]
  },
  {
    id: 'visa-services',
    categoryId: 'student-services',
    name: 'Visa Services',
    description: 'Student visa services for studying abroad',
    subcategories: [
      'Student Visa Application',
      'Visa Extension',
      'Visa Renewal',
      'Visa Consultation',
      'Document Preparation'
    ]
  }
];

export default services;