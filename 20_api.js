export const api = {
  aiChat: (body)=>fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
  aiExecute: (body)=>fetch('/api/ai/execute',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
  cma: (body)=>fetch('/api/analytics/cma',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
  predict: (body)=>fetch('/api/analytics/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
  mkCreate: (body)=>fetch('/api/marketing/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
  mkRun: ()=>fetch('/api/marketing/run-due',{method:'POST'}).then(r=>r.json()),
  orgMe: ()=>fetch('/api/organization/me').then(r=>r.json()),
  financeAdvance: (body)=>fetch('/api/finance/advance',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json()),
};
