import { useState } from 'react';
import { api } from '../lib/api';

export default function LeadWidget(){
  const [q,setQ]=useState('');
  const [intent,setIntent]=useState(null);
  return (
    <div style={{fontFamily:'system-ui',width:320,border:'1px solid #ddd',borderRadius:12,padding:12}}>
      <div style={{fontWeight:600}}>Listo Qasa – AI Assistant</div>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about a property…" style={{width:'100%',marginTop:8,padding:8,border:'1px solid #ddd',borderRadius:8}}/>
      <button onClick={async()=>{ const r=await api.aiChat({ message:q }); setIntent(r.intent); }} style={{marginTop:8,padding:'8px 12px'}}>Ask</button>
      {intent && <pre style={{background:'#fafafa',padding:8,marginTop:8,maxHeight:200,overflow:'auto'}}>{JSON.stringify(intent,null,2)}</pre>}
    </div>
  );
}
