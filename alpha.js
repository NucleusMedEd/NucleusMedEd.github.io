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
