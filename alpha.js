/*

Estimate the risk for stroke in AF pt. => use CHADS2 risk factor score. 
1 point each = [CHF, HTN, a>=75, DM2]; 2 points each = [stroke, TIA];

CHADS2 === 0 {low risk}
CHADS2 > 0 <= 2 {moderate risk}
CHADS2 >= 3 {severe risk}

Tx_aFib = long-term anti-coagulation{
        if(score >= 3){ 
            drug = 'Warfarin';
        } else {
             drug = 'null';
        }          
    }




function age_devMilestone() {
    let age;
    if (age === 4) {
        return "rolling from front to back, swiping at objects, cooing noise, and a social smile";
    } else if (age === 6) {
        return "6";
    } else if(age === 9){
        return "crawling and pulling to stand, pincer grasp, mama and baba nonspecific language, responds to name, and waving bye.";
    } else if(age === 12){
        return "standing, mama and baba specific language";
    } else if(age === 15){
        return "walking, using a cup, forming 4-5 words, and temper tantrums";
    } else {
        return 'sorry no milestone available, try again';
    }

*/
function Disease(name, riskFactor, pathoPhysio, presentation, workUp, treatment, omm, question, questionChoices, overView) {
    this.name = name;
    this.riskFactor = riskFactor;
    this.pathoPhysio = pathoPhysio;
    this.presentation = presentation;
    this.workUp = workUp;
    this.treatment = treatment;
    this.omm = omm;
    this.question = question;
    this.questionChoices = questionChoices{};
    this.overView = overView;
}
/*
var insert_name = new Disease(insert object data "name", "riskFactor","presentation","workUp","treatment","omm","question","overView");
var insert_name = new Disease("", "", "", "", "", "", "", "");

insert_name.name = //string,array,object,w.e;
insert_name.riskFactor = //string,array,object,w.e;
insert_name.pathoPhysio = //string,array,object,w.e;
insert_name.presentation = //string,array,object,w.e;
insert_name.workUp = //string,array,object,w.e;
insert_name.treatment = //string,array,object,w.e;
insert_name.omm = //string,array,object,w.e;
insert_name.question = //string,array,object,w.e;
insert_name.questionChoices = {key1:"value1", key2:"value2",};
insert_name.overView = //string,array,object,w.e;

*/

var BPH = new Disease("Benign Prostatic Hypertrophy", "", "","nocturia, urgency, hesitancy, straining, decreased stream force, incomplete emptying and dribbling","Hx and by DRE: the prostate will be smooth and non-tender, but enlarged. Physical exam should focus on ruling out potentially more serious causes including palpation of the prostate for masses to rule out malignancy, anal sphincter tone to rule out spinal cord compromise, suprapubic palpation to rule out cystitis, and pelvic floor and prostate gland palpation for tenderness to rule out abscess or prostatitis.","Pharmacologic treatments include alpha-1 receptor blockers, such as tamsulosin and 5-alpha-reductase inhibitors such as finasteride.","Chapman point on the left thigh anterior to the IT band and TART changes from T10-L1 representative of a viscerosomatic reflex from the prostate.");

