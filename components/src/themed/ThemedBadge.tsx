import React from 'react';
import { Badge, useTheme } from 'react-native-paper';
import { useAlternateTheme } from './hooks/useAlternateTheme';

export type ThemedBadgeProps = React.ComponentProps<typeof Badge>;

/**
 * ThemedBadge component
 *
 * This component is a wrapper around the React Native Paper [Badge](https://callstack.github.io/react-native-paper/badge.html)
 * component. It accepts all the same props as the RNP component. The wrapper simply performs some minor theme / style overrides
 * in order to make the component look the way we want for PX Blue projects.
 */
export const ThemedBadge: React.FC<ThemedBadgeProps> = (props) => {
    const { theme: themeOverride, ...other } = props;
    const fullTheme = useTheme(themeOverride);
    const theme = useAlternateTheme(
        themeOverride,
        { colors: { notification: fullTheme.colors.primaryPalette.main } },
        { colors: { notification: fullTheme.colors.primaryPalette.dark } }
    );

    return <Badge {...other} theme={theme} />;
};