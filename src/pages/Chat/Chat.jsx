import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import tree from "../../uploads/tree.png";
import profile from "../../assets/profile.png";
import styles from "./Chat.module.css";

function Chat() {
  const [activeChat, setActiveChat] = useState({
    id: "",
    name: "",
    lastMessage: "",
    messages: [],
  });

  const chats = [
    {
      id: 1,
      name: "Alice",
      profile: profile,
      messages: [
        {
          id: 1,
          text: "Hey there!",
          type: "incoming",
          timestamp: "2025-06-08 15:00",
        },
        {
          id: 2,
          text: "Hi! How are you doing?",
          type: "outgoing",
          timestamp: "2025-06-08 15:01",
        },
        {
          id: 3,
          image: tree,
          type: "incoming",
          timestamp: "2025-06-08 15:02",
        },
        {
          id: 4,
          text: "Cool tree!",
          type: "outgoing",
          timestamp: "2025-06-08 15:03",
        },
        {
          id: 5,
          text: "I love trees!",
          type: "outgoing",
          timestamp: "2025-06-08 15:04",
        },
        {
          id: 6,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
        {
          id: 7,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
        {
          id: 8,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
        {
          id: 9,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
        {
          id: 10,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
        {
          id: 11,
          text: "Me too!",
          type: "incoming",
          timestamp: "2025-06-08 15:05",
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      profile: profile,
      messages: [
        {
          id: 1,
          text: "Hello! How are you?",
          type: "incoming",
          timestamp: "2025-06-08 08:00",
        },
        {
          id: 2,
          text: "Good! How about you?",
          type: "outgoing",
          timestamp: "2025-06-08 08:01",
        },
        {
          id: 3,
          text: "Great! Thanks!",
          type: "incoming",
          timestamp: "2025-06-08 08:01",
        },
        {
          id: 4,
          text: "Nice!",
          type: "outgoing",
          timestamp: "2025-06-08 08:02",
        },
      ],
    },
    {
      id: 3,
      name: "Chris",
      profile: profile,
      messages: [
        {
          id: 1,
          text: "Congratulations! You have been chosen as a lucky winner! To claim the prize, please send us the three numbers behind your credit card. You have 24 hours until your prize expires.",
          type: "outgoing",
          timestamp: "2025-06-02 14:21",
        },
      ],
    },
  ];

  function formatTimestamp(timestamp) {
    const messageDate = new Date(timestamp);
    const now = new Date();

    const isSameDay =
      messageDate.getDate() === now.getDate() &&
      messageDate.getMonth() === now.getMonth() &&
      messageDate.getFullYear() === now.getFullYear();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const isYesterday =
      messageDate.getDate() === yesterday.getDate() &&
      messageDate.getMonth() === yesterday.getMonth() &&
      messageDate.getFullYear() === yesterday.getFullYear();

    if (isSameDay) {
      return messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (isYesterday) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
    }
  }

  const handleChatClick = (chatId) => {
    setActiveChat(chats.find((chat) => chat.id === chatId));
  };

  // Sort chats by latest message timestamp (descending)
  const sortedChats = [...chats].sort((a, b) => {
    const lastA = a.messages[a.messages.length - 1]?.timestamp;
    const lastB = b.messages[b.messages.length - 1]?.timestamp;

    // Convert to Date objects for proper sorting
    const timeA = new Date(lastA);
    const timeB = new Date(lastB);

    return timeB - timeA; // Descending order
  });

  return (
    <Container className={styles.app}>
      <NavigationBar />
      <Row className={styles.chatRow}>
        {/* Left: Chat List */}
        <Col className={styles.chatList}>
          {sortedChats.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatListItem} ${activeChat !== null ? "hideOnMobile" : ""} ${activeChat.id === chat.id ? styles.active : ""}`}
              onClick={() => handleChatClick(chat.id)}
            >
              <div className={styles.profileSection}>
                <img src={chat.profile} className={styles.profile} />
              </div>
              <div className={styles.messageSection}>
                <strong>{chat.name}</strong>

                <div className={styles.lastMessageSection}>
                  <div className={styles.lastMessage}>
                    {chat.messages[chat.messages.length - 1].text}
                  </div>
                  <div className={styles.lastMessageTime}>
                    {formatTimestamp(
                      chat.messages[chat.messages.length - 1].timestamp
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Col>

        {/* Right: Chat Content */}
        <Col className={styles.chatContent} md={8}>
          {activeChat.id && (
            <div className={styles.chatHeader}>
              <img
                src={activeChat.profile}
                className={`${styles.profile} ms-4`}
              />
              <strong>{activeChat.name}</strong>
            </div>
          )}

          <div className={`${styles.chatWindow}`}>
            <div className={`${styles.chatMessages} px-4`}>
              {activeChat.messages.map((message) => (
                <div
                  className={`${styles.messageRow} ${message.type === "incoming" ? styles.incoming : styles.outgoing}`}
                  key={message.id}
                >
                  {message.text !== undefined && (
                    <p
                      className={`${styles.tailedBubble} ${message.type === "incoming" ? styles.incoming : styles.outgoing}`}
                    >
                      {message.text}
                    </p>
                  )}

                  {message.image !== undefined && (
                    <img src={message.image} alt="sent image"></img>
                  )}

                  <p className={styles.timeStamp}>
                    {message.timestamp.slice(-5)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {activeChat.id && (
            <div className={styles.messageInputContainer}>
              <button className={styles.attachmentButton}>＋</button>
              <input
                type="text"
                className={styles.messageInput}
                placeholder="Type your message..."
              />
              <button className={styles.sendButton}>Send</button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
