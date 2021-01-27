import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from 'react-native-paper';

type BottomSheetProps = {
    show?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    safeAreaColor?: string;
};

export const BottomSheet: React.FC<BottomSheetProps> = (props) => {
    const { show, children, onClose, safeAreaColor } = props;
    const theme = useTheme();

    return (
        <Modal
            isVisible={show}
            backdropOpacity={0.5}
            onBackdropPress={onClose}
            supportedOrientations={['portrait', 'landscape']}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <SafeAreaView style={{ backgroundColor: safeAreaColor || theme.colors.surface }}>{children}</SafeAreaView>
        </Modal>
    );
};
