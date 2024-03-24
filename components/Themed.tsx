/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, Image as DefaultImage, TextInput as DefaultInput, Pressable as DefaultPressable, PressableProps as DefaultPressableProps, StyleProp, ViewStyle, PressableStateCallbackType } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';
import { useCallback } from 'react';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ImageProps = ThemeProps & DefaultImage['props'];
export type TextInputProps = ThemeProps & DefaultInput['props'];
export type PressableProps = DefaultPressableProps & {
  style?: ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | StyleProp<ViewStyle>;
  title?: string;
};
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color, fontFamily: 'Quicksand-Regular' }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  return <DefaultView style={[style]} {...otherProps} />;
}

export function Image(props: ImageProps) {
  const { style, ...otherProps } = props;

  return <DefaultImage style={[style]} {...otherProps} />;
}

export function TextInput(props: DefaultInput['props']) {
  const { style, ...otherProps } = props;
  const customStyles = {
    backgroundColor: '#0b2344',
    color: 'white',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    fontFamily: 'Quicksand-Regular',
    height: 50,
  }
  return <DefaultInput style={[customStyles, style]} placeholderTextColor="white" {...otherProps} />;
}

export function Pressable(props: PressableProps) {
  const { style, title = "Sem Titulo", ...otherProps } = props;
  const defaultStyle = {
    height: 50,
    display: 'flex' as const,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    fontFamily: 'Quicksand-Regular',
  }
  return <DefaultPressable style={state => [defaultStyle, typeof style === 'function' ? style(state) : style]} {...otherProps}><Text style={{ color: 'black', fontSize: 16 }}>{title}</Text></DefaultPressable>;
}