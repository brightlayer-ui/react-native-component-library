import React, { ComponentType } from 'react';
import { ICON_SIZE } from './constants';
import { useColor } from './contexts/ColorContextProvider';

type HeaderIconProps = {
    /** The icon to render  */
    IconClass?: ComponentType<{ size: number; color: string }>;
};
export const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
    const { IconClass } = props;
    const { color } = useColor();
    if (IconClass) {
        return <IconClass size={ICON_SIZE} color={color} />;
    }
    return null;
};