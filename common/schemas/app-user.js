module.exports = {
    status: {
        type: String,
        default: 'Registered'
    },
    apiKey: {
        type: String
    },
    deviceTokens: [String],
    registrationDate: {
        type: Date,
        default: Date.now
    }
};