var myastheniaGravis = new Disease("Myasthenia gravis (MG)", "", "antibodies attack the acetylcholine nicotinic postsynaptic receptors in the neuromuscular junction of skeletal muscles.", "generalized weakness and muscle fatigue. The fatigue is worsened by activity and symptoms worsen after exercise or at the end of the day. This fluctuation in weakness can help differentiate MG from other neuromuscular disorders. The disease can attack any muscle group although the ocular, bulbar and facial muscles are more likely affected. Approximately 50 percent of patients present with ocular symptoms. Proximal limbs are affected more than distal in MG. Physical examination may present with a wide range of signs and symptoms. Ocular complaints include ptosis, diplopia, and internuclear opthalmoplegia or vertical gaze paresis with pupil sparing. The ptosis may increase with sustained upward gaze or by holding up the opposite eyelid. Patients with bulbar symptoms are fatigable chewing, dysarthria and dysphagia or nasal speech. Facial muscle fatigue can cause an expressionless appearance. Respiratory muscle weakness is the most severe form of MG and can lead to respiratory failure. Respiratory failure is often precipitated by upper respiratory infection. Patients with MG often present with transient symptoms that eventually become more persistent and worsen over years.", "initial test? An acetylcholine receptor antibody test is a quick, easy, non-invasive, and cost-effective study to aid in the diagnosis of Myasthenia Gravis (MG).  It is the most appropriate first step in determining whether a patient indeed has MG or not. Repetitive nerve stimulation to an affected muscle shows increasing decrement in amplitude of compound muscle action potential. This progressive decline in amplitude is seen with the first few stimuli to the muscle. A normal muscle will show no change in amplitude with repetitive nerve stimulation.", "Acetylcholine esterase inhibitors are the treatment of choice in patients with Myasthenia Gravis (MG). Pyridostigmine, neostigmine, and edrophonium are common agents. Pyridostigmine is the agent of choice used for maintenance therapy. By inhibiting acetylcholine esterase, the concentration of acetylcholine is increased. Acetylcholine esterase inhibitors improve symptoms of MG only and do not stop the progression of the disease.", "", "A 61-year-old male with a past medical history of coronary artery disease presents to the emergency department with generalized weakness, fever and difficulty breathing. He reports a recent upper respiratory tract infection that seemed to get progressively worse. Review of symptoms is positive for occasional slurred speech and blurred vision over the past few years that has always been transient. He also reports that he has no problem when he begins to eat his meal but does have difficulty finishing a meal in the same sitting due to chewing fatigue, especially when eating meats. Vital signs reveal a temperature of 36.7C (98.0F), blood pressure of 124/88 mmHg, a heart rate of 84/min and a respiratory rate of 20/min.  Physical examination is remarkable for eyelid droop with sustained upgaze, weakness of eye adduction, upper extremity muscle strength 3 out of 5, with complete muscle strength in lower extremities. Neurological reflexes are two out of two throughout. He appears to have difficulty holding up his head upright in the neutral position for a prolong amount of time.", "Which of the following is associated with this patient's diagnosis? Thymoma");

myastheniaGravis.questionChoices = {A: "ALS", B:"basilar artery thrombosis", C:"Lambert-Eaton myasthenic syndrome", D:"multiple sclerosis", E:"myasthenia gravis"};

var mg_qChoices = myastheniaGravis.questionChoices;
var ac_format = "";
for (i = 0; i < Object.keys(mg_qChoices).length; i++) {
    var aLetters = Object.keys(mg_qChoices);
    var aNames = Object.values(mg_qChoices);
    ac_format += aLetters[i] +". "+ aNames[i]+"\n" ;
}

var basilar_artery_thrombosis = {overView: "Basilar artery thrombosis causes ischemia in the area of the pons. Occlusion in the basilar artery results in motor and oculomotor symptoms. Motor symptoms include paresis and corticospinal tract abnormalities. The weakness is initially lateralized and can be transient or persistent. Movements can be adventitious and resemble fasciculations. Patients can show repetitive jerking and twitching in limbs contralateral to a hemiparesis. Incoordination is a common motor finding. Bilateral ataxia is witnessed but it can be asymmetric and more severe on the weaker side. Weakness of the bulbar muscles, such as facial weakness, dysphonia, dysarthria, dysphagia, and limited jaw movements, are common. Weakness is seen on the side of the face and contralateral side of the body. Bulbar weakness is bilateral. Oculomotor symptoms and signs are common in basilar artery thrombosis with ischemia of the pons. Somatosensory abnormalities are not seen. Patients present with altered mental status with motor abnormalities. This patient presents with bilateral symptoms making the diagnosis of basilar artery thrombosis less likely."};

var ALS = {overView: "Amyotrophic lateral sclerosis (ALS) is a common neurodegenerative disease. Approximately 75 percent of patient present with limb involvement. The cause is unknown. There are many types of ALS but the classic form affects upper and lower motor neurons. Upper motor signs include muscle weakness with spasticity and hyperreflexia. Findings of a lower motor neuron lesion include muscle weakness with atrophy and fasiculations. Symptoms of extremity involvement include tripping, stumbling or foot drop. Classic history includes a 'slapping gait'. Wrist drop and cramping of muscles in the hands are reported. Patients may complain of difficulty buttoning a shirt or turning a key. Only a quarter of patients have bulbar weakness characterized by slurred speech and/or hoarseness, choking while eating and difficulty drinking liquids. Emotional and cognitive difficulties, such as depression, emotional liability, and impaired social behavior, can also manifest in ALS. Serious complications of respiratory insufficiency and aspiration pneumonia develop as the disease progresses. Patients eventually become bedridden. Physical examination is remarkable for muscle atrophy with spasticity and fasiculations, abnormal reflexes, nasal voice change and drooling. Extraocular movements are spared in ALS making this diagnosis less likely in this patient."};

