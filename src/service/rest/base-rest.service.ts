import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {Alert} from 'react-native';
import { Actions } from "react-native-router-flux";

class BaseRestService {
  
  public wrapError(observable: Observable<any>): Observable<any> {
    return observable.pipe(tap(null, this.catchError));
  }

  private catchError(error: any) {
    const errMsgList: string[] = error.response.data.messageList;
    if (errMsgList && errMsgList.length > 0) {
      Alert.alert('Error', errMsgList.join('\n'));
    } else {
      const errMsg: string = error.response.data.message ||  error.message ;
      if (errMsg) {
        Alert.alert('Error', errMsg);
      } else {
        Alert.alert('Error', 'Unknown Error');
      }
    }
    const isInvalidGrant = errMsgList.join(', ').toLowerCase().includes('invalid grant');
    if (isInvalidGrant) {
      Actions.reset('SigninPage');
    }
  }

}

export default BaseRestService;