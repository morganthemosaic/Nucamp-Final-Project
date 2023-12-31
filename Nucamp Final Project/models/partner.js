const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Schema(
	{
		name: {
			required: true,
			type: String,
			unique: true
		},
		image: {
			type: String,
			required: true
		},
		featured: {
			type: Boolean,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