var lambertEaton = {overView:"Lambert-Eaton myasthenia syndrome is a rare autoimmune neuromuscular disorder caused by impaired acetylcholine release from the presynaptic receptors. In the disease, antibodies attack the voltage-gated calcium channels. Calcium flux across the membranes causes the release of acetylcholine. Symptoms of patients with Lambert-Eaton myasthenia syndrome present with proximal muscle weakness, hyporeflexia, and autonomic changes. Typically, patients report symptoms with gait or difficulty getting out of bed, chairs and/or climbing stairs. Muscle atrophy is not apparent and muscle weakness improves with activity. Autonomic dysfunction is unique to Lambert-Eaton myasthenia syndrome. Oropharyngeal symptoms of dysarthria, dysphagia and difficulty chewing are less common but can be present in Lambert-Eaton. Extraocular weakness is less common in Lambert-Eaton and respiratory muscle weakness is usually not a feature of the disease."};

var multipleSclerosis = {overView:"Multiple sclerosis (MS) is an immune-mediated inflammatory disease of the central nervous system characterized by demyelination. The cause is unknown, however a combination of environmental, immunologic and genetic factors are thought to be accountable. In the disease, multifocal zones of demyelination, known as plaques are scattered throughout the white matter. White matter of the brain and spinal cord are exclusively involved in MS. Gray matter, axons and the peripheral nervous systemic are spared. Women are more commonly affected and they typically present in their third or fourth decades. Symptoms can be monofocal or multifocal and most patients report a history of asymptomatic periods in between exacerbations. Clinical features include decreased sensory, muscle weakness with spasticity, and loss of bladder and bowel control. Optic neuritis is typically one of the first presenting symptoms in which patients complain of partial or complete vision loss. Internuclear ophthalmoplegia is also seen in MS. This patient reports a steady progression of symptoms and lacks autonomic complaints making MS an unlikely diagnosis."};

var name  = {overView:"value"};

var b12deficiency = {overView:"Vitamin B12 is a water-soluble vitamin that is excreted through the urine. However, it can be stored in the liver for up to one year and a deficiency does not always manifest itself for one year or more. Vitamin B12 deficiency is most often due to inadequate dietary intake, malabsorption associated with pernicious anemia and other gastric abnormalities such as Crohn's disease or Celiac disease. Vegans and vegetarians are particularly susceptible to vitamin B12 deficiency. In addition, medications such as oral contraceptive pills and proton pump inhibitors can reduce absorption of the vitamin. The onset of pernicious anemia is insidious and vague. Typically, medical attention is sought once symptoms of organ involvement manifest. Pernicious anemia can present with the classic triad of weakness, sore tongue and paresthesias but are usually not the chief symptom complex. As the disease progresses, defects in the peripheral nervous system become apparent. These include impaired vibration sense, ataxia and paresthesias due to posterior spinal cord demyelination. Cardiovascular complications include heart failure. Patients with a hematocrit < 20% typically have an increase in cardiac output which can produce a systolic flow murmur. Hyperbilirubinemia is another feature of pernicious anemia. This patient presents with risk factors and signs of a chronic deficiency as noted by pallor and heart failure. The presence of an untreated infection compromised her depleted state."};

var hypothyroidism  = {overView:"Hypothyroidism is an endocrine disorder in which the thyroid cannot produce sufficient thyroid hormones. Iodine deficiency or Hashimoto's disease are the most common causes of primary hypothyroidism. Classic symptoms include lethargy, weight gain, dry skin, cold intolerance, and constipation; however, signs and symptoms can be subtle. Physical examination is remarkable for slurred speech and slow movements, weight gain, dry, coarse hair or hair loss. Diagnosis is made by thyroid function studies, including thyroid stimulating hormone, thyroxine and trioothryroxidine levels. Although this patient presents with some features of hypothyroidism, a systolic flow murmur and conjunctiva pallor are not associated with the disease."};

var name  = {overView:"value"};


// HIV algorithm
function HIV_prophylaxis(cd4){
    if (cd4 < 200 && cd4 > 50){
	    return "prophylaxis: TMP-SMX"; 
    } else if(cd4 < 50){
	return "prophylaxis: azithromycin";
    } else return "no prophylaxis needed!"
}

