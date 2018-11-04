import {
  Platform,
  NetInfo
} from 'react-native';
import moment from 'moment';

class Validators {
  static validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static validPassword(password) {
    if (password.length < 5) {
      return false;
    }
    return true;
  }

  static validPhoneNumber(number) {
    const re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
    if (!re.test(number)) {
      return false;
    }
    return true;
  }

  static validMobileNumber(number) {
    if (number.length != 10) {
      return true;
    }
    return false;
  }

  static isEmpty(name) {
    if (name && name.trim() != '') {
      return false;
    }
    return true;
  }

  static onlyAlphabets(value) {
    const flag = /[^0-9\s]|^\S+$]/;
    return flag.test(value);
  }

  static isNetworkConnected() {
    if (Platform.OS === 'ios') {
      return new Promise((resolve) => {
        const handleFirstConnectivityChangeIOS = (isConnected) => {
          NetInfo.isConnected.removeEventListener(
            'change',
            handleFirstConnectivityChangeIOS
          );
          resolve(isConnected);
        };
        NetInfo.isConnected.addEventListener(
          'change',
          handleFirstConnectivityChangeIOS
        );
      });
    }

    return NetInfo.isConnected.fetch().then((isConnected) => { return isConnected; });
  }

  static async restorAccount() {

  }

  static dateFormatter(date) {
    return moment(date).format('L');
  }

  static getTwoInitials(stringVal) {
    return stringVal.split(' ').map(n => n[0]).join('').substring(0, 2);
  }

  static timeFormatter(timeInSeconds) {
    const d = Number(timeInSeconds);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? `${h}:` : '';
    const mDisplay = m > 0 ? `${m}:` : '00:';
    const sDisplay = s >= 0 ? s : '';

    return (hDisplay + mDisplay + sDisplay);
  }
}

export default Validators;
