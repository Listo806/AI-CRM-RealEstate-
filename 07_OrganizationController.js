const Organization = require('../models/Organization');
const CommissionSplit = require('../models/CommissionSplit');

exports.createOrg = async (req,res)=> res.json(await Organization.create(req.body));
exports.myOrg = async (req,res)=> res.json(await Organization.findById(req.user.organizationId));
exports.splitsForDeal = async (req,res)=>{
  const { dealId } = req.params;
  res.json(await CommissionSplit.find({ dealId }));
};
