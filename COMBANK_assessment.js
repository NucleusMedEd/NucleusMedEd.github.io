var Flexion = {
    AP_diameter: "decreases",
    Transverse_diameter: "increases",
    midline_bones: "move into flexion",
    paired_bones: "externally rotate",
    dura: "pulled cephalad",
    sacrum: "counternutates"
}; 


var Extension = {
	  AP_diameter: "increases",
    Transverse_diameter: "decreases",
    midline_bones: "move into extension",
    paired_bones: "internally rotate",
    dura: "pulled caudad",
    sacrum: "nutates"
};

	var SBS = {attachment: "Axis, C3, foramen magnum, S2"};

function SBS(movement){ 
    if(movement === Flexion){
    	return Flexion;
    } else if(movement === Extension) {
    	return Extension; 
    } else return "only Flexion or Extension please!";
}

var PAN = {association: "HBV"};

var Osteomalacia = { 
    pathophysio: "due to vitamin D deficiency",
    workup:"VitD: low, Ca: low, Ph: low, PTH: high"};
    
    Rickets === Osteomalacia.child
    
var Hyperaldosteronism = [hypokalemia, hypernatremia, metabolic_ALKALOSIS, hypomagnesemia, high_aldosterone2renin_ratio];
   
var metabolic_ALKALOSIS = "increased Bicarb reabsorption";

//Scoliotic curves are named for the spinal convexity
// rib hump is always on the side of convexity
function scoliosis(){
    var levoscoliosis = "convex Left";
    var dectroscoliosis = "convex Right";
    var func_scoliosis = "scoliotic curve that is secondary to another cause, such as a short leg. These curves are flexible and will go away with sidebending toward the convexity.";
    var a_scoliosis = "the rib hump will remain because the curve is rigid.";
}

	kienbock === "avascular necrosis LUNATE";
  
var h_ducreyi = {treatment: azithromycin || ceftriaxone};

	h_ducreyi.workup = PCR || "gram-negative coccobacilli";

acetaminophen.contraindication = "Liver failure";

nsaid.contraindication = "Kidney failure";

wegeners_granuloma.name = "granulomatosis with polyangiitis";

wegeners_granuloma.treatment = cyclophosphamide " and " corticosteroid;

var dermatomyositis = {
define: "auto-inflammatory disease of the muscles and skin.", 
riskFactor: "It more commonly occurs in woman and geriatric populations.", 
presentation: "includes proximal muscle weakness, myalgias, dysphagia, and dysphonia. Dermatological manifestations: periorbital heliotropic rash, and Gottron's papules{These are purple papules on the DIP and MCP joints of the hand}, telangiectasias surrounding the nail bed, and a rash over the shoulders and upper back.", 
workup: "elevated " + creatine_kinase + " and " + aldolase " and positive ANA. A muscle biopsy will reveal inflammatory changes.", 
treatment: "involves the use of oral steroids, and " + methotrexate + " or " + cyclophosphamide + " for refractory disease."};

thiazide.workup = 
hyperglycemia + " and " + hypercalcemia + " and " + hyponatremia + " and " + hypokalemia;

thiazide.riskFactor = 
"precipitate gout attacks due to increased reabsorption of urate and decreased excretion of urate resulting in hyperuricemia.";

ethambutol.side_effect = 
"red-green color blindness";

rifampin.side_effect = 
"orange body fluid";

isoniazid.side_effect = 
"peripheral neuropathy - give B6(pyridoxine)";

HLA_B27.association =
reactive_Arthritis, ankylosing_Spondylitis, psoriatic_Arthritis;

anterior_Uveitis.presentation = 
"sudden pain, redness, photophobia, decreased vision, and excessive tearing.";

anterior_Uveitis.treatment = 
"reducing the inflammatory response with steroid eye drops, and giving systemic steroids if the condition does not improve.";

erysipelas.bug = strep_pyogenes;

erysipelas.presentation = "reveals the rash appears as a raised, erythematous area with noted demarcation that is painful to touch and appears similar in consistency to an orange peel.";

erysipelas.treatment = {oral: penicillin || erythromycin, IV: ceftriaxone || cefazolin};

strep_pyogenes.association = rheumatic_fever, glomerulonephritis, toxic_shock_syndrome;

erythema_nodosum.define = "multiple erythematous macules and nodules on her shins.";

sarcoidosis.presentation = Erythema_nodosum + " combined with painful joints and changes in vision";

symptomatic_bradycardia.define = " a heart rate less than 50/min with associated " + hypotension + " acutely altered mental status, signs of shock, ischemic chest discomfort, or acute heart failure.";

symptomatic_bradycardia.treatment = "The first dose of atropine should be a 0.5 mg bolus repeated every 3-5 minutes for a maximum of 3 mg. If ineffective, transcutaneous pacing or IV dopamine or epinephrine may be used.";

Papillary_carcinoma.define = "is the most common type of thyroid cancer. It has the best prognosis and spreads through the lymph. Papillary tumors have a propensity to invade lymphatics but are less likely to invade blood vessels. Papillary carcinoma appears as an irregular solid or cystic mass in a normal thyroid parenchyma. Conversely, follicular thyroid cancer commonly invades blood vessels and metastasizes to the bone and lungs.";

Papillary_carcinoma.association = "radiation exposure";

Papillary_carcinoma.workup = "biopsy may reveal calcified psammoma bodies.";

Papillary_carcinoma.treatment = "surgical incision followed by radioactive iodine.";

Riedels_thyroiditis.define = "is caused by the replacement of thyroid tissue with fibrosis. The gland becomes a rock-hard painless mass. It is completely benign.";

iron_def_anemia.workup = {
CBC:"reveals a microcytic anemia (lower than 80 MCV)", Peripheral_smear: "shows microcytic (small) and hypochromic (large central pallor) red blood cells",
iron_studies: "demonstrate low serum Fe, elevated TIBC, low Fe saturation, low ferritin, and low percent iron saturation. In fact, ferritin of less than 10 is specific for iron deficiency anemia.",  
Hb_electrophoresis: "is normal in iron deficiency anemia."};


//iron deficiency anemia
iron_studies.ida = {
ferritin:"low",
serum_iron:"low",
TIBC:"high",
Fe_saturation:"low",
};

//anemia of chronic disease
iron_studies.acd = {
ferritin:"high",
serum_iron:"low",
TIBC:"low",
Fe_saturation:"low",
};

Staph_epidermidis.workup =  
gramStain:"positive", coagulase:"negative";

Hypokalemia.ecg = 
"QT prolongation, U waves, T wave inversion, or ST segment flattening.";
//U waves are additional upright waves that appear after T waves.

Hypokalemia.association = "is a common electrolyte abnormality in malnourished patients such as those suffering from an eating disorder.";

pernicious_anemia.presentation = 
"megaloblastic anemia with hypersegmented neutrophils (as the blood smear shows), chronic gastritis and vitamin B12 deficiency.";

pernicious_anemia.association =
"This is an autoimmune disorder and is usually co-morbid with other autoimmune diseases (in this case Hashimoto thyroiditis).";

pernicious_anemia.workup = 
"Autoantibodies against the parietal cells of the stomach and intrinsic factor are usually found.";


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
