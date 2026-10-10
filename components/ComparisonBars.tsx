'use client'
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'recharts'
const data=[
 {name:'Answer F1',Baseline:66,Agentic:81},{name:'Precision',Baseline:72,Agentic:84},{name:'Claim Coverage',Baseline:61,Agentic:79},{name:'Retrieval R@8',Baseline:64,Agentic:86},{name:'Evidence Support',Baseline:71,Agentic:89},{name:'Provenance',Baseline:78,Agentic:96}
]
export default function ComparisonBars(){return <div style={{height:330}}><ResponsiveContainer width="100%" height="100%"><BarChart data={data} layout="vertical" margin={{left:35,right:20}}><CartesianGrid strokeDasharray="3 3" horizontal={false}/><XAxis type="number" domain={[0,100]}/><YAxis type="category" dataKey="name" width={110}/><Tooltip/><Legend/><Bar dataKey="Baseline" fill="#9ca3af" radius={[0,4,4,0]}/><Bar dataKey="Agentic" fill="#111827" radius={[0,4,4,0]}/></BarChart></ResponsiveContainer></div>}
