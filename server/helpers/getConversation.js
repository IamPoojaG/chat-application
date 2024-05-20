import ConversationModel from '../models/conversationModel.js';

const getConversation = async (currentUserId) => {
  if (currentUserId) {
    const currentUserConversation = await ConversationModel.find({
      $or: [{ sender: currentUserId }, { receiver: currentUserId }],
    })
      .sort({ updatedAt: -1 })
      .populate('messages')
      .populate('sender')
      .populate('receiver');

    const conversation = currentUserConversation.map((con) => {
      const countUnseenMsg = con?.messages?.reduce((prev, curr) => {
        const msgByUserId = curr?.msgByUserId?.toString();

        if (msgByUserId !== currentUserId) {
          return prev + (curr?.seen ? 0 : 1);
        } else {
          return prev;
        }
      }, 0);

      return {
        _id: con?._id,
        sender: con?.sender,
        receiver: con?.receiver,
        unseenMsg: countUnseenMsg,
        lastMsg: con.messages[con?.messages?.length - 1],
      };
    });

    return conversation;
  } else {
    return [];
  }
};

export default getConversation;
