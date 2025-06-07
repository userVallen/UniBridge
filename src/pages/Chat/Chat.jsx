import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import tree from "../../assets/tree.png";
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
      lastMessage: "I love trees!",
      messages: [
        { id: 1, text: "Hey there!", type: "incoming", timestamp: "10:00 AM" },
        {
          id: 2,
          text: "Hi! How are you doing?",
          type: "outgoing",
          timestamp: "10:01 AM",
        },
        {
          id: 3,
          image: tree,
          type: "incoming",
          timestamp: "10:02 AM",
        },
        {
          id: 4,
          text: "Cool tree!",
          type: "outgoing",
          timestamp: "10:03 AM",
        },
        {
          id: 5,
          text: "I love trees!",
          type: "outgoing",
          timestamp: "10:04 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      lastMessage: "Nice!",
      messages: [
        {
          id: 1,
          text: "Hello! How are you?",
          type: "incoming",
          timestamp: "08:00 AM",
        },
        {
          id: 2,
          text: "Good! How about you?",
          type: "outgoing",
          timestamp: "08:01 AM",
        },
        {
          id: 3,
          text: "Great! Thanks!",
          type: "incoming",
          timestamp: "08:01 AM",
        },
        {
          id: 4,
          text: "Nice!",
          type: "outgoing",
          timestamp: "08:02 AM",
        },
      ],
    },
  ];

  const handleChatClick = (chatId) => {
    setActiveChat(chats.find((chat) => chat.id === chatId));
  };

  return (
    <Container className={styles.app}>
      <NavigationBar />
      <Row className={styles.chatRow}>
        {/* Left: Chat List */}
        <Col className={styles.chatList}>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatListItem} ${activeChat !== null ? "hideOnMobile" : ""}`}
              onClick={() => handleChatClick(chat.id)}
            >
              <strong>{chat.name}</strong>
              <div className={styles.lastMessage}>{chat.lastMessage}</div>
            </div>
          ))}
        </Col>

        {/* Right: Chat Content */}
        <Col className={`${styles.chatContent} mx-4`}>
          <div className={styles.chatHeader}></div>
          <div className={styles.chatMessages}>
            {activeChat.messages.map((message) => (
              <div
                className={`${styles.chatBubble} ${message.type === "incoming" ? styles.incoming : styles.outgoing}`}
                key={message.id}
              >
                {message.text !== undefined && (
                  <p className={styles.tailedBubble}>{message.text}</p>
                )}
                {message.image !== undefined && (
                  <img src={message.image} alt="sent image"></img>
                )}
                <p className={styles.timeStamp}>{message.timestamp}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
