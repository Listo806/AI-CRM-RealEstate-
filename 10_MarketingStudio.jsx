import { useState } from 'react';
import { api } from '../lib/api';

export default function MarketingStudio(){
  const [task,setTask]=useState({ channel:'instagram', content:'New listing!', runAt:'' });
  const [ok,setOk]=useState(null);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Marketing Studio v2</h1>
      <select className="border p-2" value={task.channel} onChange={e=>setTask({...task, channel:e.target.value})}>
        <option>instagram</option><option>facebook</option><option>email</option>
      </select>
      <textarea className="border p-2 w-full my-2" rows={4} placeholder="Content" value={task.content} onChange={e=>setTask({...task, content:e.target.value})}/>
      <input className="border p-2" type="datetime-local" onChange={e=>setTask({...task, runAt:e.target.value})}/>
      <div className="my-3 flex gap-2">
        <button className="btn" onClick={async()=>setOk(await api.mkCreate(task))}>Schedule</button>
        <button className="btn" onClick={async()=>setOk(await api.mkRun())}>Run Due Now</button>
      </div>
      {ok && (<pre className="bg-gray-50 p-3">{JSON.stringify(ok,null,2)}</pre>)}
    </div>
  );
}
