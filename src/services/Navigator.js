import { StackActions } from '@react-navigation/native';
/**
 * @description Navigator Service used to navigate and keep track of the current view
 */
class Navigator {
  // Reference to the current instance of the Navigator
  static navigatorRef = null;

  // Used to keep track of the current view
  static currentRouteName = null;

  static isRefSet() {
    return this.navigatorRef != null;
  }

  /**
   * @description Set Navigator reference
   * @param ref: Object
   */
  static setRef(ref) {
    this.navigatorRef = ref;
  }

  /**
   * @description Clear Navigator reference
   */
  static clearRef() {
    this.navigatorRef = null;
  }

  /**
   * @description Set the current view route name
   * @param routeName: String
   */
  static setCurrentRouteName(routeName) {
    this.currentRouteName = routeName;
  }

  /**
   * @description Navigate to route
   * @param routeName: String
   * @param params: Object
   * @param action: NavigationAction (https://reactnavigation.org/docs/navigation-actions)
   */
  static navigate(routeName, params, action) {
    this.setCurrentRouteName(routeName);
    this.navigatorRef.navigate(routeName, params, action);
  }

  static pop() {
    this.navigatorRef.pop();
    this.setCurrentRouteName(this.navigatorRef.state.routeName);
  }

  static reset(tab, options = {}) {
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        this.navigatorRef.navigate({
          routeName: options.initialRouteName,
          params: options.initialParams,
        }),
        this.navigatorRef.navigate({
          routeName: options.newRouteName,
          params: options.newParams,
        }),
      ],
    });

    const switchTabAction = this.navigatorRef.navigate({
      routeName: tab,
      action: resetAction,
    });

    this.navigatorRef.dispatch(switchTabAction);
  }

  /**
   * @description pop current screen and navigate to a new one
   * @param routeName: String
   * @param params: Object
   * @param action: NavigationAction (https://reactnavigation.org/docs/navigation-actions)
   */
  static replace(routeName, params, action) {
    // it is currently popping current screen and navigating to the new one
    // because of that, animations don't work or work the wrong way. navigator.replace doesn't work
    // library requires hacking in order to work
    this.navigatorRef.pop();
    this.navigatorRef.navigate(routeName, params, action);
  }
}

export default Navigator;
