export type SystemMetric={baseline:number;agentic:number;unit?:string}
export const metrics:Record<string,SystemMetric>={
  "Answer F1":{baseline:.66,agentic:.81},
  "Reasoning Quality":{baseline:2.6,agentic:3.6,unit:"/4"},
  "Evidence Support":{baseline:.71,agentic:.89},
  "Runtime":{baseline:6.8,agentic:14.2,unit:"s"},
  "Precision":{baseline:.72,agentic:.84},
  "Gold Claim Coverage":{baseline:.61,agentic:.79},
  "Retrieval Recall@8":{baseline:.64,agentic:.86},
  "Provenance Coverage":{baseline:.78,agentic:.96}
}
export const efficiency={tokens:{baseline:8200,agentic:18400},calls:{baseline:5,agentic:14},runtime:{baseline:6.8,agentic:14.2}}
export const questions=[
 {id:"Q-014",text:"Which approach is most suitable for low-resource biomedical relation extraction, considering accuracy, computational requirements, and assumptions made by the authors?",complexity:"High",goldClaims:6,docs:5,reasoning:"Comparison + inference",comparison:true,inference:true},
 {id:"Q-021",text:"Which author presents the strongest approach to robust clinical entity linking, and how does the answer change depending on what 'best' means?",complexity:"High",goldClaims:5,docs:6,reasoning:"Multi-document synthesis",comparison:true,inference:true},
 {id:"Q-033",text:"What assumptions are shared across recent retrieval-augmented scientific QA methods, and which assumptions appear most fragile?",complexity:"High",goldClaims:7,docs:8,reasoning:"Assumption analysis",comparison:true,inference:true},
 {id:"Q-041",text:"Which method offers the best quality-efficiency tradeoff for long-document scientific extraction under a constrained inference budget?",complexity:"High",goldClaims:6,docs:7,reasoning:"Tradeoff reasoning",comparison:true,inference:true},
 {id:"Q-052",text:"Where do the authors disagree about the cause of performance gains, and what evidence best supports each interpretation?",complexity:"High",goldClaims:8,docs:9,reasoning:"Contradiction handling",comparison:true,inference:true}
]
export const detail={
 question:questions[0],
 goldAnswer:"The strongest overall choice is BioRel-Adapt when 'most suitable' prioritizes extraction quality under limited labelled data, but that conclusion is conditional. It reports the best low-resource F1 and explicitly adapts to small training sets. LiteGraph is cheaper at inference time, so it becomes preferable when compute budget dominates. BioRel-Adapt assumes access to a domain language model and representative unlabeled biomedical text, which weakens its advantage in resource-poor domains.",
 baselineAnswer:"BioRel-Adapt is the best method because it has the highest F1 score on the biomedical benchmark. It outperforms LiteGraph and should therefore be preferred for low-resource relation extraction.",
 agenticAnswer:"If 'most suitable' means strongest extraction quality with limited labelled examples, BioRel-Adapt is the best-supported choice. It reports the highest low-resource F1 across the compared studies. However, LiteGraph requires substantially fewer inference tokens and may be preferable under a strict compute budget. BioRel-Adapt also assumes access to a biomedical pretrained encoder and representative unlabeled domain text, so its advantage may not transfer to settings where those resources are unavailable.",
 claims:[
  {gold:"BioRel-Adapt has the highest reported low-resource extraction F1.",base:"match",agent:"match",evidence:"Paper A, Table 3: BioRel-Adapt = 81.4 F1; LiteGraph = 76.9 F1."},
  {gold:"The recommendation depends on the definition of 'most suitable'.",base:"missing",agent:"match",evidence:"Cross-paper synthesis: quality and compute rankings differ."},
  {gold:"LiteGraph is preferable under a strict inference-compute criterion.",base:"missing",agent:"match",evidence:"Paper B reports 46% lower inference-token usage."},
  {gold:"BioRel-Adapt assumes access to a biomedical pretrained encoder.",base:"missing",agent:"match",evidence:"Paper A, Methods §2.1 explicitly requires BioLM initialization."},
  {gold:"BioRel-Adapt assumes representative unlabeled biomedical text.",base:"missing",agent:"match",evidence:"Paper A, §2.3 uses domain adaptive pretraining on the target corpus."},
  {gold:"Its advantage may weaken when those resources are unavailable.",base:"missing",agent:"partial",evidence:"Inference from ablation evidence; not directly stated by authors."}
 ],
 reasoning:[
  {name:"Defines decision criterion",baseline:1,agentic:4},
  {name:"Compares alternatives",baseline:2,agentic:4},
  {name:"Identifies assumptions",baseline:1,agentic:4},
  {name:"Grounds synthesis in evidence",baseline:3,agentic:4},
  {name:"Handles uncertainty",baseline:1,agentic:2}
 ]
}
