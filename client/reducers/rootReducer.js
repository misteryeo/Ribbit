// this is the file for the redux root reducer
import { combineReducers } from 'redux';
import chatMessagesReducer from './chatMessage-reducer';
import roomNameReducer from './roomNameReducer';
import addUserNameReducer from './addUserName-reducer';
import messageTextReducer from './messageText-reducer';
import addUserEmail from './addUserEmail-reducer';
import toggleDropdownReducer from './toggleDropdown-reducer';
import getPreviousRoomNameReducer from './getPreviousRoomNames-reducer';
import loggedInReducer from './loggedIn-reducer';
import addUserId from './addUserId-reducer';
import peerNameReducer from './peerName-reducer';

const rootReducer = combineReducers({
  messages: chatMessagesReducer,
  userName: addUserNameReducer,
  roomName: roomNameReducer,
  text: messageTextReducer,
  email: addUserEmail,
  dropdownDisplay: toggleDropdownReducer,
  previousRoomNames: getPreviousRoomNameReducer,
  loggedIn: loggedInReducer,
  userId: addUserId,
  peerName: peerNameReducer
});

export default rootReducer;
