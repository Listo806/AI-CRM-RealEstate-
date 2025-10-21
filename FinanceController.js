const fetch = require('node-fetch');

exports.advance = async (req,res)=>{
  const payload = { type:'COMMISSION_ADVANCE', data:req.body };
  const r = await fetch(process.env.ZAPIER_FINANCE_HOOK, {
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
  });
  const j = await r.json().catch(()=>({ ok:true }));
  res.json({ ok:true, provider:j });
};