var OA_omm  = {bottomLine:"The OA's rotation and sidebending are coupled in opposite directions. This can occur in the planes of flexion, extension, and neutral. Translation in one direction induces sidebending in the opposite direction."};

var OA_omm  = {question:"A 66-year-old male presents to the office with the complaint of neck pain. History reveals the pain began after falling asleep with his head leaning back in a chair two days ago. Osteopathic structural examination reveals his occipito-atlantal (OA) joint to be restricted in translation to the left. Left translation becomes even more restricted in the flexed position. What is the most likely diagnosis?"};

var OA_omm  = {q_answer:"Extended, sidebent left, rotated right"};


var leadPoisoning = {};
leadPoisoning.overView = "Lead is a metallic element that is a byproduct of silver processing. It is found in paints, pottery, and automobile emissions. Individuals can be exposed by drinking water circulating through lead pipes or food and beverages served in lead based cans. Chronic lead exposure, or acute lead poisoning, can affect every organ system. Patients present with nonspecific symptoms such as irritability, trouble concentrating, abdominal pain and anemia. Lead is a toxic metal that can disrupt hemoglobin synthesis. It can lead to the production of free erythrocyte protoporphyrin which precipitates in the development of anemia. Bluish pigmentation along the gum-tooth line and 'wrist/ankle drop' can be appreciated on physical examination. Lead lines at the end of growing long bones are found in children with moderate lead toxicity (blood lead levels greater than 45 mcg/dL). However, long bone radiographs are not useful as part of the diagnostic workup in children with lead levels less than 45 mcg/dL";

leadPoisoning.question  = "A 4-year old male presents to the emergency department with abdominal pain with nausea, vomiting and constipation for two weeks duration. Review of symptoms is positive for numbness and tingling in his right upper extremity, anorexia and irritability. Vitals reveal a temperature of 37.2ºC (99ºF), blood pressure of 90/68 mmHg, a heart rate of 99/min and a respiratory rate of 18/min. Physical examination is remarkable for conjunctival pallor, mildly distended abdomen with tympany, and 4 out of 5 muscle strength in the upper extremity. Radiograph of the right upper extremity shows a dense metaphyseal line at the humeroulnar joint.";

leadPoisoning.pathoPhysio = "Lead causes increased generation of reactive oxygen species.";

var lab_leadPoisoning = {lab:"Free erythrocyte protoporphyrin (FEP) in the serum measures the effect of lead on hemoglobin synthesis. Elevated levels indicate chronic lead exposure over the preceding three-month period. In erythroid cells, lead limits iron delivery to ferrochelatase. The surrogate metal zinc is inserted into protoporphyrin and accumulates in excess amounts in red blood cells, where it is detected as erythrocyte zinc protoporphyrin. If FEP is elevated, then additional hematological analysis should be performed. This analysis includes a complete blood count with peripheral smear and kidney function tests. The clinical monitoring test for diagnosing lead toxicity is the blood lead level. The blood lead level is a good indication of lead exposure over a few weeks span. The serum FEP is useful to distinguish acute from chronic exposure. If both serum FEP and blood lead levels are elevated, then exposure is most likely chronic."};
var pSmear_leadPoisoning = {peripheralSmear:"Lead poisoning can cause a microcytic and hypochromic anemia. Lead inhabitation of a certain enzyme can cause degradation of ribosomal ribonucleic acid (RNA) in red blood cells that leads to basophilic stippling on the peripheral smear. Basophilic stippling of erythrocytes represents aggregation of ribosomal RNA in the cytoplasm of erythrocytes. A group of red dots, representing ribosomes, are present on the periphery of erythrocytes. In basophilic stippling, there is impairment of 5 prime nucleotidase which is normally responsible for degrading RNA. In addition to basophilic stippling, sideroblasts may be seen on bone marrow examination. Ringed sideroblasts are a result of accumulation of mitochondrial iron in erythroblasts from insufficient production of protoporphyrin. However, reduced delivery of iron to the site of heme formation may produce the presence of sideroblasts in peripheral smears of those with lead poisoning."};
leadPoisoning.workUp = [lab_leadPoisoning, pSmear_leadPoisoning];

