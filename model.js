const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BankSchema = new Schema({
    name: String,
    location: String,
    branch: String,
    phone: String,
    address: String,
    accountNumber: String,
    accounts: [
        {
            accountId: {required: true, type: Schema.Types.ObjectId, ref: 'Account'}
        }
    ]
});

const BankModel = mongoose.model("Bank", BankSchema);

module.exports = BankModel;