'use strict'

import React from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

import Message from './messageType'

type MessageListItemProps = {
   message: Message,
   customization: {[key: string]: any}
}

const IterableInboxMessageListItem = ({ message, customization }: MessageListItemProps) => {
   const messageTitle = message.inboxMetadata.title
   const messageBody = message.inboxMetadata.subtitle
   const messageCreatedAt = message.createdAt

   function customizeStyles(styles: {[key: string]: any}, customization: {[key: string]: any}) {
      const elements = Object.keys(styles)
      const updatedStyles : {[key: string]: any} = {}

      for(let i = 0; i < elements.length; i++) {
         let element = elements[i]
         if(customization[element]) {
            updatedStyles[element] = {...styles[element], ...customization[element]}  
         } else {
            updatedStyles[element] = styles[element]
         }

         //updates the styling for the messageRow if the row is the last row
         if(element === "messageRow") {
            updatedStyles[element] = message.last ? 
               {...updatedStyles[element], borderBottomWidth: 1} :
               updatedStyles[element]
         }
      }

      return updatedStyles
   }

   const {
      unreadIndicatorContainer,
      unreadIndicator,
      unreadMessageContainer,
      readMessageContainer,
      title,
      body,
      createdAt,
      messageRow
   } = customizeStyles(styles, customization)

   return(
      <View style={messageRow}>
         <View style={unreadIndicatorContainer}>
            {message.read ? null : <View style={unreadIndicator}/>}
         </View>
         <View style={message.read ? readMessageContainer : unreadMessageContainer}>
            <Text style={title}>{messageTitle}</Text>
            <Text style={body}>{messageBody}</Text>
            <Text style={createdAt}>{messageCreatedAt}</Text>
         </View>
      </View>  
   )
}

const styles = StyleSheet.create({
   unreadIndicatorContainer: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start'
   },

   unreadIndicator: { 
      width: 15,
      height: 15,
      borderRadius: 15 / 2,
      backgroundColor: 'blue',
      marginLeft: 10,
      marginRight: 5,
      marginTop: 7
   },

   unreadMessageContainer: {
      paddingLeft: 5
   },

   readMessageContainer: {
      paddingLeft: 30
   },

   title: {
      fontSize: 22,
      paddingBottom: 10
   },

   body: {
      fontSize: 15,
      color: 'lightgray',
      paddingBottom: 10
   },

   createdAt: {
      fontSize: 12,
      color: 'lightgray'
   },

   messageRow: {
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      height: 100,
      borderStyle: 'solid',
      borderColor: 'lightgray',
      borderTopWidth: 1
   }
})

export default IterableInboxMessageListItem