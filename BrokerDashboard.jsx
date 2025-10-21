import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function BrokerDashboard(){
  const [org,setOrg]=useState(null);
  useEffect(()=>{ api.orgMe().then(setOrg); },[]);
  if(!org) return <div className="p-6">Loading…</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Brokerage Dashboard</h1>
      <p className="text-gray-600">{org.name} • {org.country}</p>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {org.agents?.map(a=> (
          <div key={a.userId} className="border rounded p-3">
            <div className="font-medium">Agent: {a.userId}</div>
            <div className="text-sm text-gray-500">Role: {a.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
