const mongoose = require ('mongoose');

const messageSchema = mongoose.Schema ({
  conversationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Conversation'},
  sender: {type: String},
  receiver: {type: String},
  message: [
    {
      senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      senderName: {type: String},
      receiverName: {type: String},
      body: {type: String, default: ''},
      isRead: {type: Boolean, default: false},
      createdAt: {type: Date, default: Date.now ()},
    },
  ],
});

module.exports = mongoose.model ('Message', messageSchema);
