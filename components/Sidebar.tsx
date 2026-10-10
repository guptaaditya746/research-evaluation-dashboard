import Link from 'next/link'
const items=[['Overview','/'],['Questions','/questions'],['Question Detail','/questions/Q-014'],['Reasoning & Evidence','/reasoning'],['System Comparison','/comparison'],['Methodology','/methodology']]
export default function Sidebar(){return <aside className="sidebar"><div className="brand">Research Evaluation<small>Presentation mock dashboard</small></div><nav className="nav">{items.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav></aside>}
