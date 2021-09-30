import React from 'react'
import { render } from '@testing-library/react-native'
import IterableInboxEmptyState from '../IterableInboxEmptyState'

describe('<IterableInboxEmptyState>', () => {
   it('displays default empty state when customization is noMessagesTitle and noMessagesBody are empty', () => {
      const customizations = {
         navTitle: "",
         noMessagesTitle: "",
         noMessagesBody: "",
      
         unreadIndicatorContainer: {
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center'
         },
      
         unreadIndicator: { 
            width: 15,
            height: 15,
            borderRadius: 15 / 2,
            backgroundColor: 'orange',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 7
         },
      
         unreadMessageIconContainer: {
            paddingLeft: 0
         },
      
         readMessageIconContainer: {
            paddingLeft: 35
         },
      
         messageContainer: {
            paddingLeft: 10
         },
      
         title: {
            fontSize: 22,
            fontFamily: 'Menlo',
            paddingBottom: 10
         },
      
         body: {
            fontSize: 15,
            color: 'lightgray',
            width: '65%',
            flexWrap: "wrap",
            paddingBottom: 10
         },
      
         createdAt: {
            fontSize: 12,
            fontFamily: 'Optima',
            color: 'red'
         },
      
         messageRow: {
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            height: 100,
            borderStyle: 'solid',
            borderColor: 'orange',
            borderTopWidth: 1
         }
      }

      const tabHeight= 80
      const tabBarPadding = 20
      const navTitleHeight = 80
      const height = 896

      const { getByTestId } = render(
         <IterableInboxEmptyState 
            customizations={customizations}
            tabBarHeight={tabHeight}
            tabBarPadding={tabBarPadding}
            navTitleHeight={navTitleHeight}
            height={height}
            isPortrait={true}
         />
      )
      
      expect(getByTestId("title").children[0]).toEqual("No saved messages")
      expect(getByTestId("body").children[0]).toEqual("Check again later!")      
   })

   it('displays customized empty state when noMessagesTitle and noMessagesBody are provided', () => {
      const customizations = {
         navTitle: "",
         noMessagesTitle: "no kittens today...",
         noMessagesBody: "come through tomorrow",
      
         unreadIndicatorContainer: {
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center'
         },
      
         unreadIndicator: { 
            width: 15,
            height: 15,
            borderRadius: 15 / 2,
            backgroundColor: 'orange',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 7
         },
      
         unreadMessageIconContainer: {
            paddingLeft: 0
         },
      
         readMessageIconContainer: {
            paddingLeft: 35
         },
      
         messageContainer: {
            paddingLeft: 10
         },
      
         title: {
            fontSize: 22,
            fontFamily: 'Menlo',
            paddingBottom: 10
         },
      
         body: {
            fontSize: 15,
            color: 'lightgray',
            width: '65%',
            flexWrap: "wrap",
            paddingBottom: 10
         },
      
         createdAt: {
            fontSize: 12,
            fontFamily: 'Optima',
            color: 'red'
         },
      
         messageRow: {
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            height: 100,
            borderStyle: 'solid',
            borderColor: 'orange',
            borderTopWidth: 1
         }
      }

      const tabHeight= 80
      const tabBarPadding = 20
      const navTitleHeight = 80
      const height = 896

      const { getByTestId } = render(
         <IterableInboxEmptyState 
            customizations={customizations}
            tabBarHeight={tabHeight}
            tabBarPadding={tabBarPadding}
            navTitleHeight={navTitleHeight}
            height={height}
            isPortrait={true} 
         />
      )
      
      expect(getByTestId("title").children[0]).toEqual("no kittens today...")
      expect(getByTestId("body").children[0]).toEqual("come through tomorrow")      
   })
})