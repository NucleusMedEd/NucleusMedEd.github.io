function Disease(riskFactor, presentation, workUp, treatment, omm) {
    this.riskFactor = riskFactor;
    this.presentation = presentation;
    this.workUp = workUp;
    this.treatment = treatment;
    this.omm = omm;
}

var BPH = new Disease("","nocturia, urgency, hesitancy, straining, decreased stream force, incomplete emptying and dribbling","Hx and by DRE: the prostate will be smooth and non-tender, but enlarged. Physical exam should focus on ruling out potentially more serious causes including palpation of the prostate for masses to rule out malignancy, anal sphincter tone to rule out spinal cord compromise, suprapubic palpation to rule out cystitis, and pelvic floor and prostate gland palpation for tenderness to rule out abscess or prostatitis.","Pharmacologic treatments include alpha-1 receptor blockers, such as tamsulosin and 5-alpha-reductase inhibitors such as finasteride.","Chapman point on the left thigh anterior to the IT band and TART changes from T10-L1 representative of a viscerosomatic reflex from the prostate.");