leadPoisoning.treatment = "Chelation therapy is indicated when blood lead levels are greater than 100 mcg/dL. Chelation can be considered in symptomatic patients with blood lead levels 50 to 100 mcg/dL. It is a method used to rapidly decrease blood lead levels and relieve acute symptoms related to lead toxicity. Dimercaptosuccinic acid is a chelating agent used to treat lead poisoning in children. Other chelating agents, such as alpha lipoic acid can be used to treat adults. Chelation should be undertaken once exposure to lead is identified and stopped.\n Symptoms in a 4-year-old child hint towards lead toxicity. Radiograph evidence of lead toxicity with physical evidence shows level greater than 100 mcg/dL. Dimercaprol is usually reserved for encephalopathy as it can pass blood brain barrier.";

//OA somatic dysfunction
var OA_omm = {};
OA_omm.bottomLine = "The OA's rotation and sidebending are coupled in opposite directions. This can occur in the planes of flexion, extension, and neutral. Translation in one direction induces sidebending in the opposite direction.";

OA_omm.question = "A 66-year-old male presents to the office with the complaint of neck pain. History reveals the pain began after falling asleep with his head leaning back in a chair two days ago. Osteopathic structural examination reveals his occipito-atlantal (OA) joint to be restricted in translation to the left. Left translation becomes even more restricted in the flexed position. What is the most likely diagnosis?";

OA_omm.q_answer = "Extended, sidebent left, rotated right";


// Cardiology Stress Tests
var cardio_stressTests = {};
cardio_stressTests.coronary_angiography = "Coronary angiography is the gold standard for the diagnosis of atherosclerosis. The extent and severity of coronary heart disease can be identified on angiography. Specifics, such as patient prognosis as well as optimal management are provided by the test. However, the functional capacity of a single vessel cannot be ascertained with angiography. Coronary angiography is indicated in patients with symptoms in spite of maximal medical treatment and for those considered high risk.";

cardio_stressTests.dobutamine_echocardiography = "Stress echocardiography demonstrates the extent of coronary artery disease and ischemia by observation of cardiac wall abnormalities. Pharmacological stress echocardiography is preferred in patients that are unable to perform treadmill exercise. Dobutamine is a pharmacological agent that increases heart rate and myocardial contractility. In contrast to exercise echocardiography, this technique is able to see the heart at variable stress levels and at peak stress. Although stress test without imaging is the preferred initial test in patient that presents with cardiac chest pain, stress test with imaging is preferred in a certain subset of patients. Assessment of myocardial viability and visualization of cardiac lesions provides more information than a stress test without imaging. One indication for additional imaging includes those with preexisting electrographic abnormalities that may interfere with ECG monitoring such as a left bundle branch block or those with a ventricular paced rhythm. Also, patients that are unable to physically attempt the exercise component of the stress test are recommended to take this test. This patient presents with an underlying ECG abnormality due to pacemaker. In addition, this patient is unable to perform the workload required in an exercise stress test, therefore he should be a candidate for a pharmacological stress test.";

cardio_stressTests.exercise_electrocardiogram = "Exercise with electrocardiogram monitoring is the initial cardiac stress test of choice in patients with exertional chest pain. The exercise stress test is preferred to pharmacological stress test because it provides the most information regarding a patients' symptoms and hemodynamic response during normal forms of activity. Furthermore, the inability to perform an exercise stress test is a negative predictor of chronic heart disease. Although this test has low sensitivity and specificity compared to other options, exercise ECG testing is cost-effective and able to identify patients at low and high risk. A 1-mm depression of the ST segment during exercise is characteristic of ischemic disease. A depression greater than 2 mm is a sign of severe ischemic disease and represents a poor prognosis. However, exercise with ECG is not appropriate in patients who cannot perform the appropriate work load and/or individuals with baseline ECG abnormalities that may obscure the final diagnosis. Other absolute contraindications include acute myocardial infarction within 2 days, unstable angina, uncontrolled heart failure. This patient presents with classic symptoms of stable angina. Therefore, the first step in the cardiac evaluation of a low risk patient is an exercise electrocardiogram.";

