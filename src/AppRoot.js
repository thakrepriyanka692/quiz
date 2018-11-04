/**
 * @author
 * Aug 06, 2018
 * Root Navigator For App
 *
 */
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from './components/SplashScreen';
import WelcomeContainer from './components/Welcome/WelcomeContainer';
import QuizContainer from './components/Quiz/QuizContainer';
import QuizResultContainer from './components/QuizResult/QuizResultContainer';


const navigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
    height: 50,
    justifyContent: 'center',
    elevation: 0,
  },
  headerTitleStyle: {
    justifyContent: 'flex-end',
    fontWeight: 'bold',
  },
  headerTintColor: '#FFFFFF',
};


const screenTransition = {
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;

    const height = layout.initHeight;
    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    const modalTransition = { opacity, transform: [{ translateY }] };
    const normalTransition = { opacity, transform: [{ translateX: translateY }] };

    if ((typeof scene.route.params !== 'undefined') && (typeof scene.route.params.isModal !== 'undefined') && scene.route.params.isModal) {
      return modalTransition;
    }
    return normalTransition;
  },
};


export default AppRoot = createStackNavigator({
  SplashScreen: { screen: SplashScreen, navigationOptions: { header: null } },
  WelcomeContainer: { screen: WelcomeContainer, navigationOptions: { header: null } },
  Quiz: { screen: QuizContainer, navigationOptions: { header: null } },
  QuizResultContainer: { screen: QuizResultContainer, navigationOptions: { header: null } },
}, {
  headerMode: 'screen',
  transitionConfig: () => (screenTransition)
}, {
  navigationOptions
});

export function setRootNavigation(navigation) {
  this.rootNavigation = navigation;
}

export function getRootNavigation() {
  return this.rootNavigation;
}
