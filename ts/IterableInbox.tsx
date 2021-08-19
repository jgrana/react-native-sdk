'use strict'

import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

import IterableInboxMessageList from './IterableInboxMessageList'
import IterableInboxEmptyState from './IterableInboxEmptyState'
import IterableInboxMessageDisplay from './IterableInboxMessageDisplay'
import sampleMessages from './sampleMessageData'
import Message from './messageType'

type inboxProps = {
   navTitleCustomization: {[key: string] : string}
   emptyStateCustomization: {[key: string] : string}
   messageRowCustomization: {[key: string] : any}
}

const IterableInbox = ({ 
   navTitleCustomization,
   emptyStateCustomization,
   messageRowCustomization 
}: inboxProps) => {
   const defaultInboxTitle = "Inbox"
   const [isDisplayMessage, setIsDisplayMessage] = useState<boolean>(false)
   const [selectedMessageId, setSelectedMessageId] = useState<number>(1)
   const [messages, setMessages] = useState<Message[]>(sampleMessages)

   const selectedMessage = messages.find(message => message.messageId === selectedMessageId)

   function handleMessageSelect(id: number, messages: Message[]) {
      let newMessages = messages.map((message) => {
         return (message.messageId === id) ?
            {...message, read: true } : message
      })
      setMessages(newMessages)
      setIsDisplayMessage(true)
      setSelectedMessageId(id)
   }

   function deleteMessage(id: number, messages: Message[]) {
      let newMessages = sampleMessages.filter((message) => {
         return message.messageId !== id
      })
      newMessages[newMessages.length - 1] = {...newMessages[newMessages.length - 1], last: true}
      setMessages(newMessages)
   }

   function returnToInbox() {
      setIsDisplayMessage(false)
   }
   
   function showMessageDisplay(message: Message) {
      return (
         <IterableInboxMessageDisplay 
            message={message}
            returnToInbox={() => returnToInbox()}
         ></IterableInboxMessageDisplay>)
   }

   function showMessageList() {
      return (
         <>
            <Text style={styles.headline}>
               {navTitleCustomization.navTitle ? navTitleCustomization.navTitle : defaultInboxTitle}
            </Text>
            { messages.length ?
               <IterableInboxMessageList 
                  messages={messages}
                  customization={messageRowCustomization}
                  deleteMessage={(id: number) => deleteMessage(id, messages)}
                  handleMessageSelect={(id: number) => handleMessageSelect(id, messages)}/>  : 
               <IterableInboxEmptyState
                  customization={emptyStateCustomization} />
            }
         </>)
   }

   return(
      <SafeAreaView style={styles.container}>     
         {isDisplayMessage ? showMessageDisplay(selectedMessage) : showMessageList()}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      height: '100%'
   },
   headline: {
      fontWeight: 'bold' ,
      fontSize: 40,
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      backgroundColor: 'whitesmoke'
   }
})

export default IterableInbox