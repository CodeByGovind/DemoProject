import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './message'
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

const renderComposer = (props) => (

  <Composer
    {...props}
    textInputStyle={{
      color: '#222B45',
      backgroundColor: '#EDF1F7',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
      
    }}
  />

);

const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 100,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
  </Send>
);

const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: {backgroundColor: 'gray', borderRadius: 15, marginRight: 20 },
      right: {},
    }}
  />
);

// const renderMessage = (props) => (
//   <Message
//     {...props}
//     // renderDay={() => <Text>Date</Text>}
//     containerStyle={{
//       left: { textColor: 'white' },
//     }}
//   />
// );

const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: 'gray', borderRadius: 20, marginRight: 2 },
      right: { backgroundColor: 'gray', borderRadius: 20, marginLeft: 2 },
    }}
    textStyle={{
      left: { color: 'white' },
      right: { color: 'white' },
    }}
    // linkStyle={{
    //   left: { color: 'blue' },
    //   right: { color: 'blue' },
    // }}
    customTextStyle={{ fontSize: 20, lineHeight: 24 }}
  />
);


export default function Example() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])
  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      
      messages={messages}
      onSend={messages => onSend(messages)}
      // renderComposer={renderComposer}
      // renderBubble={renderBubble}
      renderMessageText={renderMessageText}
      minComposerHeight={50}
      bottomOffset={70}
      // renderSend={renderSend}
      user={{
        _id: 1,
      }}
    />
  )
}