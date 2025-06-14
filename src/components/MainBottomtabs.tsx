import {
  MaterialBottomTabNavigationEventMap,
  MaterialBottomTabNavigationOptions,
} from "@react-navigation/material-bottom-tabs";
import { MaterialBottomTabNavigationConfig } from "@react-navigation/material-bottom-tabs/lib/typescript/src/types";
import {
  DefaultNavigatorOptions,
  ParamListBase,
  TabNavigationState,
  TabRouterOptions,
  TypedNavigator,
} from "@react-navigation/native";
import * as React from "react";
// import Icon, { IconName } from "@/assets/icons/Icon";
import { Text, Box } from "./Restyle";
import Icon, { IconName } from "../assets/icons/Icon";


export type TabType<K> = {
  tabText: string;
  inactiveTabIcon: IconName;
  name: keyof K;
  svgIconName: IconName;
  component: React.FC;
};
//@ts-ignore
type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabNavigationEventMap
> &
  TabRouterOptions &
  MaterialBottomTabNavigationConfig;

type BottomTabPropsType<T extends ParamListBase> = {
  //@ts-ignore
  Tab: TypedNavigator<
    T,
    TabNavigationState<ParamListBase>,
    MaterialBottomTabNavigationOptions,
    MaterialBottomTabNavigationEventMap,
    ({
      id,
      backBehavior,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: Props) => React.JSX.Element
  >;
  tabList: TabType<T>[];
};

function MainBottomTabs<T extends ParamListBase>({
  Tab,
  tabList,
}: BottomTabPropsType<T>) {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
      }}
      labeled={false}
      sceneAnimationEnabled={false}
      shifting={false}
    >
      {tabList.map((tab, index) => (
        <Tab.Screen
          component={tab.component}
          key={tab.name.toString()}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }: any) => (
              <Box alignItems="center" zIndex={999} justifyContent="center">
                <Box
                  alignItems="center"
                  backgroundColor="white"
                  height={50}
                  justifyContent="center"
                  width={80}
                >
                  <Icon
                    name={focused ? tab.svgIconName : tab.inactiveTabIcon}
                  />
                  <Text
                    color={focused ? "black" : "textTint"}
                    marginTop="xs"
                    variant="bold12"
                  >
                    {tab.tabText}
                  </Text>
                </Box>
              </Box>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainBottomTabs;
