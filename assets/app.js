
const KEY = "bml-mentoring-prototype-v3-full-directory";
const TARGET = 5;
const mentorId = "m2515";

const todayPlus = (days) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const seed = {
  categories: [
    { id:"c1", name:"Career Development" },
    { id:"c2", name:"Leadership" },
    { id:"c3", name:"Banking" },
    { id:"c4", name:"Technology" },
    { id:"c5", name:"Professional Development" }
  ],
  expertise: [
    { id:"e1", categoryId:"c1", name:"Career Navigation" },
    { id:"e2", categoryId:"c1", name:"Career Planning" },
    { id:"e3", categoryId:"c2", name:"People Leadership" },
    { id:"e4", categoryId:"c2", name:"Managing Teams" },
    { id:"e5", categoryId:"c3", name:"Retail Banking" },
    { id:"e6", categoryId:"c3", name:"Corporate Credit" },
    { id:"e7", categoryId:"c4", name:"Digital Tools" },
    { id:"e8", categoryId:"c4", name:"Data & Analytics" },
    { id:"e9", categoryId:"c5", name:"Communication" },
    { id:"e10", categoryId:"c5", name:"Performance Development" }
  ],
  mentors: [
    { id:"m0198", uid:"0198", name:"Fathimath Maleeha Jamal", jobTitle:"Head of Customer Service", department:"Customer Service", type:"ICF/Mentor", about:"Available for both mentoring and coaching conversations, drawing on experience as Head of Customer Service within Customer Service.", services:["MENTORING", "COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0747", uid:"0747", name:"Niyaza Hassan", jobTitle:"Fraud Risk Manager", department:"Risk Division", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Fraud Risk Manager within Risk Division.", services:["COACHING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m0897", uid:"0897", name:"Shiunee Mohamed", jobTitle:"Senior Processing Officer", department:"Financial Transactions", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Senior Processing Officer within Financial Transactions.", services:["COACHING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m0984", uid:"0984", name:"Hassan Aqleem", jobTitle:"Head of Branches - North Region", department:"Retail & Sme Banking", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Head of Branches - North Region within Retail & Sme Banking.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m1199", uid:"1199", name:"Fathimath Yumna", jobTitle:"Manager, Litigation Management", department:"Credit Division", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Manager, Litigation Management within Credit Division.", services:["COACHING"], expertise:["e1", "e4", "e6", "e9", "e3"], active:true },
    { id:"m1309", uid:"1309", name:"Moomina Ibrahim Didi", jobTitle:"Head of Talent Acquisition & People Development", department:"People & Culture", type:"ICF/Mentor", about:"Available for both mentoring and coaching conversations, drawing on experience as Head of Talent Acquisition & People Development within People & Culture.", services:["MENTORING", "COACHING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m1359", uid:"1359", name:"Asiyath Mohamed", jobTitle:"Head of Employee Experience & Business Partnering", department:"People & Culture", type:"ICF/Mentor", about:"Available for both mentoring and coaching conversations, drawing on experience as Head of Employee Experience & Business Partnering within People & Culture.", services:["MENTORING", "COACHING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m1572", uid:"1572", name:"Mohamed Ismail", jobTitle:"Branch Manager", department:"Retail & Sme Banking", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Branch Manager within Retail & Sme Banking.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m1654", uid:"1654", name:"Mohamed Suhan", jobTitle:"Head of Customer Experience", department:"Customer Service", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Head of Customer Experience within Customer Service.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m1892", uid:"1892", name:"Mohamed Shaig Ahmed", jobTitle:"Manager, Service Centre Strategy & Innovation", department:"Retail & Sme Banking", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Manager, Service Centre Strategy & Innovation within Retail & Sme Banking.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m2132", uid:"2132", name:"Imran Solih", jobTitle:"Head of Branches - South Region", department:"Retail & Sme Banking", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Head of Branches - South Region within Retail & Sme Banking.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m2870", uid:"2870", name:"Ali Zaid Mohamed", jobTitle:"Head of Financial Crime Compliance", department:"Risk Division", type:"ICF/Mentor", about:"Available for both mentoring and coaching conversations, drawing on experience as Head of Financial Crime Compliance within Risk Division.", services:["MENTORING", "COACHING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m3161", uid:"3161", name:"Ibrahim Dhaws", jobTitle:"Performance & Talent Management Lead", department:"People & Culture", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Performance & Talent Management Lead within People & Culture.", services:["COACHING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m3342", uid:"3342", name:"Aminath Mizza", jobTitle:"Contact Centre Manager", department:"Customer Service", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Contact Centre Manager within Customer Service.", services:["COACHING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m3477", uid:"3477", name:"Aishath Ish-ha Loreef", jobTitle:"Talent Acquisition Officer", department:"People & Culture", type:"ICF", about:"Available for focused coaching conversations, drawing on experience as Talent Acquisition Officer within People & Culture.", services:["COACHING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m0132", uid:"0132", name:"Hussain Rasheed", jobTitle:"Head of Customer Engagement", department:"Sales & Customer Engagement", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Customer Engagement within Sales & Customer Engagement.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9", "e1"], active:true },
    { id:"m0263", uid:"0263", name:"Afrah Ahmed", jobTitle:"Director of Cards", department:"Card Services", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Cards within Card Services.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m0460", uid:"0460", name:"Mariyam Shiranee", jobTitle:"Head of BML Islamic Sales & Business Services", department:"Islamic Banking Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of BML Islamic Sales & Business Services within Islamic Banking Division.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m1285", uid:"1285", name:"Huzaath Ali", jobTitle:"Director of Financial Transactions", department:"Operations Division - Financial Transactions", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Financial Transactions within Operations Division - Financial Transactions.", services:["MENTORING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m1758", uid:"1758", name:"Mohamed Saeed", jobTitle:"Head of Brand & Marketing Strategy", department:"Marketing Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Brand & Marketing Strategy within Marketing Division.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m0106", uid:"0106", name:"Zulfa Mohamed Ali", jobTitle:"Customer Service Manager", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Customer Service Manager within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0142", uid:"0142", name:"Shamsiyya Ibrahim", jobTitle:"Head of Customer Processing", department:"Financial Transactions", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Customer Processing within Financial Transactions.", services:["MENTORING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m0189", uid:"0189", name:"Mariyam Hameed", jobTitle:"Chief Compliance Officer", department:"Risk Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Chief Compliance Officer within Risk Division.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m0202", uid:"0202", name:"Hanima Naseem", jobTitle:"Branch Manager", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Branch Manager within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0253", uid:"0253", name:"Hassan Abdulla", jobTitle:"Branch Manager", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Branch Manager within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0293", uid:"0293", name:"Musthafa Adly Ahmed Didi", jobTitle:"Chief Technology Officer", department:"Technology", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Chief Technology Officer within Technology.", services:["MENTORING"], expertise:["e1", "e7", "e8", "e4"], active:true },
    { id:"m0326", uid:"0326", name:"Shamheed Ali", jobTitle:"Director of Finance", department:"Finance Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Finance within Finance Division.", services:["MENTORING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m0381", uid:"0381", name:"Shaheem Mohamed", jobTitle:"Customer Service Manager", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Customer Service Manager within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0414", uid:"0414", name:"Hawwa Seeniyaz Adnan", jobTitle:"Head of Financial Transactions & Trade Finance", department:"Financial Transactions", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Financial Transactions & Trade Finance within Financial Transactions.", services:["MENTORING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m0480", uid:"0480", name:"Aminath Leela", jobTitle:"Head of Branches - Male' Region", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Branches - Male' Region within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0510", uid:"0510", name:"Ahmed Sujau", jobTitle:"Head of Merchant Sales", department:"Card Services", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Merchant Sales within Card Services.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m0552", uid:"0552", name:"Fathimath Abdulla", jobTitle:"Head of Credit", department:"Credit Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Credit within Credit Division.", services:["MENTORING"], expertise:["e1", "e4", "e6", "e9"], active:true },
    { id:"m0616", uid:"0616", name:"Shaistha Hamid Hameed", jobTitle:"Credit Manager", department:"Credit Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Credit Manager within Credit Division.", services:["MENTORING"], expertise:["e1", "e4", "e6", "e9"], active:true },
    { id:"m0623", uid:"0623", name:"Mohamed Maiz", jobTitle:"Director of Human Resources", department:"People & Culture", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Human Resources within People & Culture.", services:["MENTORING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m0670", uid:"0670", name:"Moosa Nimal", jobTitle:"Chief Business Officer", department:"Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Chief Business Officer within Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m0994", uid:"0994", name:"Aishath Jeeza", jobTitle:"Customer Service Manager", department:"Business Division - Retail & Sme Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Customer Service Manager within Business Division - Retail & Sme Banking.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m1019", uid:"1019", name:"Hawwa Simna", jobTitle:"Head of MIS & Regulatory Reporting", department:"Finance Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of MIS & Regulatory Reporting within Finance Division.", services:["MENTORING"], expertise:["e1", "e7", "e8", "e4", "e9"], active:true },
    { id:"m1091", uid:"1091", name:"Aishath Samah", jobTitle:"Director of Legal and Corporate Affairs", department:"Operations Division - Legal & Corporate Affairs", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Legal and Corporate Affairs within Operations Division - Legal & Corporate Affairs.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m1432", uid:"1432", name:"Moosa Munsif Ahmed", jobTitle:"Head of Strategy and Change", department:"Operations Division - Strategic Planning & Change Management", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Strategy and Change within Operations Division - Strategic Planning & Change Management.", services:["MENTORING"], expertise:["e1", "e7", "e8", "e4"], active:true },
    { id:"m1473", uid:"1473", name:"Mohamed Hameem", jobTitle:"Manager, Card Strategic Initiatives & Planning", department:"Business Division - Card Services", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Manager, Card Strategic Initiatives & Planning within Business Division - Card Services.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m1688", uid:"1688", name:"Mabrooka Shukree", jobTitle:"HR Business Partner", department:"Operations Division - Human Resource", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as HR Business Partner within Operations Division - Human Resource.", services:["MENTORING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m1691", uid:"1691", name:"Badhurudheen Hassan", jobTitle:"Director of Retail & SME Banking", department:"0", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Retail & SME Banking within 0.", services:["MENTORING"], expertise:["e3", "e4", "e5", "e9"], active:true },
    { id:"m1722", uid:"1722", name:"Mohamed Haneef", jobTitle:"Head of Procurement", department:"Finance Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Procurement within Finance Division.", services:["MENTORING"], expertise:["e1", "e4", "e8", "e9"], active:true },
    { id:"m1817", uid:"1817", name:"Hassan Kalaam", jobTitle:"Chief Islamic Banking Officer", department:"Islamic Banking Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Chief Islamic Banking Officer within Islamic Banking Division.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true },
    { id:"m1975", uid:"1975", name:"Aminath Ahmed Didi", jobTitle:"Learning & Development Lead", department:"Operations Division - Human Resource", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Learning & Development Lead within Operations Division - Human Resource.", services:["MENTORING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m1996", uid:"1996", name:"Aminath Shiba Zahir", jobTitle:"Director of Credit", department:"Credit Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Director of Credit within Credit Division.", services:["MENTORING"], expertise:["e1", "e4", "e6", "e9"], active:true },
    { id:"m2515", uid:"2515", name:"Fathimath Rayya Hilmy", jobTitle:"Employee Relations & Engagement Manager", department:"Operations Division - Human Resource", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Employee Relations & Engagement Manager within Operations Division - Human Resource.", services:["MENTORING"], expertise:["e1", "e2", "e3", "e9", "e10"], active:true },
    { id:"m2521", uid:"2521", name:"Amaan Ali", jobTitle:"Head of Corporate Banking", department:"Business Division - Corporate Banking", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Corporate Banking within Business Division - Corporate Banking.", services:["MENTORING"], expertise:["e1", "e4", "e6", "e9"], active:true },
    { id:"m2631", uid:"2631", name:"Abdul Haadhee Hussain", jobTitle:"Head of Shariah Compliance & Governance", department:"Islamic Banking Division", type:"Mentor", about:"Available for mentoring and knowledge-sharing conversations, drawing on experience as Head of Shariah Compliance & Governance within Islamic Banking Division.", services:["MENTORING"], expertise:["e1", "e3", "e4", "e9"], active:true }
  ],
  slots: [
    { id:"s1", mentorId:"m0198", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s2", mentorId:"m0198", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s3", mentorId:"m0198", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s4", mentorId:"m0747", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s5", mentorId:"m0747", date:todayPlus(11), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s6", mentorId:"m0747", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s7", mentorId:"m0897", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s8", mentorId:"m0897", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s9", mentorId:"m0897", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s10", mentorId:"m0984", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s11", mentorId:"m0984", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s12", mentorId:"m0984", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s13", mentorId:"m1199", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s14", mentorId:"m1199", date:todayPlus(14), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s15", mentorId:"m1199", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s16", mentorId:"m1309", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s17", mentorId:"m1309", date:todayPlus(15), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s18", mentorId:"m1309", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s19", mentorId:"m1359", date:todayPlus(9), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s20", mentorId:"m1359", date:todayPlus(16), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s21", mentorId:"m1359", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s22", mentorId:"m1572", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s23", mentorId:"m1572", date:todayPlus(17), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s24", mentorId:"m1572", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s25", mentorId:"m1654", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s26", mentorId:"m1654", date:todayPlus(18), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s27", mentorId:"m1654", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s28", mentorId:"m1892", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s29", mentorId:"m1892", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s30", mentorId:"m1892", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s31", mentorId:"m2132", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s32", mentorId:"m2132", date:todayPlus(11), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s33", mentorId:"m2132", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s34", mentorId:"m2870", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s35", mentorId:"m2870", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s36", mentorId:"m2870", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s37", mentorId:"m3161", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s38", mentorId:"m3161", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s39", mentorId:"m3161", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s40", mentorId:"m3342", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s41", mentorId:"m3342", date:todayPlus(14), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s42", mentorId:"m3342", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s43", mentorId:"m3477", date:todayPlus(9), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s44", mentorId:"m3477", date:todayPlus(15), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s45", mentorId:"m3477", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s46", mentorId:"m0132", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s47", mentorId:"m0132", date:todayPlus(16), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s48", mentorId:"m0132", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s49", mentorId:"m0263", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s50", mentorId:"m0263", date:todayPlus(17), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s51", mentorId:"m0263", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s52", mentorId:"m0460", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s53", mentorId:"m0460", date:todayPlus(18), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s54", mentorId:"m0460", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s55", mentorId:"m1285", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s56", mentorId:"m1285", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s57", mentorId:"m1285", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s58", mentorId:"m1758", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s59", mentorId:"m1758", date:todayPlus(11), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s60", mentorId:"m1758", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s61", mentorId:"m0106", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s62", mentorId:"m0106", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s63", mentorId:"m0106", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s64", mentorId:"m0142", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s65", mentorId:"m0142", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s66", mentorId:"m0142", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s67", mentorId:"m0189", date:todayPlus(9), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s68", mentorId:"m0189", date:todayPlus(14), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s69", mentorId:"m0189", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s70", mentorId:"m0202", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s71", mentorId:"m0202", date:todayPlus(15), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s72", mentorId:"m0202", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s73", mentorId:"m0253", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s74", mentorId:"m0253", date:todayPlus(16), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s75", mentorId:"m0253", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s76", mentorId:"m0293", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s77", mentorId:"m0293", date:todayPlus(17), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s78", mentorId:"m0293", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s79", mentorId:"m0326", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s80", mentorId:"m0326", date:todayPlus(18), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s81", mentorId:"m0326", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s82", mentorId:"m0381", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s83", mentorId:"m0381", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s84", mentorId:"m0381", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s85", mentorId:"m0414", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s86", mentorId:"m0414", date:todayPlus(11), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s87", mentorId:"m0414", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s88", mentorId:"m0480", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s89", mentorId:"m0480", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s90", mentorId:"m0480", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s91", mentorId:"m0510", date:todayPlus(9), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s92", mentorId:"m0510", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s93", mentorId:"m0510", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s94", mentorId:"m0552", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s95", mentorId:"m0552", date:todayPlus(14), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s96", mentorId:"m0552", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s97", mentorId:"m0616", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s98", mentorId:"m0616", date:todayPlus(15), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s99", mentorId:"m0616", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s100", mentorId:"m0623", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s101", mentorId:"m0623", date:todayPlus(16), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s102", mentorId:"m0623", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s103", mentorId:"m0670", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s104", mentorId:"m0670", date:todayPlus(17), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s105", mentorId:"m0670", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s106", mentorId:"m0994", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s107", mentorId:"m0994", date:todayPlus(18), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s108", mentorId:"m0994", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s109", mentorId:"m1019", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s110", mentorId:"m1019", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s111", mentorId:"m1019", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s112", mentorId:"m1091", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s113", mentorId:"m1091", date:todayPlus(11), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s114", mentorId:"m1091", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s115", mentorId:"m1432", date:todayPlus(9), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s116", mentorId:"m1432", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s117", mentorId:"m1432", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s118", mentorId:"m1473", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s119", mentorId:"m1473", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s120", mentorId:"m1473", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s121", mentorId:"m1688", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s122", mentorId:"m1688", date:todayPlus(14), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s123", mentorId:"m1688", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s124", mentorId:"m1691", date:todayPlus(4), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s125", mentorId:"m1691", date:todayPlus(15), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s126", mentorId:"m1691", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s127", mentorId:"m1722", date:todayPlus(5), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s128", mentorId:"m1722", date:todayPlus(16), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s129", mentorId:"m1722", date:todayPlus(18), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s130", mentorId:"m1817", date:todayPlus(6), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s131", mentorId:"m1817", date:todayPlus(17), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s132", mentorId:"m1817", date:todayPlus(19), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s133", mentorId:"m1975", date:todayPlus(7), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s134", mentorId:"m1975", date:todayPlus(18), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s135", mentorId:"m1975", date:todayPlus(20), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s136", mentorId:"m1996", date:todayPlus(8), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s137", mentorId:"m1996", date:todayPlus(10), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s138", mentorId:"m1996", date:todayPlus(21), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s139", mentorId:"m2515", date:todayPlus(9), start:"09:00", end:"10:00", status:"PENDING" },
    { id:"s140", mentorId:"m2515", date:todayPlus(11), start:"13:00", end:"14:00", status:"BOOKED" },
    { id:"s141", mentorId:"m2515", date:todayPlus(22), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s142", mentorId:"m2521", date:todayPlus(10), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s143", mentorId:"m2521", date:todayPlus(12), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s144", mentorId:"m2521", date:todayPlus(23), start:"15:00", end:"16:00", status:"OPEN" },
    { id:"s145", mentorId:"m2631", date:todayPlus(3), start:"09:00", end:"10:00", status:"OPEN" },
    { id:"s146", mentorId:"m2631", date:todayPlus(13), start:"13:00", end:"14:00", status:"OPEN" },
    { id:"s147", mentorId:"m2631", date:todayPlus(24), start:"15:00", end:"16:00", status:"OPEN" }
  ],
  bookings: [
    { id:"b1", ref:"MC-DEMO-001", staff:"Demo Staff", mentorId:"m2515", service:"MENTORING", categoryId:"c1", expertiseId:"e1", slotId:"s139", date:todayPlus(9), start:"09:00", end:"10:00", topic:"Career progression and planning my next development steps.", message:"Would like some guidance on where I should focus next.", status:"REQUESTED", location:"" },
    { id:"b2", ref:"MC-DEMO-002", staff:"Demo Staff", mentorId:"m2515", service:"MENTORING", categoryId:"c5", expertiseId:"e10", slotId:"s140", date:todayPlus(11), start:"13:00", end:"14:00", topic:"Improving my professional development plan and performance goals.", message:"", status:"ACCEPTED", location:"Meeting Room 4" },
    { id:"b3", ref:"MC-DEMO-003", staff:"Demo Staff", mentorId:"m0293", service:"MENTORING", categoryId:"c4", expertiseId:"e7", slotId:"historic", date:todayPlus(-8), start:"11:00", end:"12:00", topic:"Understanding digital transformation opportunities and career paths.", message:"", status:"COMPLETED", location:"Microsoft Teams" }
  ],
  feedback:[]
};

const deepCopy = (x) => JSON.parse(JSON.stringify(x));
let state = load();
let role = null;
let view = null;
let selectedSlot = null;
let filters = { service:"MENTORING", category:"", expertise:"", search:"" };
let sessionTab = "REQUESTED";

function load(){
  try{
    const raw = localStorage.getItem(KEY);
    const loaded = raw ? JSON.parse(raw) : deepCopy(seed);
    loaded.mentors.forEach(mentor => { mentor.uid = "0000"; });
    return loaded;
  }catch{
    const loaded = deepCopy(seed);
    loaded.mentors.forEach(mentor => { mentor.uid = "0000"; });
    return loaded;
  }
}
function save(){
  localStorage.setItem(KEY, JSON.stringify(state));
}
function reset(){
  state = deepCopy(seed);
  save();
  toast("Prototype data reset");
  render();
}
function id(prefix){return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`}
function $mentor(id){return state.mentors.find(x=>x.id===id)}
function $category(id){return state.categories.find(x=>x.id===id)}
function $expertise(id){return state.expertise.find(x=>x.id===id)}
function dateFmt(v){
  return new Date(v+"T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
}
function shortDate(v){
  return new Date(v+"T00:00:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});
}
function initials(name){return name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}
function toast(msg){
  document.querySelector(".toast")?.remove();
  const el=document.createElement("div");
  el.className="toast";
  el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),2200);
}
function confirmAction(message, fn){
  if(confirm(message)){ fn(); }
}
function setRole(next){
  role = next;
  view = next==="STAFF"?"overview":next==="MENTOR"?"overview":"overview";
  render();
}
function go(next){
  view=next;
  selectedSlot=null;
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function stat(title,value,sub=""){
  return `<div class="stat"><div class="stat-label">${title}</div><div class="stat-value">${value}</div>${sub?`<div class="muted" style="font-size:10px">${sub}</div>`:""}</div>`;
}
function statusBadge(s){return `<span class="badge badge-${s}">${s}</span>`}
function sidebar(){
  const config={
    STAFF:[["overview","⌂","Overview"],["find","⌕","Find a Mentor"],["sessions","◷","My Sessions"]],
    MENTOR:[["overview","⌂","Overview"],["requests","✉","Requests"],["availability","◫","Availability"]],
    HR:[["overview","⌂","Overview"],["mentors","♙","Mentors"],["bookings","◷","Bookings"],["availability","◫","Availability"],["categories","▦","Categories"]]
  };
  const label=role==="STAFF"?"Staff Portal":role==="MENTOR"?"Mentor Portal":"HR Administration";
  return `
  <aside class="sidebar">
    <div class="brand"><div class="brand-mark">B</div><div class="brand-copy"><strong>Mentoring</strong><span>& Coaching</span></div></div>
    <div class="sidebar-role">${label}</div>
    <nav class="nav">
      ${config[role].map(([v,ic,t])=>`<button class="${view===v?"active":""}" onclick="go('${v}')"><span>${ic}</span>${t}</button>`).join("")}
    </nav>
    <div class="sidebar-bottom"><button onclick="home()">← Demo Home</button><small>Prototype Environment</small></div>
  </aside>`;
}
function topbar(){
  const dm=$mentor(mentorId); const profile=role==="STAFF"?["DS","Demo Staff","Employee"]:role==="MENTOR"?[initials(dm?.name||"Mentor"),dm?.name||"Mentor",dm?.type||"Mentor"]:["HR","HR Administrator","Programme Owner"];
  return `
  <header class="topbar">
    <div class="topbar-left"><span>${role==="HR"?"HR Administration":role==="MENTOR"?"Mentor Portal":"Staff Portal"}</span><strong>Mentoring & Coaching</strong></div>
    <div class="topbar-profile"><div class="avatar">${profile[0]}</div><div class="profile-copy"><strong>${profile[1]}</strong><span>${profile[2]}</span></div></div>
  </header>`;
}
function home(){
  role=null; view=null; render();
}
function landing(){
  return `
  <main class="landing">
    <div class="landing-top">
      <div class="brand"><div class="brand-mark">B</div><div class="brand-copy"><strong>Bank of Maldives</strong><span>Prototype</span></div></div>
      <div class="demo-pill">Demo Environment</div>
    </div>
    <section class="hero">
      <div class="eyebrow">Mentoring & Coaching</div>
      <h1>Learn. Connect.<br/>Grow.</h1>
      <p>A polished functional prototype for employees to find mentors, request sessions and manage development conversations across the organisation.</p>
    </section>
    <section class="role-grid">
      <article class="role-card">
        <div class="role-icon">◎</div><h2>Staff</h2>
        <p>Find suitable mentors, request sessions, track bookings and provide post-session feedback.</p>
        <button class="btn btn-primary full" onclick="setRole('STAFF')">Continue as Staff</button>
      </article>
      <article class="role-card featured">
        <div class="role-icon">◈</div><h2>Mentor</h2>
        <p>Publish monthly availability, review requests, accept or decline sessions and manage upcoming bookings.</p>
        <button class="btn btn-primary full" onclick="setRole('MENTOR')">Continue as Mentor</button>
      </article>
      <article class="role-card">
        <div class="role-icon">▦</div><h2>HR</h2>
        <p>Manage mentors, bookings, availability, categories and programme oversight from one dashboard.</p>
        <button class="btn btn-primary full" onclick="setRole('HR')">Continue as HR</button>
      </article>
    </section>
    <div class="landing-bottom"><button class="btn btn-ghost" onclick="reset()">Reset prototype data</button></div>
  </main>`;
}
function shell(content){
  return `<div class="shell">${sidebar()}<div class="workspace">${topbar()}<main class="content">${content}</main></div></div>`;
}
function heading(eyebrow,title,desc,action=""){
  return `<section class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${action}</section>`;
}
function sessionCard(b, actions=""){
  const m=$mentor(b.mentorId);
  return `<article class="session-card">
    <div class="session-top"><div>${statusBadge(b.status)}<h3>${b.service==="MENTORING"?"Mentoring":"Coaching"} Session</h3><div class="muted" style="font-size:12px">${m?.name||"Mentor"}</div></div><div class="session-ref">${b.ref}</div></div>
    <div class="session-details"><div><span>Date</span><strong>${dateFmt(b.date)}</strong></div><div><span>Time</span><strong>${b.start} – ${b.end}</strong></div><div><span>Location</span><strong>${b.location||"To be confirmed"}</strong></div></div>
    <div class="session-topic"><span>Topic</span><p>${b.topic}</p></div>
    ${actions?`<div class="session-actions">${actions}</div>`:""}
  </article>`;
}
function staffOverview(){
  const req=state.bookings.filter(b=>b.status==="REQUESTED").length;
  const up=state.bookings.filter(b=>b.status==="ACCEPTED").length;
  const comp=state.bookings.filter(b=>b.status==="COMPLETED").length;
  const upcoming=state.bookings.filter(b=>b.status==="ACCEPTED").slice(0,2);
  return shell(
    heading("My Development","Welcome back","Find the right mentor, arrange a session and keep track of your development.",`<button class="btn btn-primary" onclick="go('find')">+ Find a Mentor</button>`) +
    `<section class="stat-grid">${stat("Pending Requests",req)}${stat("Upcoming Sessions",up)}${stat("Completed",comp)}</section>
    <section class="service-grid">
      <article class="service-card red" onclick="filters.service='MENTORING';go('find')"><div class="service-icon">↗</div><div><div class="eyebrow">Flash Mentoring</div><h2>Get focused guidance.</h2><p>Connect with experienced colleagues for practical insight, knowledge sharing and career guidance.</p></div><div class="service-link">Find a Mentor →</div></article>
      <article class="service-card blue" onclick="filters.service='COACHING';go('find')"><div class="service-icon">◇</div><div><div class="eyebrow">Coaching</div><h2>Develop with purpose.</h2><p>Access structured support around leadership, performance and professional development.</p></div><div class="service-link">Explore Coaching →</div></article>
    </section>
    <section class="section"><div class="section-head"><div><h2>Upcoming</h2><p>Your confirmed sessions.</p></div><button class="btn btn-secondary btn-sm" onclick="go('sessions')">View all</button></div>${upcoming.length?upcoming.map(b=>sessionCard(b)).join(""):`<div class="empty">No upcoming sessions.</div>`}</section>`
  );
}
function mentorCard(m){
  const ex=state.expertise.filter(e=>m.expertise.includes(e.id));
  const slots=state.slots.filter(s=>s.mentorId===m.id&&s.status==="OPEN");
  return `<article class="mentor-card">
    <div class="mentor-head"><div class="avatar">${initials(m.name)}</div><div><h3>${m.name}</h3><p>${m.jobTitle}</p><small class="muted">UID ${m.uid} · ${m.department}</small></div></div>
    <div style="margin-top:12px"><span class="tag">${m.type}</span></div><p class="mentor-about">${m.about}</p>
    <div class="tags">${ex.slice(0,4).map(e=>`<span class="tag">${e.name}</span>`).join("")}</div>
    <div class="slots"><strong style="font-size:12px">Available times</strong>
      ${slots.length?`<div class="slot-grid">${slots.map(s=>`<button class="slot ${selectedSlot===s.id?"selected":""}" onclick="selectSlot('${s.id}')"><span>${shortDate(s.date)}</span><small>${s.start} – ${s.end}</small></button>`).join("")}</div>`:`<p class="muted" style="font-size:12px;margin-top:10px">No open slots.</p>`}
    </div>
  </article>`;
}
function staffFind(){
  const ex=state.expertise.filter(e=>e.categoryId===filters.category);
  let mentors=state.mentors.filter(m=>m.active&&m.services.includes(filters.service));
  if(filters.expertise) mentors=mentors.filter(m=>m.expertise.includes(filters.expertise)); if(filters.search){const q=filters.search.toLowerCase();mentors=mentors.filter(m=>`${m.uid} ${m.name} ${m.jobTitle} ${m.department} ${m.type}`.toLowerCase().includes(q));}
  const request = selectedSlot ? `<section class="request-panel">
    <div class="eyebrow">Session Request</div><h2>Tell your mentor what you would like to discuss.</h2>
    <div class="field"><label>What would you like to discuss?</label><textarea id="topic" placeholder="Briefly describe the topic or support you are looking for..."></textarea></div>
    <div class="field" style="margin-top:13px"><label>Message to Mentor <span class="optional">Optional</span></label><textarea id="message" placeholder="Add any additional information..."></textarea></div>
    <div style="margin-top:15px"><button class="btn btn-primary" onclick="requestSession()">Request Session</button></div>
  </section>`:"";
  return shell(
    heading("Find Support","Find the right mentor.","Choose what you would like help with and select a suitable available session.")+
    `<section class="filter-panel">
      <div class="field"><label>Search Mentor</label><input id="mentor-search" placeholder="Name, UID, job title or division" oninput="setMentorSearch(this.value)" value="${filters.search||""}"></div>
      <div class="field"><label>Session Type</label><div class="segmented"><button class="${filters.service==="MENTORING"?"active":""}" onclick="setService('MENTORING')">Mentoring</button><button class="${filters.service==="COACHING"?"active":""}" onclick="setService('COACHING')">Coaching</button></div></div>
      <div class="field"><label>Category</label><select onchange="setCategory(this.value)"><option value="">Select category</option>${state.categories.map(c=>`<option value="${c.id}" ${filters.category===c.id?"selected":""}>${c.name}</option>`).join("")}</select></div>
      <div class="field"><label>Area of Expertise</label><select ${!filters.category?"disabled":""} onchange="setExpertise(this.value)"><option value="">Select expertise</option>${ex.map(e=>`<option value="${e.id}" ${filters.expertise===e.id?"selected":""}>${e.name}</option>`).join("")}</select></div>
    </section>
    <section class="section"><div class="section-head"><div><h2>Available Mentors</h2><p>${mentors.length} mentor${mentors.length===1?"":"s"} currently match your selection.</p></div></div><div class="mentor-grid">${mentors.map(mentorCard).join("")}</div></section>${request}`
  );
}
function selectSlot(id){ selectedSlot=id; render(); setTimeout(()=>document.querySelector(".request-panel")?.scrollIntoView({behavior:"smooth",block:"start"}),30)}
function setMentorSearch(v){filters.search=v;selectedSlot=null;render()} function setService(v){filters.service=v;selectedSlot=null;render()}
function setCategory(v){filters.category=v;filters.expertise="";selectedSlot=null;render()}
function setExpertise(v){filters.expertise=v;selectedSlot=null;render()}
function requestSession(){
  const topic=document.getElementById("topic").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!filters.category||!filters.expertise){toast("Choose a category and expertise first");return}
  if(topic.length<5){toast("Please add a little more detail to the topic");return}
  const slot=state.slots.find(s=>s.id===selectedSlot);
  if(!slot||slot.status!=="OPEN"){toast("That slot is no longer open");return}
  const n=state.bookings.length+1;
  state.bookings.unshift({id:id("b"),ref:`MC-${new Date().getFullYear()}-${String(n).padStart(3,"0")}`,staff:"Demo Staff",mentorId:slot.mentorId,service:filters.service,categoryId:filters.category,expertiseId:filters.expertise,slotId:slot.id,date:slot.date,start:slot.start,end:slot.end,topic,message,status:"REQUESTED",location:""});
  slot.status="PENDING"; selectedSlot=null; save(); toast("Session request sent"); render();
}
function staffSessions(){
  const tabs=["REQUESTED","ACCEPTED","COMPLETED","DECLINED","CANCELLED"];
  const rows=state.bookings.filter(b=>b.status===sessionTab);
  return shell(
    heading("My Sessions","Your mentoring journey.","Review requests, upcoming sessions and previous conversations.")+
    `<div class="tabs">${tabs.map(t=>`<button class="${sessionTab===t?"active":""}" onclick="setSessionTab('${t}')">${t==="ACCEPTED"?"Upcoming":t[0]+t.slice(1).toLowerCase()}</button>`).join("")}</div>
    ${rows.length?rows.map(b=>{
      let actions="";
      if(["REQUESTED","ACCEPTED"].includes(b.status)) actions+=`<button class="btn btn-danger btn-sm" onclick="confirmAction('Cancel this session?',()=>cancelBooking('${b.id}'))">Cancel Session</button>`;
      if(b.status==="COMPLETED"){
        const exists=state.feedback.some(f=>f.bookingId===b.id&&f.party==="MENTEE");
        actions+=exists?`<span style="font-size:11px;color:var(--success);font-weight:750">✓ Feedback submitted</span>`:`<button class="btn btn-primary btn-sm" onclick="feedbackModal('${b.id}')">Give Feedback</button>`;
      }
      return sessionCard(b,actions);
    }).join(""):`<div class="empty">No sessions in this category.</div>`}`
  );
}
function setSessionTab(t){sessionTab=t;render()}
function cancelBooking(idv){
  const b=state.bookings.find(x=>x.id===idv);if(!b)return;
  b.status="CANCELLED";
  const s=state.slots.find(x=>x.id===b.slotId);if(s)s.status="OPEN";
  save();toast("Session cancelled");render();
}
function feedbackModal(bid,party="MENTEE"){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Feedback</div><h2>${party==="MENTEE"?"How was your session?":"Mentor feedback"}</h2></div><button class="close" onclick="closeModal()">×</button></div>
  <div class="field"><label>${party==="MENTEE"?"How useful was the session?":"How effective was the session?"}</label><select id="rating">${[5,4,3,2,1].map(n=>`<option value="${n}">${n} / 5</option>`).join("")}</select></div>
  <div class="field" style="margin-top:13px"><label>${party==="MENTEE"?"Did the session address what you wanted to discuss?":"Was the mentee prepared?"}</label><select id="rating2">${[5,4,3,2,1].map(n=>`<option value="${n}">${n} / 5</option>`).join("")}</select></div>
  <div class="field" style="margin-top:13px"><label>Comments</label><textarea id="comments"></textarea></div>
  <button class="btn btn-primary full" style="margin-top:15px" onclick="submitFeedback('${bid}','${party}')">Submit Feedback</button></div></div>`);
}
function closeModal(){document.getElementById("modal")?.remove()}
function submitFeedback(bid,party){
  if(state.feedback.some(f=>f.bookingId===bid&&f.party===party)){toast("Feedback already submitted");return}
  state.feedback.push({id:id("f"),bookingId:bid,party,rating:+document.getElementById("rating").value,rating2:+document.getElementById("rating2").value,comments:document.getElementById("comments").value});
  save();closeModal();toast("Feedback submitted");render();
}
function mentorOverview(){
  const req=state.bookings.filter(b=>b.mentorId===mentorId&&b.status==="REQUESTED");
  const up=state.bookings.filter(b=>b.mentorId===mentorId&&b.status==="ACCEPTED");
  const open=state.slots.filter(s=>s.mentorId===mentorId&&s.status==="OPEN");
  const comp=state.bookings.filter(b=>b.mentorId===mentorId&&b.status==="COMPLETED");
  return shell(
    heading("Mentor Dashboard",`Welcome, ${$mentor(mentorId)?.name||"Mentor"}`,"Review requests, manage availability and keep track of your sessions.",`<button class="btn btn-primary" onclick="go('availability')">+ Add Availability</button>`)+
    `<section class="stat-grid">${stat("New Requests",req.length)}${stat("Upcoming",up.length)}${stat("Open Slots",open.length)}${stat("Completed",comp.length)}</section>
    <section class="section"><div class="section-head"><div><h2>New Requests</h2><p>Employees waiting for your response.</p></div><button class="btn btn-secondary btn-sm" onclick="go('requests')">View Requests</button></div>${req.length?req.slice(0,2).map(b=>sessionCard(b)).join(""):`<div class="empty">No pending requests.</div>`}</section>`
  );
}
function mentorRequests(){
  const rows=state.bookings.filter(b=>b.mentorId===mentorId&&b.status==="REQUESTED");
  return shell(
    heading("Session Requests","Requests awaiting your response.","Accept a request and select the meeting location, or decline it to reopen the slot.")+
    `${rows.length?rows.map(b=>`<article class="request-card"><div class="request-main"><div class="mentor-head"><div class="avatar">DS</div><div><h3>${b.staff}</h3><p>${b.service}</p></div></div>
      <div class="detail-grid"><div class="detail-box"><span>Date</span><strong>${dateFmt(b.date)}</strong></div><div class="detail-box"><span>Time</span><strong>${b.start} – ${b.end}</strong></div><div class="detail-box"><span>Category</span><strong>${$category(b.categoryId)?.name||"—"}</strong></div><div class="detail-box"><span>Expertise</span><strong>${$expertise(b.expertiseId)?.name||"—"}</strong></div></div>
      <div><span class="muted" style="font-size:10px">What they would like to discuss</span><p style="font-size:13px">${b.topic}</p></div>${b.message?`<div><span class="muted" style="font-size:10px">Message</span><p style="font-size:13px">${b.message}</p></div>`:""}</div>
      <aside class="request-action"><div class="eyebrow">Your Response</div><div class="field"><label>Meeting Location</label><select id="loc-${b.id}"><option value="">Select location</option><option>Microsoft Teams</option><option>Meeting Room 1</option><option>Meeting Room 4</option><option>Mentor's Office</option><option>Coffee Area</option></select></div><button class="btn btn-primary full" onclick="acceptBooking('${b.id}')">Accept Request</button><button class="btn btn-danger full" onclick="confirmAction('Decline this request?',()=>declineBooking('${b.id}'))">Decline</button></aside></article>`).join(""):`<div class="empty">You're all caught up. No pending requests.</div>`}`
  );
}
function acceptBooking(idv){
  const loc=document.getElementById(`loc-${idv}`).value;
  if(!loc){toast("Select a meeting location");return}
  const b=state.bookings.find(x=>x.id===idv);if(!b)return;
  b.status="ACCEPTED";b.location=loc;
  const s=state.slots.find(x=>x.id===b.slotId);if(s)s.status="BOOKED";
  save();toast("Request accepted");render();
}
function declineBooking(idv){
  const b=state.bookings.find(x=>x.id===idv);if(!b)return;
  b.status="DECLINED";
  const s=state.slots.find(x=>x.id===b.slotId);if(s)s.status="OPEN";
  save();toast("Request declined; slot reopened");render();
}
function mentorAvailability(){
  const slots=state.slots.filter(s=>s.mentorId===mentorId).sort((a,b)=>a.date.localeCompare(b.date));
  return shell(
    heading("Availability","Manage your monthly slots.","Publish available mentoring and coaching sessions for employees.")+
    `<section class="card progress-card"><div class="progress-number"><span class="muted" style="font-size:11px">Monthly Target</span><strong>${slots.length} / ${TARGET}</strong></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,(slots.length/TARGET)*100)}%"></div></div><div style="font-size:11px;font-weight:750;color:${slots.length>=TARGET?"var(--success)":"var(--warn)"}">${slots.length>=TARGET?"✓ Monthly availability complete":`${TARGET-slots.length} more slot(s) required`}</div></section>
    <section class="card" style="margin-top:18px"><div class="section-head"><div><h2>Add Availability</h2><p>Enter the date and time you are available.</p></div></div><div class="form-grid"><div class="field"><label>Date</label><input type="date" id="slot-date"></div><div class="field"><label>Start Time</label><input type="time" id="slot-start"></div><div class="field"><label>End Time</label><input type="time" id="slot-end"></div></div><button class="btn btn-primary" style="margin-top:15px" onclick="addSlot('${mentorId}')">Add Slot</button></section>
    <section class="section"><div class="section-head"><div><h2>Published Slots</h2><p>Pending and booked slots are protected.</p></div></div>${slotTable(slots)}</section>`
  );
}
function slotTable(slots, showMentor=false){
  return `<div class="table-wrap"><table><thead><tr>${showMentor?"<th>Mentor</th>":""}<th>Date</th><th>Time</th><th>Status</th><th>Actions</th></tr></thead><tbody>${slots.map(s=>`<tr>${showMentor?`<td>${$mentor(s.mentorId)?.name||"—"}</td>`:""}<td>${dateFmt(s.date)}</td><td>${s.start} – ${s.end}</td><td>${statusBadge(s.status)}</td><td><div class="actions"><button class="link-btn" ${s.status!=="OPEN"?"disabled":""} onclick="editSlot('${s.id}')">Edit</button><button class="link-btn danger" ${s.status!=="OPEN"?"disabled":""} onclick="confirmAction('Delete this slot?',()=>deleteSlot('${s.id}'))">Delete</button></div></td></tr>`).join("")}</tbody></table></div>`;
}
function addSlot(mid){
  const d=document.getElementById("slot-date").value,s=document.getElementById("slot-start").value,e=document.getElementById("slot-end").value;
  if(!d||!s||!e){toast("Complete the date and time");return}
  if(e<=s){toast("End time must be later than start");return}
  const overlap=state.slots.some(x=>x.mentorId===mid&&x.date===d&&s<x.end&&e>x.start);
  if(overlap){toast("This slot overlaps with an existing slot");return}
  state.slots.push({id:id("s"),mentorId:mid,date:d,start:s,end:e,status:"OPEN"});save();toast("Availability added");render();
}
function deleteSlot(sid){state.slots=state.slots.filter(s=>s.id!==sid);save();toast("Slot deleted");render()}
function editSlot(sid){
  const s=state.slots.find(x=>x.id===sid);if(!s)return;
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Availability</div><h2>Edit Slot</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="field"><label>Date</label><input type="date" id="edit-date" value="${s.date}"></div><div class="form-grid" style="margin-top:13px"><div class="field"><label>Start</label><input type="time" id="edit-start" value="${s.start}"></div><div class="field"><label>End</label><input type="time" id="edit-end" value="${s.end}"></div></div><button class="btn btn-primary full" style="margin-top:15px" onclick="saveEditedSlot('${sid}')">Save Changes</button></div></div>`);
}
function saveEditedSlot(sid){
  const s=state.slots.find(x=>x.id===sid);if(!s)return;
  const d=document.getElementById("edit-date").value,st=document.getElementById("edit-start").value,en=document.getElementById("edit-end").value;
  if(!d||!st||!en||en<=st){toast("Check the date and times");return}
  s.date=d;s.start=st;s.end=en;save();closeModal();toast("Slot updated");render();
}
function hrOverview(){
  const active=state.mentors.filter(m=>m.active).length,open=state.slots.filter(s=>s.status==="OPEN").length,req=state.bookings.filter(b=>b.status==="REQUESTED").length,acc=state.bookings.filter(b=>b.status==="ACCEPTED").length,comp=state.bookings.filter(b=>b.status==="COMPLETED").length;
  const avg=state.feedback.length?(state.feedback.reduce((a,b)=>a+b.rating,0)/state.feedback.length).toFixed(1):"—";
  const statuses=["REQUESTED","ACCEPTED","COMPLETED","DECLINED","CANCELLED"];
  return shell(
    heading("Programme Overview","Mentoring & Coaching.","Monitor programme activity, mentor participation and session utilisation.")+
    `<section class="stat-grid">${stat("Active Mentors",active)}${stat("Open Slots",open)}${stat("Pending Requests",req)}${stat("Upcoming",acc)}${stat("Completed",comp)}${stat("Feedback Rating",avg,state.feedback.length?"out of 5":"No responses yet")}</section>
    <section class="dashboard-grid"><div class="card"><div class="section-head"><div><h2>Booking Status</h2><p>Current programme activity.</p></div></div><div class="chart-list">${statuses.map(s=>{const n=state.bookings.filter(b=>b.status===s).length,p=state.bookings.length?100*n/state.bookings.length:0;return `<div><div class="chart-label"><span>${s}</span><strong>${n}</strong></div><div class="chart-track"><div class="chart-fill" style="width:${p}%"></div></div></div>`}).join("")}</div></div>
    <div class="card"><div class="section-head"><div><h2>Mentor Availability</h2><p>Slots currently published.</p></div></div>${state.mentors.filter(m=>m.active).map(m=>{const n=state.slots.filter(s=>s.mentorId===m.id).length;return `<div class="mentor-progress"><div><strong style="font-size:12px">${m.name}</strong><small>${m.department}</small></div><span style="font-size:11px;font-weight:800;color:${n>=TARGET?"var(--success)":"var(--warn)"}">${n} / ${TARGET}</span></div>`}).join("")}</div></section>`
  );
}
function hrMentors(){
  return shell(
    heading("Mentor Management","Manage mentors.","Add mentors, update profiles, expertise and programme participation.",`<button class="btn btn-primary" onclick="mentorModal()">+ Add Mentor</button>`)+
    `<div class="table-wrap"><table><thead><tr><th>UID</th><th>Mentor</th><th>Division</th><th>Type</th><th>Services</th><th>Status</th><th>Actions</th></tr></thead><tbody>${state.mentors.map(m=>`<tr><td><strong>${m.uid||"—"}</strong></td><td><strong>${m.name}</strong><span class="table-sub">${m.jobTitle}</span></td><td>${m.department}</td><td><span class="tag">${m.type||"Mentor"}</span></td><td><div class="tags">${m.services.map(s=>`<span class="tag">${s}</span>`).join("")}</div></td><td>${statusBadge(m.active?"ACTIVE":"INACTIVE")}</td><td><div class="actions"><button class="link-btn" onclick="mentorModal('${m.id}')">Edit</button><button class="link-btn" onclick="toggleMentor('${m.id}')">${m.active?"Deactivate":"Activate"}</button></div></td></tr>`).join("")}</tbody></table></div>`
  );
}
function mentorModal(mid=""){
  const m=mid?$mentor(mid):null;
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Mentor Management</div><h2>${m?"Edit Mentor":"Add Mentor"}</h2></div><button class="close" onclick="closeModal()">×</button></div>
  <div class="form-grid"><div class="field"><label>Name</label><input id="mn" value="${m?.name||""}"></div><div class="field"><label>Job Title</label><input id="mj" value="${m?.jobTitle||""}"></div><div class="field"><label>Department</label><input id="md" value="${m?.department||""}"></div></div>
  <div class="field" style="margin-top:13px"><label>About</label><textarea id="ma">${m?.about||""}</textarea></div>
  <div class="field" style="margin-top:13px"><label>Session Types</label><div class="checkbox-grid"><label class="check"><input id="svc-m" type="checkbox" ${!m||m.services.includes("MENTORING")?"checked":""}> Mentoring</label><label class="check"><input id="svc-c" type="checkbox" ${m?.services.includes("COACHING")?"checked":""}> Coaching</label></div></div>
  <div class="field" style="margin-top:13px"><label>Expertise</label><div class="checkbox-grid">${state.expertise.map(e=>`<label class="check"><input class="expcheck" value="${e.id}" type="checkbox" ${m?.expertise.includes(e.id)?"checked":""}> ${e.name}</label>`).join("")}</div></div>
  <button class="btn btn-primary full" style="margin-top:16px" onclick="saveMentor('${mid}')">${m?"Save Mentor":"Add Mentor"}</button></div></div>`);
}
function saveMentor(mid){
  const name=document.getElementById("mn").value.trim(),jobTitle=document.getElementById("mj").value.trim(),department=document.getElementById("md").value.trim(),about=document.getElementById("ma").value.trim();
  if(!name||!jobTitle||!department){toast("Complete the mentor details");return}
  const services=[];if(document.getElementById("svc-m").checked)services.push("MENTORING");if(document.getElementById("svc-c").checked)services.push("COACHING");
  const expertise=[...document.querySelectorAll(".expcheck:checked")].map(x=>x.value);
  if(mid){Object.assign($mentor(mid),{name,jobTitle,department,about,services,expertise})}
  else state.mentors.push({id:id("m"),name,jobTitle,department,about,services,expertise,active:true});
  save();closeModal();toast(mid?"Mentor updated":"Mentor added");render();
}
function toggleMentor(mid){const m=$mentor(mid);if(m){m.active=!m.active;save();render()}}
function hrBookings(){
  const rows=state.bookings;
  return shell(
    heading("Booking Oversight","All bookings.","Review programme bookings and manage exceptional cancellations.")+
    `<div class="table-wrap"><table><thead><tr><th>Reference</th><th>Staff</th><th>Mentor</th><th>Service</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map(b=>`<tr><td><strong>${b.ref}</strong><span class="table-sub">${b.topic}</span></td><td>${b.staff}</td><td>${$mentor(b.mentorId)?.name||"—"}</td><td>${b.service}</td><td>${dateFmt(b.date)}<span class="table-sub">${b.start} – ${b.end}</span></td><td>${statusBadge(b.status)}</td><td><div class="actions">${b.status==="ACCEPTED"?`<button class="link-btn" onclick="confirmAction('Mark this session completed?',()=>completeBooking('${b.id}'))">Complete</button>`:""}${["REQUESTED","ACCEPTED"].includes(b.status)?`<button class="link-btn danger" onclick="confirmAction('Cancel this booking?',()=>cancelBooking('${b.id}'))">Cancel</button>`:""}</div></td></tr>`).join("")}</tbody></table></div>`
  );
}
function completeBooking(bid){const b=state.bookings.find(x=>x.id===bid);if(b){b.status="COMPLETED";save();toast("Session marked completed");render()}}
function hrAvailability(){
  const slots=[...state.slots].sort((a,b)=>a.date.localeCompare(b.date));
  return shell(
    heading("Availability Oversight","Manage all slots.","HR can support mentors by adding, editing or removing unused availability.",`<button class="btn btn-primary" onclick="hrAddSlotModal()">+ Add Slot</button>`)+slotTable(slots,true)
  );
}
function hrAddSlotModal(){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Availability</div><h2>Add Mentor Slot</h2></div><button class="close" onclick="closeModal()">×</button></div>
  <div class="field"><label>Mentor</label><select id="hmentor"><option value="">Select mentor</option>${state.mentors.filter(m=>m.active).map(m=>`<option value="${m.id}">${m.name}</option>`).join("")}</select></div>
  <div class="form-grid" style="margin-top:13px"><div class="field"><label>Date</label><input id="hdate" type="date"></div><div class="field"><label>Start</label><input id="hstart" type="time"></div><div class="field"><label>End</label><input id="hend" type="time"></div></div><button class="btn btn-primary full" style="margin-top:15px" onclick="hrSaveSlot()">Add Slot</button></div></div>`);
}
function hrSaveSlot(){
  const mid=document.getElementById("hmentor").value,d=document.getElementById("hdate").value,s=document.getElementById("hstart").value,e=document.getElementById("hend").value;
  if(!mid||!d||!s||!e||e<=s){toast("Check the mentor, date and time");return}
  state.slots.push({id:id("s"),mentorId:mid,date:d,start:s,end:e,status:"OPEN"});save();closeModal();toast("Slot added");render();
}
function hrCategories(){
  return shell(
    heading("Programme Setup","Categories & expertise.","Maintain the areas employees can select when searching for mentors.")+
    `<section class="dashboard-grid"><div class="card"><h2>Add Category</h2><div class="field"><label>Category Name</label><input id="catname" placeholder="e.g. Leadership"></div><button class="btn btn-primary" style="margin-top:13px" onclick="addCategory()">Add Category</button></div>
    <div class="card"><h2>Add Expertise</h2><div class="field"><label>Category</label><select id="excat"><option value="">Select category</option>${state.categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}</select></div><div class="field" style="margin-top:11px"><label>Expertise</label><input id="exname" placeholder="e.g. Career Navigation"></div><button class="btn btn-primary" style="margin-top:13px" onclick="addExpertise()">Add Expertise</button></div></section>
    <section class="section"><div class="category-grid">${state.categories.map(c=>`<article class="card"><h3>${c.name}</h3><div class="tags">${state.expertise.filter(e=>e.categoryId===c.id).map(e=>`<span class="tag">${e.name}</span>`).join("")}</div></article>`).join("")}</div></section>`
  );
}
function addCategory(){const n=document.getElementById("catname").value.trim();if(!n)return;state.categories.push({id:id("c"),name:n});save();toast("Category added");render()}
function addExpertise(){const c=document.getElementById("excat").value,n=document.getElementById("exname").value.trim();if(!c||!n)return;state.expertise.push({id:id("e"),categoryId:c,name:n});save();toast("Expertise added");render()}
function render(){
  const app=document.getElementById("app");
  if(!role){app.innerHTML=landing();return}
  if(role==="STAFF"){
    app.innerHTML=view==="find"?staffFind():view==="sessions"?staffSessions():staffOverview();
  }else if(role==="MENTOR"){
    app.innerHTML=view==="requests"?mentorRequests():view==="availability"?mentorAvailability():mentorOverview();
  }else{
    app.innerHTML=view==="mentors"?hrMentors():view==="bookings"?hrBookings():view==="availability"?hrAvailability():view==="categories"?hrCategories():hrOverview();
  }
}
save();
render();
