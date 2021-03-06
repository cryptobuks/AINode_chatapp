const express = require ('express');
const router = express.Router ();

const MessageCtrl = require ('../controllers/message');
const Whois = require ('../Helpers/Whois');

router.post (
  '/chat-messages/:senderId/:receiverId',
  Whois.VerifyToken,
  MessageCtrl.SendMessage
);

router.get (
  '/chat-messages/:senderId/:receiverId',
  Whois.VerifyToken,
  MessageCtrl.GetAllMessage
);

module.exports = router;