cardio_stressTests.exercise_stress_echocardiography = "A stress echocardiogram provides a two-dimensional dynamic view of the heart and its structures during and after physical stress. Physical stress is induced by treadmill or bicycle exercise. The test is able to ascertain the extent and severity of ischemia secondary to atherosclerosis. Although the first step in evaluation of coronary artery disease is usually performed without imaging, there are several indications to obtain an echocardiogram. These indications include resting electrocardiogram abnormalities, valvular murmurs, pulmonary hypertension and hypertrophic cardiomyopathy. This patient present with a murmur suggestive of mitral regurgitation. Therefore, a stress echocardiogram is warranted.";

cardio_stressTests.myocardial_perfusion_imaging = "Myocardial perfusion imaging is a stress test that uses a radioactive tracer to illustrate the function of the myocardium. Myocardial perfusion during the resting state and stressed states are compared. Differences between the two provides information on myocardial viability. Furthermore, estimates of cardiac size and function are computed by this test. This test is slightly more sensitive than stress echocardiography alone. It is indicated in patients that demonstrate cardiac wall abnormalities during an echocardiogram. Other indications include patients with active chest pain and no ischemic changes as seen on electrocardiogram.";

//Hepatitis
var Hepatitis = {};
Hepatitis.A = "Hepatitis A is a picornavirus most commonly spread through food, like shellfish. This type of hepatitis is prevented by giving a vaccine before traveling to developing countries. HAV can cause food-borne outbreaks in the U.S., usually associated with infected food handlers in restaurants. Most commonly, this is self-limiting, and may only require supportive care.";
Hepatitis.B = "Hepatitis B is a hepadnavirus that is spread through blood contact and other body fluids, including sexual contact. HBV is the only hepatitis virus that has DNA as the genome, and it also has a reverse transcriptase that it uses to make DNA from viral RNA in the cytoplasm. HBV can manifest as acute viral hepatitis or chronic symptoms including, cirrhosis or hepatocellular carcinoma. Treatment involves HBV vaccine in unvaccinated individuals, and IFN-α or antiviral drugs. A subunit vaccine containing the HB surface antigen is available.";
Hepatitis.C = "Hepatitis C is spread through the blood, and possibly sexual contact, but there is no vaccine available. In order to infect hepatocytes, HCV coats itself with low-density and very low-density lipoproteins. 80% of patients develop chronic hepatitis. The treatment is IFN-α, and ribavirin can be considered.";
Hepatitis.D = "Hepatitis D requires a coexistent hepatitis B infection.";
Hepatitis.E = "Hepatitis E is spread through the fecal-oral route and is more common in developing countries. This type of hepatitis is associated with high fetal mortality when occurring in pregnant women.";

// Gout 

var gout = {};
gout.overView = "This is a classic presentation of tophaceous gout. The spontaneous onset of pain, redness, and swelling in the metatarsal-phalangeal joint of the great toe is characteristic of podagra, the most common presentation of gout.  Gout should be considered in any patient who presents with monoarticular arthritis of any joint (with the exception of the glenohumeral joint as this is typically indicative of pseudogout).  Risk factors for gout include excessive alcohol and protein intake in addition to dehydration.  Gout is more common in middle-aged to elderly male patients, but it can occur in younger males as well.  Radiographic findings will rule out fracture and may demonstrate soft tissue swelling.  The most accurate test for diagnosing tophaceous gout is joint aspiration revealing a white blood cell (predominantly neutrophils) count between 2,000 and 50,000 with negatively birefringent needle-shaped crystals.  Any time a patient presents with acute pain, erythema, and warmth of a joint it should be tapped to exclude septic arthritis.";
gout.treatment = "There are 2 approaches to treatment of gout: management of acute attacks and prophylaxis. NSAIDs such as indomethacin are the mainstay therapy for acute gout attacks. High doses are given for 2-5 days until the symptoms have subsided. Colchicine was the mainstay of treatment of acute gout flares in the past. However, it is rarely used because of its high side effect profile. Once the acute attack is resolved prophylactic agents such as allopurinol can be given.";
gout.question = "A 21-year-old male presents to the office with the complaint of severe pain in his right first toe.  History reveals that there has not been any trauma to the extremity. The patient reports that he was recently out in the hot sun at a baseball game. He has never experienced anything like this before and is not currently taking any  medications. Social history reveals the patient has been drinking 6-8 beers per day for the past week because he's been on spring break. Vital signs reveal a temperature of 38ºC (100.4 F), a blood pressure of 140/82 mm Hg, and a heart rate of 84/min. Physical examination reveals warmth and redness in the great toe. A radiograph is obtained as shown in the exhibit.";
